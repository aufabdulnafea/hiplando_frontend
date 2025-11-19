'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme-mode-toggle-dropdown';
import { UserDropDown } from '@/components/user-dropdown';
import { NotificationsDropDown } from '@/components/notifications-dropdown';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/container';

export function Navbar() {
    const { user } = useAuth();
    const t = useTranslations();

    return (
        <header
            // className="sticky shadow top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur-md dark:bg-background/90 supports-[backdrop-filter]:bg-background/70  dark:supports-[backdrop-filter]:bg-background/90"
            className="sticky shadow top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur-md dark:bg-background/90"
            role="banner"
        >
            <Container>
                <nav
                    className="flex h-16 items-center justify-between"
                    aria-label="Main navigation"
                >
                    <Link
                        href="/"
                        className="text-2xl font-extrabold text-primary hover:opacity-90 transition-opacity"
                        aria-label="Go to homepage"
                    >
                        {t("name")}
                    </Link>


                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        {user ? (
                            <div className="flex items-center gap-2">
                                <NotificationsDropDown />
                                <UserDropDown />
                            </div>
                        ) : (
                            <Button asChild className="font-medium">
                                <Link href="/auth">Login</Link>
                            </Button>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
}

'use client'

import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme-mode-toggle'
import UserDropDown from '@/components/user-dropdown'
import NotificationsDropDown from '@/components/notifications-dropdown'
import Container from '@/components/container'

export default function Navbar() {
    const { user } = useAuth()

    return (
        <header className="sticky top-0 z-50 w-full border-b shadow bg-background backdrop-blur supports-[backdrop-filter]:bg-background/85">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-extrabold text-primary">
                        Hiplando
                    </Link>

                    {/* Navigation Menu */}
                    {/* <NavigationMenu>
                        <NavigationMenuList className="hidden md:flex space-x-2">
                            {['Horses', 'Transport', 'Competitions', 'Services'].map((item) => (
                                <NavigationMenuItem key={item}>
                                    <Link href={`/${item.toLowerCase()}`} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                'px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent hover:text-accent-foreground'
                                            )}
                                        >
                                            {item}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu> */}

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        {user ? (
                            <div className="flex items-center gap-2">
                                <UserDropDown />
                                <NotificationsDropDown />
                            </div>
                        ) : (
                            <Button asChild>
                                <Link href="/auth">Login</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
}

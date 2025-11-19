'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function HeroButtons() {
    const [loggedIn, setLoggedIn] = useState(false);
    const t = useTranslations('HomePage');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setLoggedIn(!!user));
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/horses" aria-label="Browse available horses">
                <Button
                    size="lg"
                    className="px-8 py-6 bg-yellow-500 hover:bg-yellow-400 text-primary font-semibold transition-transform focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                    {t('heroButton1')}
                </Button>
            </Link>

            <Link href={loggedIn ? "/add-horse" : "/auth"} aria-label="Post a new horse listing">
                <Button
                    variant="secondary"
                    size="lg"
                    className="px-8 py-6 font-semibold transition-transform focus-visible:ring-2 focus-visible:ring-white"
                >
                    {t('heroButton2')}
                </Button>
            </Link>
        </div>
    );
}

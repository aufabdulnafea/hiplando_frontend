'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Subscribe to Firebase Auth
        const unsubscribe = auth.onAuthStateChanged(user => setLoggedIn(!!user));
        return () => unsubscribe(); // cleanup listener on unmount
    }, []);

    return (
        <section
            className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-neutral-900"
            aria-label="Hero section promoting global equine sales and services"
        >
            {/* Background Image */}
            <Image
                src="/hero.avif"
                alt="Elegant horse in motion, representing global equine marketplace"
                fill
                priority
                className="object-cover object-center opacity-90"
                sizes="100vw"
            />

            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

            {/* Hero Content */}
            <Container>
                <div className="relative z-10 text-white flex flex-col items-center justify-center text-center h-full gap-8 px-4">
                    {/* Headline */}
                    <div className="max-w-3xl space-y-3">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                            Global Equine Sales & Services
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-neutral-100">
                            Buy, sell, and manage horses and equestrian services worldwide.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <Link href="/horses" aria-label="Browse available horses">
                            <Button
                                size="lg"
                                className="rounded-xl px-8 py-6 bg-yellow-500 hover:bg-yellow-400 text-primary font-semibold transition-transform focus-visible:ring-2 focus-visible:ring-yellow-400"
                            >
                                Browse Horses
                            </Button>
                        </Link>

                        <Link href={loggedIn ? "/add-horse" : "/auth"} aria-label="Post a new horse listing">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="rounded-xl px-8 py-6 font-semibold transition-transform focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Post a Horse
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

            {/* Subtle gradient fade bottom */}
            <div
                className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"
                aria-hidden="true"
            />
        </section>
    );
}

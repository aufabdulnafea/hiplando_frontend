'use client'

import Link from "next/link";
import Container from "@/components/container";
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Hero() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setLoggedIn(!!user));
        return () => unsubscribe();
    }, []);

    return (
        <div className="relative w-full h-[80vh] bg-gray-800 flex items-center">
            {/* Background Image */}
            <Image
                src="/hero.avif"
                alt="Hero background"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}

            <Container >
                <div className="relative text-white flex flex-col items-center justify-center h-full gap-7">
                    <div className="max-w-2xl flex flex-col gap-2">
                        <h2 className="text-5xl md:text-center font-bold">Global Equine Sales & Services</h2>
                        <p className="text-xl md:text-center">Buy, sell, and manage horses and services worldwide.</p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <Link href="/horses">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="rounded-md h-12 bg-yellow-500 hover:bg-yellow-400 text-primary"
                            >
                                Browse Horses
                            </Button>
                        </Link>

                        <Link href={loggedIn ? "/add-horse" : "/auth"}>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="rounded-md h-12 border-2"
                            >
                                Post a Horse
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

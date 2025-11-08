'use client'

import Link from "next/link";
import Container from "@/components/container";
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/firebase'
import { useEffect, useState } from "react";

export default function Hero() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => auth.onAuthStateChanged(user => setLoggedIn(!!user)), [])

    return (
        <div className="bg-primary">
            <Container>
                <div className="py-50 flex flex-col gap-7 text-white">
                    <div className="w-full max-w-2xl m-auto text-center flex flex-col gap-2">
                        <h2 className="text-5xl font-bold ">Global Equine Sales & Services</h2>
                        <p className="text-xl ">Buy, sell, and manage horses and services worldwide.</p>
                    </div>
                    <div className="flex justify-center gap-4">

                        <Link href={''}>
                            <Button variant="ghost" size="lg" className="rounded-md h-12 bg-yellow-500 hover:bg-yellow-400 text-primary">
                                Browse Horses
                            </Button>
                        </Link>

                        <Link href={loggedIn ? "/add-horse" : "/auth"}>
                            <Button variant="ghost" size="lg" className="rounded-md h-12 border-2">
                                Post a Horse
                            </Button>
                        </Link>

                    </div>
                </div>
            </Container>
        </div>
    )
}
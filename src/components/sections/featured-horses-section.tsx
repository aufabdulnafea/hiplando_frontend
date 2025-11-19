'use client'

import HorseCard, { HorseCardSkeleton } from "../horse-card";
import { Button } from "@/components/ui/button";
import { getGraphQLClient } from "@/lib/graphql";
import { useState, useEffect } from "react";
import { FindManyHorseQuery } from "@/graphql/sdk";
import Link from "next/link";


export function FeaturedHorsesSection() {
    const [loading, setLoading] = useState(true)
    const [horses, setHorses] = useState<FindManyHorseQuery['findManyHorse']>([])

    useEffect(() => {
        const fetchHorses = async () => {
            const client = await getGraphQLClient()
            const { findManyHorse } = await client.findManyHorse({ take: 3 })
            setHorses(findManyHorse)
            setLoading(false)
        }
        fetchHorses()
    }, [])

    return (
        <section className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    Array.from({ length: 3 }).map((_, idx) => <HorseCardSkeleton key={idx} />)
                ) : horses.map((horse) => (
                    <HorseCard
                        key={horse.id}
                        horse={horse}
                    />
                ))}
            </div>
            <div className="flex justify-center pt-5">
                <Link href="/horses">
                    <Button
                        variant="default"
                        className="mt-6 h-12"
                    >
                        View All Horses
                    </Button>
                </Link>
            </div>
        </section>
    );
}
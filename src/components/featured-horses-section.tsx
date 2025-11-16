import { getGraphQLClient } from "@/lib/graphql";
import HorseCard from "./horse-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function FeaturedHorsesSection() {
    const sdk = await getGraphQLClient();
    const { findManyHorse: horses } = (await sdk.findManyHorse({ take: 3 }));
    return (
        <section className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {horses.map((horse) => (
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
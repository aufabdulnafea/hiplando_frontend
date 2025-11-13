import Container from "@/components/container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getGraphQLClient } from "@/lib/graphql";
import { unstable_cache } from "next/cache";
import { HorsePhotosSlider } from './horse-photos-slider'
import { MapPin } from "lucide-react";
import { formatPrice } from "@/lib/format-price";
import { Button } from "@/components/ui/button";

interface HorsePageProps {
    params: Promise<{ id: string }> | { id: string };
}


export default async function HorsePage({ params }: HorsePageProps) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const getHorseData = unstable_cache(
        async (id: string) => {
            const sdk = await getGraphQLClient();
            const { findUniqueHorse } = await sdk.findUniqueHorse({
                where: { id },
            });
            return findUniqueHorse;
        },
        ["horses", id],
        { tags: ["horses", id] }
    );

    const horse = await getHorseData(id);

    if (!horse) {
        return (
            <Container>
                <div className="py-40 text-center text-muted-foreground">
                    Horse not found
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="flex flex-col md:flex-row w-full gap-10 py-20">
                {/* Left: Image slider */}
                <div className="flex-2 md:w-2/3">
                    <Card className="relative pt-0 overflow-hidden">
                        <CardContent className="p-0">
                            {/* 👇 Client Component for interactivity */}
                            <HorsePhotosSlider photos={horse.photos} name={horse.name} />
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Horse details */}
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-primary">{horse.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                {/* <MapPin className="size-4" /> */}
                                <span>Age & Gender: </span>
                                <span>
                                    {horse.age} years - <span className="capitalize">{horse.gender.name}</span>
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discipline: </span>
                                <span className="capitalize">
                                    {horse.discipline.name}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Location: </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="size-4 text-card-foreground/30" /> {" "}
                                    {horse.location}
                                </span>
                            </div>
                            <div className="text-center text-4xl font-bold text-yellow-600 pt-6 pb-2">
                                {formatPrice(horse.price)}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Contact Agent</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </Container>
    );
}

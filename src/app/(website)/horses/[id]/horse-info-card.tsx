import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FindUniqueHorseQuery } from "@/graphql/sdk";
import { formatPrice } from "@/lib/format-price";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HorseInfoCardProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>;
}

export function HorseInfoCard({ horse }: HorseInfoCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">{horse.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex justify-between">
                    {/* <MapPin className="size-4" /> */}
                    <span>Age & Gender: </span>
                    <span>
                        {horse.yearOfBirth} years - <span className="capitalize">{horse.gender.name}</span>
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
    )
}
import { Card, CardContent } from "@/components/ui/card";
import { FindUniqueHorseQuery } from "@/graphql/sdk";

interface HorseDescriptionCardProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>;
}

export function HorseDescriptionCard({ horse }: HorseDescriptionCardProps) {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col gap-4">
                    {
                        horse.description.trim() !== "" && (
                            <>
                                <h3 className="text-xl font-bold text-primary">Description</h3>
                                <p>{horse.description}</p>
                            </>
                        )
                    }

                    <div className="flex flex-col gap-10 lg:flex-row">
                        <div className="flex-1">
                            <h3 className="font-semibold py-2">Basic Information</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span>Age & Gender:</span>
                                    <span>{horse.yearOfBirth} years - {horse.gender.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discipline:</span>
                                    <span>{horse.discipline.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Location:</span>
                                    <span>{horse.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold py-2">Pedigree</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span>Sire:</span>
                                    <span>{horse.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dam:</span>
                                    <span>{horse.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dame Sire:</span>
                                    <span>{horse.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
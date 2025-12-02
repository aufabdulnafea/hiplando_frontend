import { Container } from "@/components/container";
import { HorsePhotosSliderCard } from './horse-photos-slider-card'
import { HorseInfoCard } from "./horse-info-card";
import { HorseDescriptionCard } from "./horse-description-card";
import HorsePedigreeCard from "./horse-pedigree-card";
import { getHorseData } from "@/lib/api";

interface HorsePageProps {
    params: Promise<{ id: string }> | { id: string };
}

export default async function HorsePage({ params }: HorsePageProps) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    // const horse = await getHorseData(id)();
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
            <div className="flex  flex-col gap-10 pt-10 pb-20">
                <div className="flex flex-col md:flex-row w-full gap-10">

                    <div className="flex-2 md:w-2/3 flex flex-col gap-10">
                        <HorsePhotosSliderCard horse={horse} />
                    </div>

                    <div className="flex-1">
                        <HorseInfoCard horse={horse} />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row w-full gap-10">
                    <div className="flex-2 flex flex-col gap-10">
                        <HorsePedigreeCard />
                        <HorseDescriptionCard horse={horse} />
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </Container>
    );
}

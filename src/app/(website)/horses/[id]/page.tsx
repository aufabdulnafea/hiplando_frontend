import { Container } from "@/components/container";
import { getHorseData } from "@/lib/api";
import HorsePageClient from "./horse-page-client";

interface HorsePageProps {
    params: Promise<{ id: string }> | { id: string };
}

export default async function HorsePage({ params }: HorsePageProps) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

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
            <HorsePageClient horse={horse} />
        </Container>
    );
}

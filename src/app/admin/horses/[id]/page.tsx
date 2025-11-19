import { getHorseData } from "@/lib/api"
import { EditHorseForm } from "./edit-horse-form"

interface HorsePageProps {
    params: Promise<{ id: string }> | { id: string }
}

export default async function HorsePage({ params }: HorsePageProps) {
    const resolvedParams = await params
    const { id } = resolvedParams

    const horse = await getHorseData(id)()

    if (!horse) {
        return (
            <div className="p-5">
                <div className="text-center text-muted-foreground">
                    Horse not found
                </div>
            </div>
        )
    }

    return (
        <EditHorseForm horse={horse} />
    )
}

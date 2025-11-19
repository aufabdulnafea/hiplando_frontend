import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FindUniqueHorseQuery } from "@/graphql/sdk"
import { PhotoManager } from "./horse-images-list"

interface EditHorseFormProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>
}

export function EditHorseForm({ horse }: EditHorseFormProps) {
    return (
        <div className="p-5 flex flex-col gap-5">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input autoComplete="off" id="name" value={horse?.name || ""} />
            </div>

            <PhotoManager initialPhotos={horse?.photos || []} />

        </div>
    )
}
"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FindUniqueHorseQuery } from "@/graphql/sdk"
import { PhotoManager } from "./horse-images-list"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface EditHorseFormProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>
    categories: any[]
    genders: any[]
    disciplines: any[]
}

export function EditHorseForm({ horse, categories, genders, disciplines }: EditHorseFormProps) {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: horse.name,
            description: horse.description,
            price: horse.price,
            category: horse.category.id,
            status: horse.status,
            pedigreeURL: horse.pedigreeURL,
            videoURL: horse.videoURL,
            location: horse.location,
            yearOfBirth: horse.yearOfBirth,
            gender: horse.gender.id,
            discipline: horse.discipline.id,
            height: horse.height,
        }
    })

    return (
        <div className="p-5 flex flex-col gap-5">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input autoComplete="off" id="name" {...register("name")} />
            </div>

            <div>
                <Label htmlFor="yearOfBirth">Year of birth</Label>
                <Input autoComplete="off" type="number" id="yearOfBirth" {...register("yearOfBirth")} />
            </div>

            <div>
                <Label htmlFor="height">Height</Label>
                <Input autoComplete="off" type="number" id="height" {...register("height")} />
            </div>

            <div>
                <Label htmlFor="pedigreeURL">Pedigree URL</Label>
                <Input autoComplete="off" id="pedigreeURL" {...register("pedigreeURL")} />
            </div>

            <div>
                <Label htmlFor="videoURL">Video URL</Label>
                <Input autoComplete="off" id="videoURL" {...register("videoURL")} />
            </div>

            <div>
                <Label htmlFor="location">Location</Label>
                <Input autoComplete="off" id="location" {...register("location")} />
            </div>

            <PhotoManager initialPhotos={horse?.photos || []} />

            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea autoComplete="off" id="description" {...register("description")} />
            </div>

            <div>
                <Label htmlFor="price">Price</Label>
                <Input autoComplete="off" type="number" id="price" {...register("price")} />
            </div>

            <div>
                <Label htmlFor="category">Category</Label>
                <Select {...register("category")}>
                    <SelectTrigger className="w-full">
                        <SelectValue className="capitalize" placeholder={categories.find((category) => category.id === horse.category.id).name} />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category) => (
                            <SelectItem className="capitalize" key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="status">Status</Label>
                <Select {...register("status")}>
                    <SelectTrigger className="w-full">
                        <SelectValue className="capitalize" placeholder={horse.status} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem className="capitalize" value="available">
                            Available
                        </SelectItem>
                        <SelectItem className="capitalize" value="unavailable">
                            Unavailable
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="discipline">Discipline</Label>
                <Select {...register("discipline")}>
                    <SelectTrigger className="w-full">
                        <SelectValue className="capitalize" placeholder={disciplines.find((discipline) => discipline.id === horse.discipline.id).name} />
                    </SelectTrigger>
                    <SelectContent>
                        {disciplines.map((discipline) => (
                            <SelectItem className="capitalize" key={discipline.id} value={discipline.id}>
                                {discipline.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label htmlFor="gender">Gender</Label>
                <Select {...register("gender")}>
                    <SelectTrigger className="w-full">
                        <SelectValue className="capitalize" placeholder={genders.find((gender) => gender.id === horse.gender.id).name} />
                    </SelectTrigger>
                    <SelectContent>
                        {genders.map((gender) => (
                            <SelectItem className="capitalize" key={gender.id} value={gender.id}>
                                {gender.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* TODO: vet and xray reports */}

        </div>
    )
}
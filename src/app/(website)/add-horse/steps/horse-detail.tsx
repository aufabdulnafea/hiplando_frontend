'use client';
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FindManyHorseDisciplineQuery, FindManyHorseGenderQuery } from "@/graphql/sdk";
import { graphql } from '@/lib/graphql'

export default function HorseDetail() {
    const [genders, setGenders] = useState<FindManyHorseGenderQuery['findManyHorseGender']>([])
    const [disciplines, setDisciplines] = useState<FindManyHorseDisciplineQuery['findManyHorseDiscipline']>([])

    const { register, watch, setValue } = useFormContext();
    const name = watch("name");
    const age = watch("age");
    const gender = watch("gender");
    const discipline = watch('discipline')
    const location = watch('location')
    const price = watch('price')
    const height = watch('height')
    // const veterinaryDocuments = watch('veterinaryDocuments')
    // const xrayResults = watch('xrayResults')

    useEffect(() => {
        graphql.findManyHorseGender().then(res => setGenders(res.findManyHorseGender))
        graphql.findManyHorseDiscipline().then(res => setDisciplines(res.findManyHorseDiscipline))
    }, [])

    return (
        <div className="py-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-5">
                    <div>
                        <Label htmlFor="name" className="text-sm">Horse Name*</Label>
                        <Input id="name" {...register("name")} />
                    </div>

                    <div>
                        <Label htmlFor="pedigree" className="text-sm">Pedigree</Label>
                        <Input placeholder="HorseTelex link" id="pedigree" {...register("pedigree")} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="age" className="text-sm">Age*</Label>
                            <Input type="number" id="age" {...register("age")} />

                        </div>
                        <div>
                            <Label htmlFor="gender" className="text-sm">Gender*</Label>
                            <Select
                                onValueChange={(val) => setValue("gender", val)}
                                defaultValue={gender}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    {genders.map(el => (
                                        <SelectItem value={el.id} key={el.id}> {el.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="height" className="text-sm">Height (cm)*</Label>
                        <Input type="number" id="height" {...register("height")} />

                    </div>

                    <div>
                        <Label htmlFor="discipline" className="text-sm">Discipline*</Label>
                        <Select
                            onValueChange={(val) => setValue("discipline", val)}
                            defaultValue={discipline}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Discipline" />
                            </SelectTrigger>
                            <SelectContent>
                                {disciplines.map(el => (
                                    <SelectItem value={el.id} key={el.id}>{el.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="location" className="text-sm">Location*</Label>
                        <Input id="location" {...register('location')} />
                    </div>

                    <div>
                        <Label htmlFor="price" className="text-sm">Price*</Label>
                        <Input id="price" {...register('price')} />
                    </div>

                    <div>
                        <Label htmlFor="description" className="text-sm">Description</Label>
                        <Textarea id="description" {...register('description')} />
                    </div>

                    {/* <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-2">
                            <Checkbox
                                id="veterinary-documents-available"
                                checked={veterinaryDocuments}
                                onCheckedChange={(val) => setValue("veterinaryDocuments", val)}
                            />
                            <Label htmlFor="veterinary-documents-available">Veterinary documents available</Label>
                        </div>
                        <div className="flex items-start gap-2">
                            <Checkbox
                                checked={xrayResults}
                                onCheckedChange={(val) => setValue("xrayResults", val)}
                                id="x-ray-results-available"
                            />
                            <Label htmlFor="x-ray-results-available">X-ray results available</Label>
                        </div>
                    </div> */}
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between">
                                <h4>Name:</h4>
                                <h4>{name || "-"}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Age & Sex:</h4>
                                <h4>{(age || "-") + (gender ? " / " + genders.find(el => el.id === gender)?.name : "")}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Discipline:</h4>
                                <h4>{(discipline ? disciplines.find(el => el.id === discipline)?.name : "-")}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Location:</h4>
                                <h4>{(location)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Price:</h4>
                                <h4>{(price)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Height:</h4>
                                <h4>{(height)}</h4>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

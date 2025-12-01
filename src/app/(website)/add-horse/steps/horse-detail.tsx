import { useMemo, useRef, useState } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PedigreeTable, PedigreeArray } from "@/components/pedigree-table";
import { readHorseTelexPedigree } from "@/lib/api";
// import { PedigreeArray } from "@/types/pedigree";

interface Option {
    id: string;
    name: string;
}

interface HorseDetailProps {
    disciplines: Option[];
    genders: Option[];
}

export default function HorseDetail({ disciplines, genders }: HorseDetailProps) {
    const [pedigreeURL, setPedigreeURL] = useState("");
    const { register, control, setValue } = useFormContext();
    const lastPedigreeUrlRef = useRef("");

    const {
        name,
        yearOfBirth,
        genderId,
        disciplineId,
        location,
        price,
        height,
        pedigree
    } = useWatch();

    const genderMap = useMemo(
        () => Object.fromEntries(genders.map((g) => [g.id, g.name])),
        [genders]
    );

    const disciplineMap = useMemo(
        () => Object.fromEntries(disciplines.map((d) => [d.id, d.name])),
        [disciplines]
    );

    const onPedigreeUrlBlur = async () => {

        const url = pedigreeURL?.trim();

        if (!url) return;

        if (url === lastPedigreeUrlRef.current) return;

        lastPedigreeUrlRef.current = url;

        try {
            const pedigree = await readHorseTelexPedigree(url);
            setValue("pedigree", pedigree, { shouldDirty: true });
        } catch (error) {
            console.error(error);
            setValue("pedigree", []);
        }
    };


    return (
        <div className="py-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left column */}
                <div className="flex flex-col gap-5">

                    <div>
                        <Label htmlFor="name" className="text-sm">Horse Name*</Label>
                        <Input id="name" {...register("name")} autoComplete="off" required />
                    </div>

                    <div>
                        <Label htmlFor="pedigree-url" className="text-sm">HorseTelex Link</Label>
                        <Input
                            placeholder="https://www.horsetelex.com/horses/pedigree/id/name"
                            id="pedigree-url"
                            autoComplete="off"
                            onBlur={onPedigreeUrlBlur}
                            onChange={(e) => setPedigreeURL(e.target.value)}
                            value={pedigreeURL}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="year-of-birth" className="text-sm">Year of Birth*</Label>
                            <Input
                                id="year-of-birth"
                                type="number"
                                {...register("yearOfBirth", { valueAsNumber: true })}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="gender" className="text-sm">Gender*</Label>

                            <Controller
                                name="genderId"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-full capitalize">
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {genders.map((g) => (
                                                <SelectItem className="capitalize" value={g.id} key={g.id}>
                                                    {g.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="height" className="text-sm">Height (cm)*</Label>
                        <Input
                            id="height"
                            type="number"
                            {...register("height", { valueAsNumber: true })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="discipline" className="text-sm">Discipline*</Label>

                        <Controller
                            name="disciplineId"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="w-full capitalize">
                                        <SelectValue placeholder="Select discipline" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {disciplines.map((d) => (
                                            <SelectItem className="capitalize" value={d.id} key={d.id}>
                                                {d.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>

                    <div>
                        <Label htmlFor="location" className="text-sm">Location*</Label>
                        <Input id="location" {...register("location")} autoComplete="off" required />
                    </div>

                    <div>
                        <Label htmlFor="price" className="text-sm">Price*</Label>
                        <Input
                            id="price"
                            type="number"
                            {...register("price", { valueAsNumber: true })}
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="description" className="text-sm">Description</Label>
                        <Textarea id="description" {...register("description")} autoComplete="off" />
                    </div>

                </div>

                <div className="flex flex-col gap-5">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <div className="flex justify-between">
                                <h4>Name:</h4>
                                <h4>{name || "-"}</h4>
                            </div>

                            <div className="flex justify-between">
                                <h4>Age & Sex:</h4>
                                <h4>
                                    {yearOfBirth || "-"} {genderId ? `/ ${genderMap[genderId]}` : ""}
                                </h4>
                            </div>

                            <div className="flex justify-between">
                                <h4>Discipline:</h4>
                                <h4>{disciplineId ? disciplineMap[disciplineId] : "-"}</h4>
                            </div>

                            <div className="flex justify-between">
                                <h4>Height:</h4>
                                <h4>{height || "-"}</h4>
                            </div>

                            <div className="flex justify-between">
                                <h4>Location:</h4>
                                <h4>{location || "-"}</h4>
                            </div>

                            <div className="flex justify-between">
                                <h4>Price:</h4>
                                <h4>{price || "-"}</h4>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pedigree Review</CardTitle>
                            <CardDescription>
                                Auto generated pedigree based on the horse's pedigree URL
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PedigreeTable data={pedigree || []} />
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

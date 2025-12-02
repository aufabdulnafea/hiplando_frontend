"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCcw, Upload } from "lucide-react";
import { PedigreeTable } from "@/components/pedigree-table";
import { PhotoManager } from "./horse-images-list";
import { extractYouTubeVideoId, toYouTubeEmbed, toYoutubeURL } from "@/lib/helpers";
import { getProtectedFile, readHorseTelexPedigree, updateHorse } from "@/lib/api";
import type { PedigreeArray } from "@/components/pedigree-table";
import type { Horse } from "@/graphql/sdk";

interface EditHorseFormProps {
    horse: Horse;
    categories: any[];
    genders: any[];
    disciplines: any[];
}

export function EditHorseForm({ horse, categories, genders, disciplines }: EditHorseFormProps) {
    const [vetReportURL, setVetReportURL] = useState<string | undefined>();
    const [youtubeURL, setYoutubeURL] = useState<string>(toYoutubeURL(horse.youtubeVideoId));
    const [xrayURL, setXrayURL] = useState<string | undefined>();
    const [pedigreeData, setPedigreeData] = useState<PedigreeArray>(horse.pedigree || []);
    const [pedigreeURL, setPedigreeURL] = useState<string | undefined>(horse.pedigree ? horse.pedigree[0].href || "" : "");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const { register, watch, setValue, getValues } = useForm({
        defaultValues: {
            photos: horse.photos,
            name: horse.name,
            location: horse.location,
            yearOfBirth: horse.yearOfBirth,
            height: horse.height,
            price: horse.price,
            description: horse.description,
            youtubeVideoId: horse.youtubeVideoId ?? null,
            genderId: horse.gender.id,
            disciplineId: horse.discipline.id,
            categoryId: horse.category.id,
            pedigree: horse.pedigree,
        },
    });

    const videoId = watch("youtubeVideoId");

    useEffect(() => {
        Promise.all([
            getProtectedFile(horse.vetReport ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/private/${horse.vetReport}` : "").then(setVetReportURL),
            getProtectedFile(horse.xrayResults ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/private/${horse.xrayResults}` : "").then(setXrayURL),
        ]);
    }, [horse.vetReport, horse.xrayResults]);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const files = Array.from(e.target.files);
    };

    const onSubmit = async () => {
        const formValues = getValues();
        try {
            const newHorse = await updateHorse(horse.id, formValues);
            console.log("Horse updated successfully", newHorse);
        } catch (error) {
            console.error("Failed to update horse:", error);
        }
    };

    return (
        <div className="p-4 w-full max-w-screen-xl mx-auto flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Edit Horse</h1>
                <div className="flex gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={onSubmit}>Save Changes</Button>
                </div>
            </div>

            <div className="flex flex-col gap-5">

                <Card className="p-6">
                    <SectionTitle>
                        <div className="flex items-center justify-between">
                            Photos
                            <Button variant="outline" size='icon' onClick={handleClick}><Upload /></Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleChange}
                            />
                        </div>
                    </SectionTitle>
                    <PhotoManager
                        horseId={horse.id}
                        initialPhotos={watch("photos")}
                        action={(filesOrNames) => setValue("photos", filesOrNames as string[])}
                    />
                </Card>

                <Card className="p-8">
                    <SectionTitle>Video</SectionTitle>

                    <Field label="YouTube Link">
                        <Input
                            placeholder="Paste YouTube link"
                            value={youtubeURL}
                            onChange={(e) => {
                                setYoutubeURL(e.target.value)
                                setValue("youtubeVideoId", extractYouTubeVideoId(e.target.value))
                            }}
                        />
                    </Field>

                    <Card className="mt-6 h-[400px] rounded-xl overflow-hidden shadow-inner">
                        {videoId ? (
                            <iframe
                                src={toYouTubeEmbed(videoId)}
                                className="w-full h-full"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                No video selected
                            </div>
                        )}
                    </Card>
                </Card>

                <Card className="p-8">
                    <SectionTitle>Basic Information</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <Field label="Name">
                            <Input {...register("name")} autoComplete="off" />
                        </Field>

                        <Field label="Location">
                            <Input {...register("location")} autoComplete="off" />
                        </Field>

                        <Field label="Year of Birth">
                            <Input type="number" {...register("yearOfBirth")} autoComplete="off" />
                        </Field>

                        <Field label="Height (cm)">
                            <Input type="number" {...register("height")} autoComplete="off" />
                        </Field>

                        <Field label="Category">
                            <Select {...register("categoryId")} defaultValue={horse.category.id}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((c) => (
                                        <SelectItem key={c.id} value={c.id}>
                                            {c.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Gender">
                            <Select {...register("genderId")} defaultValue={horse.gender.id}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    {genders.map((g) => (
                                        <SelectItem key={g.id} value={g.id}>
                                            {g.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Discipline">
                            <Select {...register("disciplineId")} defaultValue={horse.discipline.id}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select discipline" />
                                </SelectTrigger>
                                <SelectContent>
                                    {disciplines.map((d) => (
                                        <SelectItem key={d.id} value={d.id}>
                                            {d.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Price (€)">
                            <Input type="number" {...register("price")} autoComplete="off" />
                        </Field>
                    </div>

                    <Field label="Description" className="mt-6">
                        <Textarea rows={6} {...register("description")} autoComplete="off" />
                    </Field>
                </Card>

                <Card className="p-8">
                    <SectionTitle>Pedigree</SectionTitle>

                    <Field label="HorseTelex Link">
                        <div className="flex gap-2">
                            <Input id="pedigree-url" value={pedigreeURL} onChange={(e) => setPedigreeURL(e.target.value)} autoComplete="off" />
                            <Button variant="outline" onClick={() => {
                                if (pedigreeURL) {
                                    readHorseTelexPedigree(pedigreeURL).then((data) => {
                                        setPedigreeData(data)
                                    })
                                }
                            }}>
                                <RefreshCcw className="w-4 h-4" />
                            </Button>
                        </div>
                    </Field>
                    <Card className="mt-6 border rounded-xl shadow-inner overflow-hidden">
                        <PedigreeTable data={pedigreeData} />
                    </Card>
                </Card>
                <Card className="p-8">
                    <SectionTitle>Health Documents</SectionTitle>
                    <DocUpload label="X-Ray Results" fileURL={xrayURL} />
                    <div className="mt-6" />
                    <DocUpload label="Vet Report" fileURL={vetReportURL} />
                </Card>
            </div>
        </div>
    );
}

/* ------------------------- SMALL COMPONENTS ------------------------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-xl font-semibold mb-4">{children}</h2>;
}

function Field({
    label,
    children,
    className,
}: {
    label: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <Label>{label}</Label>
            {children}
        </div>
    );
}

function DocUpload({ label, fileURL }: { label: string; fileURL?: string }) {
    return (
        <div className="flex flex-col gap-3">
            <Label>{label}</Label>
            <Input type="file" accept="application/pdf" />
            {fileURL && (
                <Button
                    variant="link"
                    className="p-0 w-fit underline"
                    onClick={() => window.open(fileURL, "_blank")}
                >
                    Open {label}
                </Button>
            )}

            <Card className="h-[500px] overflow-hidden border rounded-xl shadow-inner p-0">
                {fileURL ? (
                    <iframe src={fileURL} className="w-full h-full" />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        No document uploaded
                    </div>
                )}
            </Card>
        </div>
    );
}

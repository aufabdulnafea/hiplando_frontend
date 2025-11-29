"use client";

import { useEffect, useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCcw } from "lucide-react";
import Link from "next/link";

import { PedigreeTable } from "@/components/pedigree-table";
import { PhotoManager } from "./horse-images-list";
import { extractYouTubeVideoId, toYouTubeEmbed } from "@/lib/helpers";
import { getProtectedFile } from "@/lib/api";

import type { Horse } from "@/graphql/sdk";

interface EditHorseFormProps {
    horse: Horse;
    categories: any[];
    genders: any[];
    disciplines: any[];
}

export function EditHorseForm({
    horse,
    categories,
    genders,
    disciplines,
}: EditHorseFormProps) {
    const [vetReportURL, setVetReportURL] = useState<string | undefined>();
    const [xrayURL, setXrayURL] = useState<string | undefined>();

    const { register, watch } = useForm({
        defaultValues: {
            ...horse,
            category: horse.category.id,
            gender: horse.gender.id,
            discipline: horse.discipline.id,
        },
    });

    const videoId = watch("youtubeVideoId");

    useEffect(() => {
        Promise.all([
            getProtectedFile(horse.vetReport ?? "").then(setVetReportURL),
            getProtectedFile(horse.xrayResults ?? "").then(setXrayURL),
        ]);
    }, [horse.vetReport, horse.xrayResults]);

    return (
        <div className="p-8 max-w-screen-xl mx-auto flex flex-col gap-5">

            {/* TITLE HEADER */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Edit Horse</h1>
                <div className="flex gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                </div>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                {/* LEFT: IMAGES */}
                <Card className="p-6 col-span-1">
                    <SectionTitle>Photos</SectionTitle>
                    <PhotoManager initialPhotos={horse.photos ?? []} />
                </Card>

                {/* RIGHT (2/3): BASIC INFO */}
                <Card className="p-8 col-span-1 lg:col-span-2">
                    <SectionTitle>Basic Information</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <Field label="Name">
                            <Input {...register("name")} />
                        </Field>

                        <Field label="Location">
                            <Input {...register("location")} />
                        </Field>

                        <Field label="Year of Birth">
                            <Input type="number" {...register("yearOfBirth")} />
                        </Field>

                        <Field label="Height (cm)">
                            <Input type="number" {...register("height")} />
                        </Field>

                        <Field label="Category">
                            <Select {...register("category")}>
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
                            <Select {...register("gender")}>
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
                            <Select {...register("discipline")}>
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
                            <Input type="number" {...register("price")} />
                        </Field>
                    </div>

                    <Field label="Description" className="mt-6">
                        <Textarea rows={6} {...register("description")} />
                    </Field>
                </Card>

                {/* PEDIGREE */}
                <Card className="p-8 col-span-1 lg:col-span-2">
                    <SectionTitle>Pedigree</SectionTitle>

                    <div className="flex gap-2">
                        <Input {...register("pedigreeURL")} />
                        <Button variant="outline">
                            <RefreshCcw className="w-4 h-4" />
                        </Button>
                    </div>

                    <Card className="mt-6 border rounded-xl shadow-inner overflow-hidden">
                        <PedigreeTable data={[]} />
                    </Card>
                </Card>

                {/* VIDEO */}
                <Card className="p-8 col-span-1">
                    <SectionTitle>Video</SectionTitle>

                    <Field label="YouTube Link">
                        <Input
                            placeholder="Paste YouTube link"
                            {...register("youtubeVideoId", {
                                setValueAs: (url) => extractYouTubeVideoId(url) || "",
                            })}
                        />
                    </Field>

                    <Card className="mt-6 h-56 rounded-xl overflow-hidden shadow-inner">
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

                {/* HEALTH DOCUMENTS */}
                <Card className="p-8 col-span-3">
                    <SectionTitle>Health Documents</SectionTitle>
                    <DocUpload
                        label="X-Ray Results"
                        register={register("xrayResults")}
                        fileURL={xrayURL}
                    />

                    <div className="mt-6" />

                    <DocUpload
                        label="Vet Report"
                        register={register("vetReport")}
                        fileURL={vetReportURL}
                    />
                </Card>
            </div>
        </div>
    );
}

/* ------------------------- SMALL COMPONENTS ------------------------- */

function SectionTitle({ children }: { children: string }) {
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

function DocUpload({
    label,
    fileURL,
    register,
}: {
    label: string;
    fileURL?: string;
    register: UseFormRegisterReturn;
}) {
    return (
        <div className="flex flex-col gap-3">
            <Label>{label}</Label>

            <Input type="file" accept="application/pdf" {...register} />

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

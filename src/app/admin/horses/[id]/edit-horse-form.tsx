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

import { PedigreeTable } from "@/components/pedigree-table";
import { PhotoManager } from "./horse-images-list";
import { extractYouTubeVideoId, toYouTubeEmbed, toYoutubeURL } from "@/lib/helpers";
import { getProtectedFile, readHorseTelexPedigree } from "@/lib/api";
import type { PedigreeArray } from "@/components/pedigree-table";

import type { Horse } from "@/graphql/sdk";
import { auth } from "@/lib/firebase";

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
    const [youtubeURL, setYoutubeURL] = useState<string>(toYoutubeURL(horse.youtubeVideoId));
    const [xrayURL, setXrayURL] = useState<string | undefined>();
    const [pedigreeData, setPedigreeData] = useState<PedigreeArray>(horse.pedigree || []);
    const [pedigreeURL, setPedigreeURL] = useState<string | undefined>(horse.pedigree ? horse.pedigree[0].href || "" : "");

    const { register, watch, setValue, handleSubmit } = useForm({
        defaultValues: {
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

            xrayResults: horse.xrayResults,
            vetReport: horse.vetReport,
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

    async function onSubmit(formValues: any) {
        const token = await auth.currentUser?.getIdToken()
        const fd = new FormData();

        // Convert YouTube URL → videoId
        const videoId = extractYouTubeVideoId(youtubeURL);
        fd.append("youtubeVideoId", videoId ?? "");

        // Append all normal fields
        fd.append("name", formValues.name);
        fd.append("yearOfBirth", String(formValues.yearOfBirth));
        fd.append("genderId", formValues.genderId);
        fd.append("height", String(formValues.height));
        fd.append("disciplineId", formValues.disciplineId);
        fd.append("categoryId", formValues.categoryId);
        fd.append("location", formValues.location);
        fd.append("price", String(formValues.price));
        fd.append("description", formValues.description);
        fd.append("contactPerson", formValues.contactPerson);
        fd.append("status", formValues.status);

        // Photos = array of filenames (already uploaded separately)
        fd.append("photos", JSON.stringify(horse.photos));

        // Xray file
        if (formValues.xrayResults?.[0]) {
            fd.append("xrayResults", formValues.xrayResults[0]);
        } else {
            fd.append("xrayResults", horse.xrayResults ?? "");
        }

        // VetReport file
        if (formValues.vetReport?.[0]) {
            fd.append("vetReport", formValues.vetReport[0]);
        } else {
            fd.append("vetReport", horse.vetReport ?? "");
        }



        // Send FormData to backend
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/${horse.id}`,
            {
                method: "POST",
                body: fd,              // <-- FormData
                headers: {
                    Authorization: `Bearer ${token}`,   // KEEP THIS
                    // DO NOT set Content-Type manually
                },
            }
        );

        if (!res.ok) {
            const err = await res.text();
            alert("Error: " + err);
            return;
        }

        alert("Horse updated successfully!");
    }

    return (
        <div className="p-4 w-full max-w-screen-xl mx-auto flex flex-col gap-5">

            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Edit Horse</h1>
                <div className="flex gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSubmit(onSubmit)}>Save Changes</Button>
                </div>
            </div>

            <div className="flex flex-col gap-5">

                <Card className="p-6">
                    <SectionTitle>Photos</SectionTitle>
                    <PhotoManager initialPhotos={horse.photos ?? []} />
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

"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, RefreshCcw, Trash, Upload } from "lucide-react";
import { PedigreeTable } from "@/components/pedigree-table";
import { PhotoManager } from "./horse-images-list";
import { extractYouTubeVideoId, getHorseMedia, toYouTubeEmbed, toYoutubeURL } from "@/lib/helpers";
import { deleteHorseMedia, getProtectedMedia, getPublicMedia, readHorseTelexPedigree, updateHorseAdmin, uploadHorseMedia } from "@/lib/api";
import type { PedigreeArray } from "@/components/pedigree-table";
import { HorseStatus, type FindUniqueHorseQuery } from "@/graphql/sdk";

interface EditHorseFormProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>;
    categories: any[];
    genders: any[];
    disciplines: any[];
}

export function EditHorseForm({ horse, categories, genders, disciplines }: EditHorseFormProps) {
    console.log(horse)
    const [vetReportURL, setVetReportURL] = useState<string | undefined>(undefined);
    const [xrayURL, setXrayURL] = useState<string | undefined>(undefined);
    const [youtubeURL, setYoutubeURL] = useState<string>(toYoutubeURL(horse.youtubeVideoId));
    const [pedigreeData, setPedigreeData] = useState<PedigreeArray>(horse.pedigree || []);
    const [pedigreeURL, setPedigreeURL] = useState<string | undefined>(horse.pedigree ? horse.pedigree[0].href || "" : "");
    const [horseStatus, setHorseStatus] = useState(horse.status);

    const isEditable = horse.status === HorseStatus.Approved || horse.status === HorseStatus.Submitted;



    const fileInputRef = useRef<HTMLInputElement>(null);

    const { register, watch, setValue, getValues, control } = useForm({
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
            status: horse.status,
            contactPerson: horse.contactPerson
        },
    });

    const videoId = watch("youtubeVideoId");
    const photos = useWatch({ control, name: "photos" });

    useEffect(() => {
        Promise.all([
            getHorseMedia(horse.status, horse.vetReport ?? "")
                .then(setVetReportURL),
            getHorseMedia(horse.status, horse.xrayResults ?? "")
                .then(setXrayURL),
        ]);
    }, [horse.vetReport, horse.xrayResults]);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handlePhotosChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const photos = event.target.files;
        const updatedHorse = await uploadHorseMedia({ horseId: horse.id, photos });
        setValue("photos", updatedHorse.photos);
    };

    const handleDeletePDF = async (type: 'vetReport' | 'xrayResults') => {
        try {
            await deleteHorseMedia(horse.id, type);
            if (type === 'vetReport') setVetReportURL(undefined);
            else if (type === 'xrayResults') setXrayURL(undefined);
        } catch (err) {
            console.error("Failed to delete PDF:", err);
        }
    };

    const handleChangePDF = (type: 'vetReport' | 'xrayResults') => {
        return async (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files || e.target.files.length === 0) return;
            const file = e.target.files[0];
            try {
                const updatedHorse = await uploadHorseMedia({ horseId: horse.id, [type]: file });
                let media;
                if (updatedHorse.status !== "ACCEPTED") {
                    media = await getProtectedMedia(updatedHorse[type]);
                } else {
                    media = await getPublicMedia(updatedHorse[type]);
                }
                if (type === 'vetReport') setVetReportURL(media);
                else if (type === 'xrayResults') setXrayURL(media);
            } catch (err) {
                console.error('Error uploading file:', err);
            }
        }
    };

    const onSubmit = async () => {
        const formValues = getValues();
        try {
            const newHorse = await updateHorseAdmin(horse.id, formValues);
            console.log("Horse updated successfully", newHorse);
        } catch (error) {
            console.error("Failed to update horse:", error);
        }
    };

    const onApprove = async () => {

        const formValues = getValues();
        formValues.status = HorseStatus.Approved;
        try {
            const newHorse = await updateHorseAdmin(horse.id, { ...formValues, status: HorseStatus.Approved });
            setHorseStatus(newHorse.status);
        } catch (error) {
            console.error("Failed to update horse:", error);
        }
        // await appriveHorseAdmin(horse.id, getValues().contactPerson);
    };

    return (
        <div className="p-4 w-full max-w-screen-xl mx-auto flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Edit Horse</h1>
                    <p className="text-xs text-muted-foreground">Status: {horseStatus}</p>
                </div>
                <div className="flex gap-2">
                    {/* <Button variant="outline">Cancel</Button> */}
                    <Button variant='outline' onClick={onApprove}>Approve</Button>
                    <Button onClick={onSubmit}>Save</Button>
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
                                onChange={handlePhotosChange}
                            />
                        </div>
                    </SectionTitle>
                    <PhotoManager
                        horseStatus={horse.status}
                        horseId={horse.id}
                        initialPhotos={photos}
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
                            disabled={!isEditable}
                        />
                    </Field>

                    <Card className="mt-6 h-[400px] rounded-xl overflow-hidden shadow-inner">
                        {videoId ? (
                            <iframe className="w-full h-full" src={toYouTubeEmbed(videoId)} />
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
                            <Input {...register("name")} autoComplete="off" disabled={!isEditable} />
                        </Field>

                        <Field label="Location">
                            <Input {...register("location")} autoComplete="off" disabled={!isEditable} />
                        </Field>

                        <Field label="Year of Birth">
                            <Input type="number" {...register("yearOfBirth")} autoComplete="off" disabled={!isEditable} />
                        </Field>

                        <Field label="Height (cm)">
                            <Input type="number" {...register("height")} autoComplete="off" disabled={!isEditable} />
                        </Field>

                        <Field label="Category">
                            <Select
                                // {...register("categoryId")}
                                onValueChange={(v) => isEditable && setValue("categoryId", v)}
                                defaultValue={horse.category.id}
                                disabled={!isEditable}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((c) => (
                                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Gender">
                            <Select
                                // {...register("genderId")}
                                onValueChange={(v) => isEditable && setValue("genderId", v)}
                                defaultValue={horse.gender.id}
                                disabled={!isEditable}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    {genders.map((g) => (
                                        <SelectItem key={g.id} value={g.id}>{g.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Discipline">
                            <Select
                                // {...register("disciplineId")}
                                onValueChange={(v) => isEditable && setValue("disciplineId", v)}
                                defaultValue={horse.discipline.id}
                                disabled={!isEditable}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select discipline" />
                                </SelectTrigger>
                                <SelectContent>
                                    {disciplines.map((d) => (
                                        <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Price (€)">
                            <Input type="number" {...register("price")} autoComplete="off" disabled={!isEditable} />
                        </Field>
                    </div>

                    <Field label="Contact Person">
                        <Input {...register("contactPerson")} autoComplete="off" />
                    </Field>
                    <Field label="Description" className="mt-6">
                        <Textarea rows={6} {...register("description")} autoComplete="off" disabled={!isEditable} />
                    </Field>
                </Card>

                <Card className="p-8">
                    <SectionTitle>Pedigree</SectionTitle>
                    <Field label="HorseTelex Link">
                        <div className="flex gap-2">
                            <Input id="pedigree-url" value={pedigreeURL} onChange={(e) => setPedigreeURL(e.target.value)} autoComplete="off" disabled={!isEditable} />
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
                        fileURL={xrayURL}
                        onDelete={() => handleDeletePDF('xrayResults')}
                        onChange={handleChangePDF('xrayResults')}
                    />
                    <div className="mt-6" />
                    <DocUpload
                        label="Vet Report"
                        fileURL={vetReportURL}
                        onDelete={() => handleDeletePDF('vetReport')}
                        onChange={handleChangePDF('vetReport')} />
                </Card>
            </div>
        </div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-xl font-semibold mb-4">{children}</h2>;
}

function Field({ label, children, className }: {
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

interface DocUploadProps {
    label: string;
    fileURL?: string;
    onDelete?: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

function DocUpload({ label, fileURL, onDelete, onChange }: DocUploadProps) {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <Label>{label}</Label>
                {/* <Input type="file" accept="application/pdf" /> */}
                <div className="flex gap-2">
                    {fileURL && (
                        <Button variant="outline" size="icon" onClick={onDelete}>
                            <Trash />
                        </Button>
                    )}

                    <Button variant="outline" size="icon" onClick={handleClick}>
                        <Upload />
                    </Button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="application/pdf"
                        multiple={false}
                        onChange={onChange}
                    />

                    {fileURL && (
                        <Button variant="outline" size="icon" onClick={() => window.open(fileURL, "_blank")}>
                            <ExternalLink />
                        </Button>
                    )}
                </div>

            </div>
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

'use client';
import { useFormContext } from "react-hook-form";
import TextInput from "@/components/formElements/TextInput";
import Textarea from "@/components/formElements/Textarea";

export default function HorseDetail() {
    const { register, watch } = useFormContext();
    const name = watch("name");
    const age = watch("age");
    const sex = watch("sex");
    const discipline = watch('discipline')
    const location = watch('location')
    const priceRange = watch('priceRange')
    const height = watch('height')

    return (
        <div className="py-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 text-zinc-600">
                <div className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="name" className="text-sm">Horse Name*</label>
                        {/* <input id="name" {...register("name")} className="mt-1 input w-full" /> */}
                        <TextInput id="name" {...register("name")} />
                    </div>

                    <div>
                        <label htmlFor="pedigree" className="text-sm">Pedigree</label>
                        {/* <input id="pedigree" {...register("pedigree")} className="mt-1 input w-full" /> */}
                        <TextInput id="pedigree" {...register("pedigree")} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="age" className="text-sm">Age*</label>
                            {/* <input id="age" {...register("age")} className="mt-1 input w-full" /> */}
                            <TextInput type="number" id="age" {...register("age")} />

                        </div>
                        <div>
                            <label htmlFor="sex" className="text-sm">Sex*</label>
                            {/* <input id="sex" {...register("sex")} className="mt-1 input w-full" /> */}
                            <TextInput id="sex" {...register("sex")} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="height" className="text-sm">Height (cm)*</label>
                        {/* <input id="height" {...register("height")} className="mt-1 input w-full" /> */}
                        <TextInput type="number" id="height" {...register("height")} />

                    </div>

                    <div>
                        <label htmlFor="discipline" className="text-sm">Discipline*</label>
                        {/* <input id="discipline" {...register("discipline")} className="mt-1 input w-full" /> */}
                        <TextInput id="discipline" {...register('discipline')} />
                    </div>

                    <div>
                        <label htmlFor="location" className="text-sm">Location*</label>
                        {/* <input id="location" {...register("location")} className="mt-1 input w-full" /> */}
                        <TextInput id="location" {...register('location')} />
                    </div>

                    <div>
                        <label htmlFor="priceRange" className="text-sm">Price Range*</label>
                        {/* <input id="priceRange" {...register("priceRange")} className="mt-1 input w-full" /> */}
                        <TextInput id="priceRange" {...register('priceRange')} />
                    </div>

                    <div>
                        <label htmlFor="description" className="text-sm">Description</label>
                        {/* <textarea id="description" {...register("description")} className="mt-1 textarea w-full" /> */}
                        <Textarea id="description" {...register('description')} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="inline-flex items-center gap-2">
                            <input type="checkbox" {...register("veterinaryDocuments")} />
                            <span>Veterinary documents available</span>
                        </label>

                        <label className="inline-flex items-center gap-2">
                            <input type="checkbox" {...register("xrayResults")} />
                            <span>X-ray results available</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="bg-white shadow p-7 text-zinc-600 rounded-lg">
                        <h3 className="text-lg font-bold text-primary py-4">Preview</h3>
                        <div>
                            <div className="flex justify-between py-1">
                                <h4>Name:</h4>
                                <h4>{name || "-"}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Age & Sex:</h4>
                                <h4>{(age || "-") + (sex ? " / " + sex : "")}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Discipline:</h4>
                                <h4>{(discipline)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Location:</h4>
                                <h4>{(location)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Price range:</h4>
                                <h4>{(priceRange)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Height:</h4>
                                <h4>{(height)}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

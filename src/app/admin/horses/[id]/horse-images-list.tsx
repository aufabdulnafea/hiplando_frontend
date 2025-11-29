"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Upload, X } from "lucide-react";
import { FileUpload, FileUploadDropzone, FileUploadList } from "@/components/ui/file-upload";
import { getProtectedFile } from "@/lib/api";

// Sortable Item Component
function SortablePhoto({ id, src, onDelete }: { id: string; src: string; onDelete: (id: string) => void }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="relative rounded-lg overflow-hidden shadow cursor-move"
        >
            <Image
                src={src}
                alt="Horse photo"
                width={300}
                height={300}
                className="object-cover w-full h-56"
                unoptimized
            />

            <button
                onClick={() => onDelete(id)}
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
            >
                <X size={18} />
            </button>
        </div>
    );
}

// Main Component
export function PhotoManager({ initialPhotos }: { initialPhotos: string[] }) {
    const [photos, setPhotos] = useState<string[]>([]);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    );

    const handleDelete = (id: string) => {
        setPhotos((prev) => prev.filter((p) => p !== id));
    };

    useEffect(() => {
        async function fetchPhotos() {
            const urls = await Promise.all(
                initialPhotos.map(id => getProtectedFile(id))
            );
            setPhotos(urls);
        }

        fetchPhotos();
    }, [initialPhotos]);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        setPhotos((prev) => {
            const oldIndex = prev.indexOf(active.id);
            const newIndex = prev.indexOf(over.id);
            return arrayMove(prev, oldIndex, newIndex);
        });
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="flex flex-col xl:flex-row gap-4">
                <SortableContext items={photos} strategy={verticalListSortingStrategy}>
                    <div className="flex flex-col xl:flex-row gap-4">
                        {photos.map((photo) => (
                            <SortablePhoto key={photo} id={photo} src={photo} onDelete={handleDelete} />
                        ))}
                    </div>
                </SortableContext>
                <FileUpload
                    // value={photos}
                    // onValueChange={el => setPhotos(el)}
                    onValueChange={el => console.log(el)}
                    accept="image/*"
                    maxFiles={3}
                    multiple
                >
                    <FileUploadDropzone>
                        <div className="flex flex-col items-center gap-1 justify-center h-42">
                            <div className="flex items-center justify-center rounded-full border p-2.5">
                                <Upload className="size-6 text-muted-foreground" />
                            </div>
                            <p className="font-medium text-sm">Drag & drop files here</p>
                            <p className="text-muted-foreground text-xs">
                                Or click to browse (max 3 files)
                            </p>
                        </div>
                    </FileUploadDropzone>

                </FileUpload>
            </div>
        </DndContext>
    );
}

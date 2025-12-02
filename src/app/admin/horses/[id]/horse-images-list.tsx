"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X } from "lucide-react";
import { deleteHorseFile, getProtectedFile } from "@/lib/api";

type Photo = {
    id: string;
    url: string;
    filename: string;
    file?: File;
};

interface SortablePhotoProps {
    id: string;
    src: string;
    onDelete: (id: string) => void;
}

function SortablePhoto({ id, src, onDelete }: SortablePhotoProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    return (
        <div
            ref={setNodeRef}
            style={{ transform: CSS.Transform.toString(transform), transition }}
            {...attributes}
            {...listeners}
            className="relative rounded-lg overflow-hidden shadow cursor-move w-56 h-56"
        >
            <Image src={src} alt="Horse" width={300} height={300} className="object-cover w-full h-full" unoptimized />

            <button
                onClick={() => onDelete(id)}
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
            >
                <X size={18} />
            </button>
        </div>
    );
}

export interface PhotoManagerProps {
    horseId: string;
    initialPhotos: string[];
    action: (files: (string | File)[]) => void;
}

export function PhotoManager({ horseId, initialPhotos, action }: PhotoManagerProps) {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    );

    useEffect(() => {
        async function load() {
            const results = await Promise.all(
                initialPhotos.map(async (filename) => {
                    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/private/${filename}`;
                    const protectedURL = await getProtectedFile(url);
                    return { filename, url: protectedURL };
                })
            );

            const items = results.map((p) => ({
                id: p.filename,
                filename: p.filename,
                url: p.url
            }));

            setPhotos(items);
            action(items.map((i) => i.filename));
        }
        load();
    }, []);

    const updatePhotos = (newList: Photo[]) => {
        setPhotos(newList);
        action(newList.map((p) => p.file ?? p.filename));
    };

    const handleDragEnd = ({ active, over }: any) => {
        if (!over || active.id === over.id) return;
        setPhotos((prev) => {
            const oldIndex = prev.findIndex((p) => p.id === active.id);
            const newIndex = prev.findIndex((p) => p.id === over.id);
            const newList = arrayMove(prev, oldIndex, newIndex);
            action(newList.map((p) => p.file ?? p.filename));
            return newList;
        });
    };

    const handleDelete = (id: string) => {
        // const updated = photos.filter((p) => p.id !== id);
        // updatePhotos(updated);
        const photo = photos.find(p => p.id === id);
        if (photo) {
            deleteHorseFile(horseId, photo.filename, 'photo')
                .then(() => {
                    console.log('File deleted successfully');
                    // Remove the photo from the list
                    const updated = photos.filter((p) => p.id !== id);
                    updatePhotos(updated);
                })
                .catch((error) => {
                    console.error('Error deleting file:', error);
                });
        }
    };

    return (
        <>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={photos.map((p) => p.id)} strategy={verticalListSortingStrategy}>
                    <div className="flex flex-wrap gap-4 mb-4">
                        {photos.map((photo) => (
                            <SortablePhoto key={photo.id} id={photo.id} src={photo.url} onDelete={handleDelete} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </>
    );
}

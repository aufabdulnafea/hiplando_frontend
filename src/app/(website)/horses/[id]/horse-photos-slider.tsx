'use client'

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function HorsePhotosSlider({ photos, name }: { photos: string[]; name: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () =>
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    const prev = () =>
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

    return (
        <div className="relative">
            {/* Main Image */}
            <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <Image
                    src={photos[currentIndex]}
                    alt={`${name} photo ${currentIndex + 1}`}
                    fill
                    unoptimized
                    className="object-cover rounded-lg"
                />
                {/* Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Thumbnail List */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 px-4">
                {photos.map((photo, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${currentIndex === i ? "border-primary" : "border-transparent"
                            }`}
                    >
                        <Image
                            src={photo}
                            alt={`${name} thumbnail ${i + 1}`}
                            fill
                            unoptimized
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
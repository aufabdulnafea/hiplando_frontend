'use client'

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FindUniqueHorseQuery } from "@/graphql/sdk";

interface HorsePhotosSliderProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>;
}

export function HorsePhotosSliderCard({ horse }: HorsePhotosSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () =>
        setCurrentIndex((prev) => (prev + 1) % (horse.photos.length + (horse.videoURL ? 1 : 0)));
    const prev = () =>
        setCurrentIndex((prev) => (prev - 1 + horse.photos.length + (horse.videoURL ? 1 : 0)) % (horse.photos.length + (horse.videoURL ? 1 : 0)));

    const isVideoSlide = horse.videoURL && currentIndex === horse.photos.length;

    // Convert YouTube URL to embed URL
    const getYoutubeEmbedUrl = (url: string) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const id = match?.[2];
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
    };


    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match?.[2] || null;
    };

    const getYoutubeThumbnail = (url: string) => {
        const id = getYoutubeId(url);
        return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
    };

    return (

        <Card className="relative pt-0 overflow-hidden p-0">
            <CardContent className="p-0">
                <div className="relative">
                    {/* Main Display */}
                    <div className="relative w-full h-96 overflow-hidden rounded-lg bg-black">
                        {isVideoSlide ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={getYoutubeEmbedUrl(horse.videoURL!)}
                                title={horse.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            />
                        ) : (
                            <Image
                                src={horse.photos[currentIndex]}
                                alt={`${horse.name} photo ${currentIndex + 1}`}
                                fill
                                unoptimized
                                className="object-cover rounded-lg"
                            />
                        )}

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
                    <div className="flex gap-2 overflow-x-auto p-5">
                        {horse.photos.map((photo, i) => (
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

                        {horse.videoURL && (
                            <button
                                onClick={() => setCurrentIndex(horse.photos.length)}
                                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${isVideoSlide ? "border-primary" : "border-transparent"}`}
                            >
                                <Image
                                    src={getYoutubeThumbnail(horse.videoURL)}
                                    alt="Video thumbnail"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/30">
                                    ▶
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}

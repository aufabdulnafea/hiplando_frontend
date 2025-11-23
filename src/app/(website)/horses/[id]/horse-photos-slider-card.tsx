'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FindUniqueHorseQuery } from "@/graphql/sdk";
import { getAuth } from "firebase/auth";

interface HorsePhotosSliderProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>;
}

export function HorsePhotosSliderCard({ horse }: HorsePhotosSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [photoUrls, setPhotoUrls] = useState<string[]>([]);

    const totalSlides = horse.photos.length + (horse.videoURL ? 1 : 0);
    const isVideo = horse.videoURL && currentIndex === horse.photos.length;

    useEffect(() => {
        const loadPhotos = async () => {
            const auth = getAuth();
            const token = await auth.currentUser?.getIdToken();

            const loaded: string[] = [];

            for (const photo of horse.photos) {
                const res = await fetch(photo, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const blob = await res.blob();
                const url = URL.createObjectURL(blob);
                loaded.push(url);
            }

            setPhotoUrls(loaded);
        };

        loadPhotos();
    }, [horse.photos]);

    const next = () => setCurrentIndex((i) => (i + 1) % totalSlides);
    const prev = () => setCurrentIndex((i) => (i - 1 + totalSlides) % totalSlides);

    const getYoutubeEmbed = (url: string) => {
        const id = url.match(/(?:v=|youtu\.be\/)([^#&?]+)/)?.[1];
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
    };

    const getYoutubeThumb = (url: string) => {
        const id = url.match(/(?:v=|youtu\.be\/)([^#&?]+)/)?.[1];
        return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
    };

    return (
        <Card className="relative overflow-hidden p-0">
            <CardContent className="p-0">
                <div className="relative">
                    {/* MAIN VIEW */}
                    <div className="relative w-full h-96 overflow-hidden rounded-lg bg-black">
                        {isVideo ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={getYoutubeEmbed(horse.videoURL!)}
                                allow="accelerometer; autoplay; encrypted-media;"
                                allowFullScreen
                            />
                        ) : (
                            photoUrls.length > 0 && (
                                <Image
                                    src={photoUrls[currentIndex]}
                                    alt={`Photo ${currentIndex + 1}`}
                                    fill
                                    unoptimized
                                    className="object-cover rounded-lg"
                                />
                            )
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

                    {/* THUMBNAILS */}
                    <div className="flex gap-2 overflow-x-auto p-5">
                        {photoUrls.map((thumb, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${currentIndex === i ? "border-primary" : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={thumb}
                                    alt={`Thumbnail ${i + 1}`}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </button>
                        ))}

                        {horse.videoURL && (
                            <button
                                onClick={() => setCurrentIndex(horse.photos.length)}
                                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${isVideo ? "border-primary" : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={getYoutubeThumb(horse.videoURL)}
                                    alt="Video"
                                    fill
                                    unoptimized
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

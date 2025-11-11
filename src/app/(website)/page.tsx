'use client';

import dynamic from "next/dynamic";
import { GoPulse } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Hero from "@/components/hero";
import LightSection from "@/components/sections/light-section";
import WhiteSection from "@/components/sections/white-section";
import PrimarySection from "@/components/sections/primary-section";
import SectionHeader from "@/components/sections/section-header";

// Lazy load heavy components like HorseCard for better performance
const HorseCard = dynamic(() => import("@/components/horse-card"), {
    loading: () => <div className="h-64 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-2xl" />,
    ssr: false,
});

export default function Home() {
    return (
        <main className="flex flex-col">
            {/* ========== HERO SECTION ========== */}
            <Hero />

            {/* ========== WHY CHOOSE US ========== */}
            <LightSection>
                <SectionHeader
                    title="Why Choose Hiplando?"
                    description="Your complete equestrian platform for buying, selling, and managing horses worldwide."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-10">
                    {[
                        {
                            icon: <GoPulse aria-hidden="true" className="text-primary size-14" />,
                            title: "Marketplace",
                            emoji: "🐎",
                            text: "Thousands of listings worldwide. Find your perfect horse or reach global buyers.",
                        },
                        {
                            icon: <FiTruck aria-hidden="true" className="text-primary size-14" />,
                            title: "Transport",
                            emoji: "🚚",
                            text: "Book ground & air logistics. Professional horse transport services worldwide.",
                        },
                        {
                            icon: <LuCalendar aria-hidden="true" className="text-primary size-14" />,
                            title: "Competitions",
                            emoji: "📅",
                            text: "Track international events and stay updated with the global equestrian calendar.",
                        },
                    ].map((item, i) => (
                        <Card
                            key={i}
                            className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <CardContent className="flex flex-col items-center justify-center text-center py-10">
                                <div className="py-4">{item.icon}</div>
                                <h4 className="text-primary font-bold text-xl flex items-center gap-1">
                                    <span>{item.emoji}</span> {item.title}
                                </h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-400 mt-3">
                                    {item.text}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </LightSection>

            {/* ========== FEATURED HORSES ========== */}
            <WhiteSection>
                <SectionHeader
                    title="Featured Horses"
                    description="Discover exceptional horses from around the world"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <HorseCard
                        age={12}
                        discipline="12"
                        gender="11"
                        image="http://localhost:4000/f8855ce1-b401-4926-81a2-bc9ff6c19bcf.webp"
                        location="123"
                        name="Test"
                        price={200}
                        id="124"
                        isFavorite
                        onFavoriteToggle={() => {}}
                        verified
                    />
                    {/* <HorseCard /> */}

                </div>

                <div className="flex justify-center mt-10">
                    <Button size="lg" className="px-8">
                        View All Horses
                    </Button>
                </div>
            </WhiteSection>

            {/* ========== CTA SECTION ========== */}
            <PrimarySection>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">
                            Need transport to Paris Masters?
                        </h4>
                        <p className="text-lg text-neutral-100">
                            Professional horse transport services worldwide.
                        </p>
                    </div>

                    <Button
                        variant="default"
                        className="rounded-md h-12 bg-yellow-500 hover:bg-yellow-400 text-primary font-semibold"
                        size="lg"
                    >
                        Book Now →
                    </Button>
                </div>
            </PrimarySection>

            {/* ========== UPCOMING COMPETITIONS ========== */}
            <LightSection>
                <SectionHeader
                    title="Upcoming Competitions"
                    description="Stay updated with international equestrian events"
                />
                {/* TODO: Add dynamic event cards here */}
            </LightSection>

            {/* ========== TRUSTED PARTNERS ========== */}
            <WhiteSection>
                <SectionHeader
                    title="Trusted by Industry Leaders"
                    description="Partnering with the world's most prestigious equestrian organizations"
                />
                {/* TODO: Add logo grid / carousel here */}
            </WhiteSection>

            {/* ========== FINAL CTA / FOOTER PLACEHOLDER ========== */}
            <PrimarySection>
                <div className="text-center text-white py-10">
                    <h4 className="text-xl font-semibold">
                        Join the global Hiplando community today
                    </h4>
                    <Button
                        variant="secondary"
                        className="mt-4 bg-white text-primary font-semibold hover:bg-neutral-100"
                        size="lg"
                    >
                        Get Started
                    </Button>
                </div>
            </PrimarySection>
        </main>
    );
}

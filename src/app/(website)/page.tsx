import Hero from "@/components/hero";

import LightSection from '@/components/sections/light-section'
import WhiteSection from '@/components/sections/white-section'
import PrimarySection from "@/components/sections/primary-section";
import SectionHeader from '@/components/sections/section-header'

import { Card, CardContent } from "@/components/ui/card";
import { GoPulse } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import HorseCard from "@/components/horse-card";



export default function Home() {
    return (
        <div>
            <Hero />

            <LightSection>
                <SectionHeader
                    title="Why Choose Hiplando?"
                    description="Your complete equestrian platform for buying, selling, and managing horses worldwide."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 pt-15">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center">
                                <div className="py-5 text-6xl">
                                    <GoPulse className="text-primary" />
                                </div>
                                <h4 className="text-primary font-bold text-xl">
                                    <span>🐎 </span>
                                    Marketplace
                                </h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-500 text-center py-2">Thousands of listings worldwide. Find your perfect horse or reach global buyers</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center">
                                <div className="py-5 text-6xl">
                                    <FiTruck className="text-primary" />
                                </div>
                                <h4 className="text-primary font-bold text-xl">
                                    <span>🚚 </span>
                                    Transport
                                </h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-500 text-center py-2">
                                    Book ground & air logistics. Professional horse transport services worldwide.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center">
                                <div className="py-5 text-6xl">
                                    <LuCalendar className="text-primary" />
                                </div>
                                <h4 className="text-primary font-bold text-xl">
                                    <span>📅 </span>
                                    Competitions
                                </h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-500 text-center py-2">
                                    Track international events. Stay updated with the global equestrian calender.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </LightSection>

            <WhiteSection>
                <SectionHeader
                    title="Featured Horses"
                    description="Discover exceptional horses from around the world"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-15">
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                </div>

                <div className="flex justify-center pt-15">
                    <Button size='lg'>View All Horses</Button>
                </div>
            </WhiteSection>

            <PrimarySection>
                <div className="flex  items-center justify-between">
                    <div>
                        <h4 className="text-3xl font-bold text-white">Need transport to Paris Masters?</h4>
                        <p className="text-lg">Professional horse transport services worldwide</p>
                    </div>

                    <Button
                        variant='default'
                        className="rounded-md h-12 bg-yellow-500 hover:bg-yellow-400 text-primary"
                        size="lg"
                    >
                        Book Now {'->'}
                    </Button>

                </div>
            </PrimarySection>

            <LightSection>
                <SectionHeader
                    title="Upcoming Competitions"
                    description="Stay updated with international equestrian events"
                />
            </LightSection>

            <WhiteSection>
                <SectionHeader
                    title="Trusted by Industry Leaders"
                    description="Partnering with the world's most prestigious equestrian organization"
                />
            </WhiteSection>

            <PrimarySection>
                <div>

                </div>
            </PrimarySection>

        </div>
    )

}

import Hero from "@/components/hero";

import LightSection from '@/components/sections/light-section'
import { Card, CardContent } from "@/components/ui/card";
import { GoPulse } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";



export default function Home() {
    return (
        <div>
            <Hero />

            <LightSection>
                <div className="text-center max-w-xl m-auto">
                    <h3 className="text-primary text-3xl font-bold pb-3">Why Choose Hiplando?</h3>
                    <p className="text-neutral-600 dark:text-neutral-500">Your complete equestrian platform for buying, selling, and managing horses worldwide.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 pt-15">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center">
                                <div className="py-5 text-6xl">
                                    <GoPulse className="text-primary" />
                                </div>
                                <h4 className="text-primary font-bold text-xl">Marketplace</h4>
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
                                <h4 className="text-primary font-bold text-xl">Transport</h4>
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
                                <h4 className="text-primary font-bold text-xl">Competitions</h4>
                                <p className="text-sm text-neutral-700 dark:text-neutral-500 text-center py-2">
                                    Track international events. Stay updated with the global equestrian calender.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </LightSection>

        </div>
    )

}

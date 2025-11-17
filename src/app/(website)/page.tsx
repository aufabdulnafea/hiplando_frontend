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
import FeaturedHorsesSection from "@/components/sections/featured-horses-section";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const messages = await getTranslations("HomePage");

    return (
        <main className="flex flex-col">
            <Hero />

            <LightSection>
                <SectionHeader
                    title={messages("sections.why-choose-hiplando.title")}
                    description={messages("sections.why-choose-hiplando.description")}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-10">
                    {[
                        {
                            icon: <GoPulse aria-hidden="true" className="text-primary size-14" />,
                            title: messages("sections.why-choose-hiplando.cards.0.title"),
                            emoji: messages("sections.why-choose-hiplando.cards.0.emoji"),
                            text: messages("sections.why-choose-hiplando.cards.0.text"),
                        },
                        {
                            icon: <FiTruck aria-hidden="true" className="text-primary size-14" />,
                            title: messages("sections.why-choose-hiplando.cards.1.title"),
                            emoji: messages("sections.why-choose-hiplando.cards.1.emoji"),
                            text: messages("sections.why-choose-hiplando.cards.1.text"),
                        },
                        {
                            icon: <LuCalendar aria-hidden="true" className="text-primary size-14" />,
                            title: messages("sections.why-choose-hiplando.cards.2.title"),
                            emoji: messages("sections.why-choose-hiplando.cards.2.emoji"),
                            text: messages("sections.why-choose-hiplando.cards.2.text"),
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
                    title={messages("sections.featured-horses.title")}
                    description={messages("sections.featured-horses.description")}
                />

                <FeaturedHorsesSection />

            </WhiteSection>

            {/* ========== CTA SECTION ========== */}
            <PrimarySection>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">
                            {messages("sections.cta-section.title")}
                        </h4>
                        <p className="text-lg text-neutral-100">
                            {messages("sections.cta-section.description")}
                        </p>
                    </div>

                    <Button
                        variant="default"
                        className="rounded-md h-12 bg-yellow-500 hover:bg-yellow-400 text-primary font-semibold"
                        size="lg"
                    >
                        {messages("sections.cta-section.button")}
                    </Button>
                </div>
            </PrimarySection>

            {/* ========== UPCOMING COMPETITIONS ========== */}
            <LightSection>
                <SectionHeader
                    title={messages("sections.upcoming-competitions.title")}
                    description={messages("sections.upcoming-competitions.description")}
                />
                {/* TODO: Add dynamic event cards here */}
            </LightSection>

            {/* ========== TRUSTED PARTNERS ========== */}
            <WhiteSection>
                <SectionHeader
                    title={messages("sections.trusted-partners.title")}
                    description={messages("sections.trusted-partners.description")}
                />
                {/* TODO: Add logo grid / carousel here */}
            </WhiteSection>

            {/* ========== FINAL CTA / FOOTER PLACEHOLDER ========== */}
            <PrimarySection>
                <div className="text-center text-white py-10">
                    <h4 className="text-xl font-semibold">
                        {messages("sections.final-cta.title")}
                    </h4>
                    <Button
                        variant="secondary"
                        className="mt-4 bg-white text-primary font-semibold hover:bg-neutral-100"
                        size="lg"
                    >
                        {messages("sections.final-cta.button")}
                    </Button>
                </div>
            </PrimarySection>
        </main>
    );
}

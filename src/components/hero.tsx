// Hero.tsx  (Server Component — no "use client")
import Image from "next/image";
import Container from "@/components/container";
import HeroButtons from "./hero-buttons";

export default function Hero() {
    return (
        <section
            className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-neutral-900"
            aria-label="Hero section promoting global equine sales and services"
        >
            {/* Background Image loads immediately */}
            <Image
                src="/hero.avif"
                alt="Elegant horse in motion, representing global equine marketplace"
                fill
                priority
                className="object-cover object-center opacity-90"
                sizes="100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

            <Container>
                <div className="relative z-10 text-white flex flex-col items-center justify-center text-center h-full gap-8 px-4">
                    <div className="max-w-3xl space-y-3">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                            Global Equine Sales & Services
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-neutral-100">
                            Buy, sell, and manage horses and equestrian services worldwide.
                        </p>
                    </div>

                    {/* Client-only buttons */}
                    <HeroButtons />
                </div>
            </Container>

            <div
                className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t dark:from-neutral-950/100 to-transparent"
                aria-hidden="true"
            />
        </section>
    );
}

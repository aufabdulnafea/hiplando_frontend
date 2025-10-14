import Link from "next/link";
import Container from "./Container";

export default function Hero() {
    return (
        <div className="bg-primary mb-20">
            <Container>
                <div className="py-50 flex flex-col gap-7">
                    <div className="w-full max-w-2xl m-auto text-center flex flex-col gap-2">
                        <h2 className="text-5xl font-bold text-white">Global Equine Sales & Services</h2>
                        <p className="text-xl text-white/70">Buy, sell, and manage horses and services worldwide.</p>
                    </div>
                    <div className="flex justify-center gap-5">
                        <Link href={''}>
                            <button className="bg-secondary border border-secondary py-3 px-4 rounded text-primary font-bold cursor-pointer hover:bg-amber-300 transition-colors ease-in-out duration-150">Browse Horses</button>
                        </Link>
                        <Link href={'/add-horse'}>
                            <button className="outline-2 outline-white text-white py-3 px-4 rounded cursor-pointer hover:bg-white hover:text-primary transition-colors ease-in-out duration-150">Post a Horse</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
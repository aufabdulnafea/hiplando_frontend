import Container from "@/components/container"

interface HorsePageProps {
    params: Promise<{ slug: string }> | { slug: string } // sometimes a promise
}

export default async function HorsePage({ params }: HorsePageProps) {
    const resolvedParams = await params
    const { slug } = resolvedParams

    return (
        <Container>
            <div className="py-40">
                <div>Horse Page with ID: {slug}</div>
            </div>
        </Container>
    )
}
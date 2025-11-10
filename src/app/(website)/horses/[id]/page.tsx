import Container from "@/components/container"

interface HorsePageProps {
    params: Promise<{ id: string }> | { id: string }
}

export default async function HorsePage({ params }: HorsePageProps) {
    const resolvedParams = await params
    const { id } = resolvedParams

    return (
        <Container>
            <div className="py-40">
                <div>Horse Page with ID: {id}</div>
            </div>
        </Container>
    )
}
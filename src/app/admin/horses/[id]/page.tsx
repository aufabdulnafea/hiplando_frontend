import Container from "@/components/container"
import { getGraphQLClient } from "@/lib/graphql"
import { FindUniqueHorseQuery } from "@/graphql/sdk"

interface HorsePageProps {
    params: Promise<{ id: string }> | { id: string }  // allows async params
}

export default async function HorsePage({ params }: HorsePageProps) {
    // ✅ Ensure we await params if it's a Promise
    const resolvedParams = await params
    const { id } = resolvedParams

    // 🧠 Fetch data server-side
    const client = await getGraphQLClient()
    const res: FindUniqueHorseQuery = await client.findUniqueHorse({ where: { id } })
    const horse = res.findUniqueHorse

    return (
        <Container>
            <div className="py-40">
                {horse ? (
                    <>
                        <h1 className="text-3xl font-bold mb-4">{horse.name}</h1>
                        <p>ID: {horse.id}</p>
                        <p>Breed: {horse.age}</p>
                    </>
                ) : (
                    <div>No horse found with ID: {id}</div>
                )}
            </div>
        </Container>
    )
}

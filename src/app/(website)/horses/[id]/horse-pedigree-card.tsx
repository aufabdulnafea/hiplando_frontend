import { PedigreeTable } from "@/components/pedigree-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FindUniqueHorseQuery } from "@/graphql/sdk";



export default function HorsePedigreeCard({ horse }: { horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']> }) {
    if (!horse.pedigree) return null;
    return (
        <Card>
            <CardHeader>
                <CardTitle>Pedigree</CardTitle>
            </CardHeader>
            <CardContent>
                <PedigreeTable data={horse.pedigree} />
            </CardContent>
        </Card>
    )
}
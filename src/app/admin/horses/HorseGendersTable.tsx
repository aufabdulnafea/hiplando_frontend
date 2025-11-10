'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"
import { getGraphQLClient } from '@/lib/graphql'
import { FindManyHorseGenderQuery } from "@/graphql/sdk"
import TableControls from "./TableControls"

export default function HorseGendersTable() {
    const [genders, setGenders] = useState<FindManyHorseGenderQuery['findManyHorseGender']>([])

    useEffect(() => {
        getGraphQLClient().then(client => client.findManyHorseGender()).then(res => setGenders(res.findManyHorseGender))
    }, [])

    return (
        <div>
            <div className="py-1">
                <TableControls type="gender" />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {genders.map((gender) => (
                        <TableRow key={gender.id}>
                            <TableCell>{gender.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
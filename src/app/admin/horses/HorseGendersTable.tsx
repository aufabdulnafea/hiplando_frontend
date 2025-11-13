'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"
import TableControls from "./TableControls"

export default function HorseGendersTable() {
    const [genders, setGenders] = useState<any[]>([])

    useEffect(() => {
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
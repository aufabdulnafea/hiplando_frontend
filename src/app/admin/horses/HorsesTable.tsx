'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { graphql } from '@/lib/graphql'
import { FindManyHorseQuery } from "@/graphql/sdk"

export default function HorsesTable() {
    const [horses, setHorses] = useState<FindManyHorseQuery['findManyHorse']>([])

    useEffect(() => {
        graphql.findManyHorse().then(res => setHorses(res.findManyHorse))
    }, [])


    // id
    // name
    // age
    // height
    // price
    // location
    // user { name }
    // category { name }
    // discipline { name }
    // gender { name }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Height</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Discipline</TableHead>
                        <TableHead>Gender</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {horses.map((horse) => (
                        <TableRow key={horse.id}>
                            <TableCell>{horse.user.name}</TableCell>
                            <TableCell>{horse.name}</TableCell>
                            <TableCell>{horse.status}</TableCell>
                            <TableCell>{horse.age}</TableCell>
                            <TableCell>{horse.height}</TableCell>
                            <TableCell>{horse.price}</TableCell>
                            <TableCell>{horse.location}</TableCell>
                            <TableCell>{horse.category.name}</TableCell>
                            <TableCell>{horse.discipline.name}</TableCell>
                            <TableCell>{horse.gender.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
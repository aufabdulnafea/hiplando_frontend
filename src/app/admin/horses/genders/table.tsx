'use client'

import { useEffect, useState } from "react"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { getHorseGenders } from '../../../../lib/api'
import { SortingState } from "@tanstack/react-table"
import { TableControls } from "../table-controls"

export function HorseGendersTable() {
    const [genders, setGenders] = useState<any[]>([])

    useEffect(() => {
        const fetchGenders = async () => {
            const genders = await getHorseGenders()
            setGenders(genders)
        }
        fetchGenders()
    }, [])

    const sortGenders = (s: SortingState) => {
        const { id, desc } = s[0]
        setGenders(prev => [...prev.sort((a, b) => desc ? b[id]?.localeCompare(a[id]) : a[id]?.localeCompare(b[id]))])
    }

    return (
        <DataTable
            columns={columns}
            data={genders}
            totalCount={genders.length}
            isLoading={false}
            withSearch={false}
            onSortingChange={sortGenders}
            extraControllers={
                <TableControls type="gender" />
            }
        />
    )
}

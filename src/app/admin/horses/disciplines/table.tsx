'use client'

import { useEffect, useState } from "react"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { getHorseDisciplines } from '../../../../lib/api'
import { SortingState } from "@tanstack/react-table"
import { TableControls } from "../table-controls"

export function HorseDisciplinesTable() {
    const [disciplines, setDisciplines] = useState<any[]>([])

    useEffect(() => {
        const fetchDisciplines = async () => {
            const disciplines = await getHorseDisciplines()
            setDisciplines(disciplines)
        }
        fetchDisciplines()
    }, [])

    const sortDisciplines = (s: SortingState) => {
        const { id, desc } = s[0]
        setDisciplines(prev => [...prev.sort((a, b) => desc ? b[id]?.localeCompare(a[id]) : a[id]?.localeCompare(b[id]))])
    }

    return (
        <DataTable
            columns={columns}
            data={disciplines}
            totalCount={disciplines.length}
            isLoading={false}
            withSearch={false}
            onSortingChange={sortDisciplines}
            extraControllers={
                <TableControls type="discipline" />
            }
        />
    )
}

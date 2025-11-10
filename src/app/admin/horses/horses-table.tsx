"use client"

import React from "react"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { useHorses } from "@/hooks/use-horses"
import { useDebounce } from "@/hooks/use-debounce"
import { ColumnSort } from "@tanstack/react-table"

export function HorsesTable() {
    const [search, setSearch] = React.useState("")
    const [sorting, setSorting] = React.useState<ColumnSort[]>([])
    const [pageIndex, setPageIndex] = React.useState(0)
    const [pageSize, setPageSize] = React.useState(50)

    const debouncedSearch = useDebounce(search, 500)

    const { data, isLoading } = useHorses({
        pageIndex,
        pageSize,
        sorting,
        search: debouncedSearch,
    })

    const horses = data?.horses ?? []
    const totalCount = data?.count ?? 0

    return (
        <DataTable
            columns={columns}
            data={horses}
            totalCount={totalCount}
            isLoading={isLoading}
            searchValue={search}
            onSearchChange={setSearch}
            onSortingChange={setSorting}
            onPaginationChange={(page: number, size: number) => {
                setPageIndex(page)
                setPageSize(size)
            }}
            searchPlaceholder="Search horses..."
        />
    )
}

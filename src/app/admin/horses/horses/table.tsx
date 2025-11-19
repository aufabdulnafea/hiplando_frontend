"use client"

import React from "react"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { useHorses } from "@/hooks/use-horses"
import { ColumnSort } from "@tanstack/react-table"
import { QueryMode } from "@/graphql/sdk"

export function HorsesTable() {
    const [search, setSearch] = React.useState("")
    const [committedSearch, setCommittedSearch] = React.useState("")
    const [sorting, setSorting] = React.useState<ColumnSort[]>([])
    const [pageIndex, setPageIndex] = React.useState(0)
    const [pageSize, setPageSize] = React.useState(50)

    const { data, isLoading } = useHorses({
        pageIndex,
        pageSize,
        sorting,
        where: {
            name: {
                contains: committedSearch,
                mode: QueryMode.Insensitive,
            },
        },
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
            onSearchKeyDown={(e) => {
                if (e.key === "Enter") {
                    setCommittedSearch(search)
                }
            }}
            onSortingChange={setSorting}
            onPaginationChange={(page, size) => {
                setPageIndex(page)
                setPageSize(size)
            }}
            searchPlaceholder="Search horses..."
        />
    )
}

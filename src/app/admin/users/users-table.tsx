"use client"

import React from "react"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { useUsers } from "@/hooks/use-users"
import { useDebounce } from "@/hooks/use-debounce"
import { ColumnSort } from "@tanstack/react-table"

export function UsersTable() {
    const [search, setSearch] = React.useState("")
    const [sorting, setSorting] = React.useState<ColumnSort[]>([])
    const [pageIndex, setPageIndex] = React.useState(0)
    const [pageSize, setPageSize] = React.useState(50)

    const debouncedSearch = useDebounce(search, 500)

    const { data, isLoading } = useUsers({
        pageIndex,
        pageSize,
        sorting,
        search: debouncedSearch,
    })

    const users = data?.users ?? []
    const totalCount = data?.count ?? 0

    return (
        <DataTable
            columns={columns}
            data={users}
            totalCount={totalCount}
            isLoading={isLoading}
            searchValue={search}
            onSearchChange={setSearch}
            onSortingChange={setSorting}
            onPaginationChange={(page: number, size: number) => {
                setPageIndex(page)
                setPageSize(size)
            }}
            searchPlaceholder="Search users..."
        />
    )
}

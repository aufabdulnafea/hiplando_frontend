'use client'

import { useEffect, useState } from "react"
import { DataTable } from "@/components/data-table/data-table"
import { columns } from "./columns"
import { getHorseCategories } from '../../../../lib/api'
import { SortingState } from "@tanstack/react-table"
import { TableControls } from "../table-controls"

export function HorseCategoriesTable() {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getHorseCategories()
      setCategories(categories)
    }
    fetchCategories()
  }, [])

  const sortCategories = (s: SortingState) => {
    const { id, desc } = s[0]
    setCategories(prev => [...prev.sort((a, b) => desc ? b[id]?.localeCompare(a[id]) : a[id]?.localeCompare(b[id]))])
  }

  return (
    <DataTable
      columns={columns}
      data={categories}
      totalCount={categories.length}
      isLoading={false}
      withSearch={false}
      onSortingChange={sortCategories}
      extraControllers={
        <TableControls type="category" />
      }
    />
  )
}

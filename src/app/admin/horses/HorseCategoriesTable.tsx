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
import { FindManyHorseCategoryQuery } from "@/graphql/sdk"
import TableControls from "./TableControls"

export default function HorseCategoriesTable() {
  const [categories, setCategories] = useState<FindManyHorseCategoryQuery['findManyHorseCategory']>([])

  useEffect(() => {
    graphql.findManyHorseCategory().then(res => setCategories(res.findManyHorseCategory))
  }, [])

  const onSubmit = async (formData: Record<string, string>) => {
    try {
      const category = await graphql.createOneHorseCategory({ data: { name: formData.name, imageUrl: formData.imageUrl } })
      if (category['createOneHorseCategory']) setCategories(prev => [...prev, category['createOneHorseCategory']])
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="py-1">
        <TableControls type="category" onSubmit={onSubmit} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Image URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.imageUrl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

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
import { getGraphQLClient } from '@/lib/graphql'
import { FindManyHorseDisciplineQuery } from "@/graphql/sdk"
import TableControls from "./TableControls"

export default function HorseDisciplinesTable() {
  const [disciplines, setDisciplines] = useState<FindManyHorseDisciplineQuery['findManyHorseDiscipline']>([])

  useEffect(() => {
    getGraphQLClient().then(client => client.findManyHorseDiscipline()).then(res => setDisciplines(res.findManyHorseDiscipline))
  }, [])

  const onSubmit = async (formData: Record<string, string>) => {
    try {
      const category = await (await getGraphQLClient()).createOneHorseDiscipline({ data: { name: formData.name } })
      if (category['createOneHorseDiscipline']) setDisciplines(prev => [...prev, category['createOneHorseDiscipline']])
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="py-1">
        <TableControls type="discipline" onSubmit={onSubmit} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disciplines.map((discipline) => (
            <TableRow key={discipline.id}>
              <TableCell>{discipline.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
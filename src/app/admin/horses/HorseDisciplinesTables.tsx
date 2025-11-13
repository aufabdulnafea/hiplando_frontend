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
import TableControls from "./TableControls"

export default function HorseDisciplinesTable() {
  const [disciplines, setDisciplines] = useState<any[]>([])

  useEffect(() => {
  }, [])


  return (
    <div>
      <div className="py-1">
        <TableControls type="discipline" />
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
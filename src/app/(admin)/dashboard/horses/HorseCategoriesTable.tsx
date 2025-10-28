'use client';

import { HorseCategoriesQuery } from '@/graphql/graphql';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { createHorseCategory, deleteHorseCategory, readHorseCategories, updateHorseCategory } from './actions';

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import TableControls from './TableControls';

type Category = NonNullable<HorseCategoriesQuery['horseCategories']>[number];

export interface HorseCategoriesTableContentProps {
  categories: Category[],
  error?: string | null,
  loading: boolean,
  handleUpdate: (category: Category) => void,
  handleDelete: (id: string) => void
}

function HorseCategoriesTableContent(props: HorseCategoriesTableContentProps) {
  const { categories, error, loading, handleUpdate, handleDelete } = props
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Category>[] = [
    {
      accessorKey: 'name',
      header: 'Category Name',
      cell: ({ getValue }) => <span className="font-medium">{getValue() as string}</span>,
    },
    {
      accessorKey: 'imageUrl',
      header: "Image URL",
      cell: ({ getValue }) => <span className="font-medium">{getValue() as string}</span>,
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const category = row.original;
        return (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => handleUpdate(category)}>Edit</Button>
            <Button variant="destructive" size="sm" onClick={() => handleDelete(category.id)}>Delete</Button>
          </div>
        );
      },
    },
  ];


  const table = useReactTable({
    data: categories,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (loading) return <div className="py-12 text-center text-neutral-500">Loading categories…</div>;
  if (error)
    return (
      <div className="p-6 border border-neutral-300 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300">
        <p className="font-semibold mb-1">Error loading data</p>
        <p>{error}</p>
      </div>
    );
  if (!categories.length)
    return (
      <div className="p-8 text-center text-neutral-500 border border-neutral-300 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700">
        No horse Categories found.
      </div>
    );

  return (
    <div className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <Table>
        <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400 cursor-pointer select-none"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: '↑', desc: '↓', }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row, i) => (
            <TableRow
              key={row.id}
              className={`transition-colors ${i % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900/40' : 'bg-white dark:bg-neutral-950'
                } hover:bg-neutral-100 dark:hover:bg-neutral-800/60`}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="py-3 text-sm text-neutral-700 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


export default function HorseCategoriesTable() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async (category: Category) => {
    const updated = await updateHorseCategory(category)
    if (updated.data)
      setCategories(prev => prev.map(el => {
        if (el.id === updated.data?.updateHorseCategory?.id) {
          return updated.data.updateHorseCategory
        }
        return el
      }))
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this Category?')) return;
    const deleted = await deleteHorseCategory(id)
    if (deleted.data)
      setCategories(prev => prev.filter(el => el.id !== deleted.data?.deleteHorseCategory?.id))
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readHorseCategories();
        setCategories(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);




  const onSubmit = async (formData: Record<string, string>) => {
    const created = await createHorseCategory({ name: formData.name, imageUrl: formData.imageUrl })
    setCategories(prev =>
      [created.data?.createHorseCategory, ...prev].filter(
        (c): c is Category => !!c
      )
    )
  }

  return (
    <div className='flex flex-col gap-2'>
      <TableControls
        type='category'
        onSubmit={onSubmit}
      />
      <HorseCategoriesTableContent
        categories={categories}
        error={error}
        loading={loading}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}
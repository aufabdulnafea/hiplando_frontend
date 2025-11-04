// 'use client';

// import { HorseGendersQuery } from '@/graphql/graphql';
// import {
//     useReactTable,
//     getCoreRowModel,
//     getSortedRowModel,
//     flexRender,
//     ColumnDef,
//     SortingState,
// } from '@tanstack/react-table';
// import { useEffect, useState } from 'react';
// import { createHorseGender, deleteHorseGender, readHorseGenders, updateHorseGender } from './actions';

// import {
//     Table,
//     TableHeader,
//     TableHead,
//     TableBody,
//     TableRow,
//     TableCell,
// } from '@/components/ui/table';
// import { Button } from '@/components/ui/button';
// import TableControls from './TableControls';

// type Gender = NonNullable<HorseGendersQuery['horseGenders']>[number];

// export interface HorseGendersTableContentProps {
//     genders: Gender[],
//     error?: string | null,
//     loading: boolean,
//     handleUpdate: (gender: Gender) => void,
//     handleDelete: (id: string) => void
// }

// function HorseGendersTableContent(props: HorseGendersTableContentProps) {
//     const { genders, error, loading, handleUpdate, handleDelete } = props
//     const [sorting, setSorting] = useState<SortingState>([]);

//     const columns: ColumnDef<Gender>[] = [
//         {
//             accessorKey: 'name',
//             header: 'Gender Name',
//             cell: ({ getValue }) => <span className="font-medium">{getValue() as string}</span>,
//         },
//         {
//             accessorKey: 'imageUrl',
//             header: "Image URL",
//             cell: ({ getValue }) => <span className="font-medium">{getValue() as string}</span>,
//         },
//         {
//             id: 'actions',
//             header: 'Actions',
//             cell: ({ row }) => {
//                 const gender = row.original;
//                 return (
//                     <div className="flex gap-2">
//                         <Button variant="outline" size="sm" onClick={() => handleUpdate(gender)}>Edit</Button>
//                         <Button variant="destructive" size="sm" onClick={() => handleDelete(gender.id)}>Delete</Button>
//                     </div>
//                 );
//             },
//         },
//     ];


//     const table = useReactTable({
//         data: genders,
//         columns,
//         state: { sorting },
//         onSortingChange: setSorting,
//         getCoreRowModel: getCoreRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//     });

//     if (loading) return <div className="py-12 text-center text-neutral-500">Loading genders…</div>;
//     if (error)
//         return (
//             <div className="p-6 border border-neutral-300 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300">
//                 <p className="font-semibold mb-1">Error loading data</p>
//                 <p>{error}</p>
//             </div>
//         );
//     if (!genders.length)
//         return (
//             <div className="p-8 text-center text-neutral-500 border border-neutral-300 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700">
//                 No horse Genders found.
//             </div>
//         );

//     return (
//         <div className="rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
//             <Table>
//                 <TableHeader className="bg-neutral-100 dark:bg-neutral-900">
//                     {table.getHeaderGroups().map((headerGroup) => (
//                         <TableRow key={headerGroup.id}>
//                             {headerGroup.headers.map((header) => (
//                                 <TableHead
//                                     key={header.id}
//                                     className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400 cursor-pointer select-none"
//                                     onClick={header.column.getToggleSortingHandler()}
//                                 >
//                                     <div className="flex items-center gap-1">
//                                         {flexRender(header.column.columnDef.header, header.getContext())}
//                                         {{ asc: '↑', desc: '↓', }[header.column.getIsSorted() as string] ?? null}
//                                     </div>
//                                 </TableHead>
//                             ))}
//                         </TableRow>
//                     ))}
//                 </TableHeader>

//                 <TableBody>
//                     {table.getRowModel().rows.map((row, i) => (
//                         <TableRow
//                             key={row.id}
//                             className={`transition-colors ${i % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900/40' : 'bg-white dark:bg-neutral-950'
//                                 } hover:bg-neutral-100 dark:hover:bg-neutral-800/60`}
//                         >
//                             {row.getVisibleCells().map((cell) => (
//                                 <TableCell
//                                     key={cell.id}
//                                     className="py-3 text-sm text-neutral-700 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800"
//                                 >
//                                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                 </TableCell>
//                             ))}
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }


// export default function HorseGendersTable() {

//     const [genders, setGenders] = useState<Gender[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const handleUpdate = async (gender: Gender) => {
//         const updated = await updateHorseGender(gender)
//         if (updated.data)
//             setGenders(prev => prev.map(el => {
//                 if (el.id === updated.data?.updateHorseGender?.id) {
//                     return updated.data.updateHorseGender
//                 }
//                 return el
//             }))
//     };

//     const handleDelete = async (id: string) => {
//         if (!confirm('Are you sure you want to delete this Gender?')) return;
//         const deleted = await deleteHorseGender(id)
//         if (deleted.data)
//             setGenders(prev => prev.filter(el => el.id !== deleted.data?.deleteHorseGender?.id))
//     };


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await readHorseGenders();
//                 setGenders(data);
//             } catch (e: any) {
//                 setError(e.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);




//     const onSubmit = async (formData: Record<string, string>) => {
//         const created = await createHorseGender({ name: formData.name })
//         setGenders(prev =>
//             [created.data?.createHorseGender, ...prev].filter(
//                 (c): c is Gender => !!c
//             )
//         )
//     }

//     return (
//         <div className='flex flex-col gap-2'>
//             <TableControls
//                 type='gender'
//                 onSubmit={onSubmit}
//             />
//             <HorseGendersTableContent
//                 genders={genders}
//                 error={error}
//                 loading={loading}
//                 handleDelete={handleDelete}
//                 handleUpdate={handleUpdate}
//             />
//         </div>
//     )
// }

// 'use client';

// import DataTable from "@/components/data-table-new";
// // import { Button } from "@/components/ui/button";
// import { createHorseGender, deleteHorseGender, readHorseGenders } from "@/lib/graphql";
// import { ColumnDef } from "@tanstack/react-table";
// import { useEffect, useState } from "react";
// import TableControls from "./TableControls";
// import { Button } from "@/components/ui/button";
// type Gender = {
//     id: string;
//     name: string;
// }

// export default function HorseGendersTable() {
//     const [genders, setGenders] = useState<Gender[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await readHorseGenders();
//                 setGenders(data);
//                 console.log(data);
//             } catch (e: any) {
//                 setError(e.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     const onSubmit = async (formData: Record<string, string>) => {
//         const created = await createHorseGender({ name: formData.name, imageUrl: formData.imageUrl })
//         if (created) setGenders(prev => [created, ...prev])
//     }

//     const handleDelete = async (id: string) => {
//         const deleted = await deleteHorseGender({ id })
//         if (deleted) setGenders(prev => prev.filter(el => el.id !== id))
//     }

//     if (loading) return <div className="py-12 text-center text-neutral-500">Loading genders…</div>;
//     if (error) return <div className="p-6 border border-neutral-300 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300">
//         <p className="font-semibold mb-1">Error loading data</p>
//         <p>{error}</p>
//     </div>;
//     // if (!genders.length) return <div className="p-8 text-center text-neutral-500 border border-neutral-300 rounded-lg bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700">No horse Genders found.</div>;

//     const columns: ColumnDef<Gender>[] = [
//         {
//             accessorKey: 'name',
//             header: 'Name',
//             cell: ({ getValue }) => <span className="font-medium">{getValue() as string}</span>,
//         },
//         {
//             accessorKey: 'imageUrl',
//             header: 'Image URL',
//             cell: ({ getValue }) => <span className="font-medium">{getValue() as string}</span>,
//         },
//         {
//             accessorKey: 'actions',
//             header: 'Actions',
//             cell: ({ row }) => {
//                 const gender = row.original;
//                 return (
//                     <div className="flex gap-2">
//                         <Button variant="destructive" size="sm" onClick={() => handleDelete(gender.id)}>Delete</Button>
//                     </div>
//                 )
//             }
//         }
//     ]

//     return (
//         <div className="flex flex-col gap-1">
//             <TableControls type="gender" onSubmit={onSubmit} />
//             <DataTable columns={columns} data={genders} />
//         </div>
//     )
// }


export default function Table() {
    return (
        <div>
            <h1>Horse Categories Table</h1>
        </div>
    )
}
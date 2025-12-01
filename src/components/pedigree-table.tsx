import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export interface PedigreeItem {
    name: string;
    href: string | null;
    sex: "stallion" | "mare";
}

export type PedigreeArray = (PedigreeItem | null)[];

export interface PedigreeTableProps {
    data: PedigreeArray;
}

export function PedigreeTable({ data }: PedigreeTableProps) {
    const get = (i: number) => data?.[i] ?? null;

    const Cell = ({ index, rowSpan = 1 }: { index: number; rowSpan?: number }) => {
        const item = get(index);
        return (
            <TableCell rowSpan={rowSpan} className="p-3 !bg-transparent !hover:bg-transparent align-middle">
                {item ? <span>{item.name}</span> : <span className="text-gray-400">—</span>}
            </TableCell>
        );
    };

    return (
        <Table className="w-full !bg-transparent">
            <TableBody className="[&_*]:!bg-transparent [&_*]:!hover:bg-transparent">

                <TableRow><Cell index={0} rowSpan={8} /><Cell index={1} rowSpan={4} /><Cell index={2} rowSpan={2} /><Cell index={3} /></TableRow>
                <TableRow><Cell index={4} /></TableRow>
                <TableRow><Cell index={5} rowSpan={2} /><Cell index={6} /></TableRow>
                <TableRow><Cell index={7} /></TableRow>
                <TableRow><Cell index={8} rowSpan={4} /><Cell index={9} rowSpan={2} /><Cell index={10} /></TableRow>
                <TableRow><Cell index={11} /></TableRow>
                <TableRow><Cell index={12} rowSpan={2} /><Cell index={13} /></TableRow>
                <TableRow><Cell index={14} /></TableRow>

            </TableBody>
        </Table>
    );
}

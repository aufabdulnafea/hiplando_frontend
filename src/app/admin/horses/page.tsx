// import HorsesTable from "./HorsesTable";
import HorseCategoriesTable from "./HorseCategoriesTable";
import HorseGendersTable from "./HorseGendersTable";
import HorseDisciplineTable from "./HorseDisciplinesTables";
import {HorseTable} from '@/components/horses-table'

export default function AdminHorsesDashboardPage() {
  return (
    <div className="flex-1 flex flex-col pt-4">
      <div className="flex flex-col gap-7">
        {/* <HorsesTable /> */}
        <HorseTable />
        <HorseCategoriesTable />
        <HorseGendersTable />
        <HorseDisciplineTable />
      </div>
    </div>
  );
}

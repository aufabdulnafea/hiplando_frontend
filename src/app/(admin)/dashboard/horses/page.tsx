import HorsesTable from "./HorsesTable";
import HorseCategoriesTable from "./HorseCategoriesTable";
import HorseGendersTable from "./HorseGendersTable";
import HorseDisciplineTable from "./HorseDisciplinesTables";

export default function HorsesDashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex flex-col gap-10">

        <HorsesTable />
        <HorseCategoriesTable />
        <HorseGendersTable />
        <HorseDisciplineTable />

      </div>
    </div>
  );
}

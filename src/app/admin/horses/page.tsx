import HorseCategoriesTable from "./HorseCategoriesTable";
import HorseGendersTable from "./HorseGendersTable";
import HorseDisciplineTable from "./HorseDisciplinesTables";

import { HorsesTable } from './test'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { TabsTrigger } from "@radix-ui/react-tabs";

export default function AdminHorsesDashboardPage() {

  return (
    <div className="max-w-screen overflow-hidden px-4 flex-1">
      <Tabs defaultValue="horses">
        <TabsList className="w-full lg:w-md mt-4 mb-5">
          <TabsTrigger value="horses">Horses</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="genders">Genders</TabsTrigger>
          <TabsTrigger value="disciplines">Disciplines</TabsTrigger>
        </TabsList>
        <TabsContent value="horses">
          <HorsesTable />
        </TabsContent>
        <TabsContent value="categories">
          <HorseCategoriesTable />
        </TabsContent>
        <TabsContent value="genders">
          <HorseGendersTable />
        </TabsContent>
        <TabsContent value="disciplines">
          <HorseDisciplineTable />
        </TabsContent>
      </Tabs>


      {/* <HorsesTable />

      <HorseCategoriesTable />
      <HorseGendersTable />
      <HorseDisciplineTable /> */}
    </div>




  );
}

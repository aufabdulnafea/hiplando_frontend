
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HorseCategoriesTable } from "./categories/table";
import { HorseGendersTable } from "./genders/table";
import { HorseDisciplinesTable } from "./disciplines/table";
import { HorsesTable } from './horses/table';


export default async function AdminHorsesDashboardPage() {

  return (
    <div className="max-w-screen overflow-hidden px-4 flex-1">
      <Tabs defaultValue="horses">
        <TabsList className="w-full lg:w-md mt-4 mb-5">
          <TabsTrigger value="horses">Horses</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="genders">Genders</TabsTrigger>
          <TabsTrigger value="disciplines">Disciplines</TabsTrigger>
        </TabsList>
        <TabsContent value="horses"><HorsesTable /></TabsContent>
        <TabsContent value="categories"><HorseCategoriesTable /></TabsContent>
        <TabsContent value="genders"><HorseGendersTable /></TabsContent>
        <TabsContent value="disciplines"><HorseDisciplinesTable /></TabsContent>
      </Tabs>
    </div>
  );
}

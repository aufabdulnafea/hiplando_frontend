// 'use client';

import Navbar from "@/components/admin/Navbar";
import HorsesTable from "./HorsesTable";
import HorseCategoriesTable from "./HorseCategoriesTable";
import HorseGendersTable from "./HorseGendersTable";
import HorseDisciplineTable from "./HorseDisciplinesTables";
// import AddItemModal from "./ADdItemModal";
// // import { useState, useRef } from "react";
// import { graphql } from "@/graphql";
// import { execute } from "@/graphql/execute";

export default function HorsesDashboardPage() {
  // const [openModal, setOpenModal] = useState(false);
  // const [modalType, setModalType] = useState<"category" | "gender" | "discipline" | null>(null);
  // const categoriesRef = useRef<{ refresh: () => void }>(null);

  // const handleOpen = (type: typeof modalType) => {
  //   setModalType(type);
  //   setOpenModal(true);
  // };

  // const handleAddItem = async (formData: Record<string, string>) => {
  //   try {
  //     if (modalType === "category") {
  //       const mutation = graphql(`
  //         mutation CreateHorseCategory($data: CreateHorseCategoryInput!) {
  //           createHorseCategory(data: $data) {
  //             id
  //             name
  //             imageUrl
  //           }
  //         }
  //       `);
  //       await execute(mutation, { data: { name: formData.name, imageUrl: formData.imageUrl } });
  //       categoriesRef.current?.refresh();
  //     } else if (modalType === "gender") {
  //       const mutation = graphql(`
  //         mutation CreateHorseGender($data: CreateHorseGenderInput!) {
  //           createHorseGender(data: $data) {
  //             id
  //             name
  //           }
  //         }
  //       `);
  //       await execute(mutation, { data: { name: formData.name } });
  //     } else if (modalType === "discipline") {
  //       const mutation = graphql(`
  //         mutation CreateHorseDiscipline($data: CreateHorseDisciplineInput!) {
  //           createHorseDiscipline(data: $data) {
  //             id
  //             name
  //           }
  //         }
  //       `);
  //       await execute(mutation, { data: { name: formData.name } });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setOpenModal(false);
  //   }
  // };

  // const modalFields =
  //   modalType === "category"
  //     ? [
  //         { name: "name", label: "Category Name" },
  //         { name: "imageUrl", label: "Image URL" },
  //       ]
  //     : [{ name: "name", label: "Name" }];

  return (
    <div className="flex-1 flex flex-col">
      <Navbar title="Horses" />
      <div className="p-4 flex flex-col gap-10">

        <HorsesTable />
        <HorseCategoriesTable />
        <HorseGendersTable />
        <HorseDisciplineTable />

      </div>

      {/* {modalType && (
        <AddItemModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title={`Add ${modalType}`}
          onSubmit={handleAddItem}
          fields={modalFields}
        />
      )} */}
    </div>
  );
}

import AddHorseForm from "./form";
import { getHorseCategories, getHorseDisciplines, getHorseGenders } from "@/lib/api";

export default async function AddHorsePage() {
    const genders = await getHorseGenders()
    const disciplines = await getHorseDisciplines()
    const categories = await getHorseCategories()

    return <AddHorseForm
        categories={categories}
        disciplines={disciplines}
        genders={genders}
    />;

}
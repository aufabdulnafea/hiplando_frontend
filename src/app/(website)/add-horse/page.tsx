import { getGraphQLClient } from "@/lib/graphql";
import AddHorseForm from "./form";

export default async function AddHorsePage() {
    const categories = await (await getGraphQLClient()).findManyHorseCategory();
    const disciplines = await (await getGraphQLClient()).findManyHorseDiscipline();
    const genders = await (await getGraphQLClient()).findManyHorseGender();
    return <AddHorseForm
        categories={categories.findManyHorseCategory}
        disciplines={disciplines.findManyHorseDiscipline}
        genders={genders.findManyHorseGender}
    />;
}
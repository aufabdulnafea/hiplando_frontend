import AddHorseForm from "./form";

export default async function AddHorsePage() {
    const gendersResponse = await fetch("http://192.168.0.217:4000/api/v1/genders", {
        next: {
            tags: ['genders'],
            revalidate: false
        }
    })
    const genders = await gendersResponse.json();

    const disciplinesResponse = await fetch("http://192.168.0.217:4000/api/v1/disciplines", {
        next: {
            tags: ['disciplines'],
            revalidate: false
        }
    })
    const disciplines = await disciplinesResponse.json();

    const categoriesResponse = await fetch("http://192.168.0.217:4000/api/v1/categories", {
        next: {
            tags: ['categories'],
            revalidate: false
        }
    })
    const categories = await categoriesResponse.json();

    return <AddHorseForm
        categories={categories}
        disciplines={disciplines}
        genders={genders}
    />;

}
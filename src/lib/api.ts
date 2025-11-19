import z from "zod"
import { auth } from "./firebase"
import { unstable_cache } from "next/cache"
import { getGraphQLClient } from "./graphql"

export async function getHorseDisciplines() {
    const disciplinesResponse = await fetch("http://192.168.0.217:4000/api/v1/disciplines", {
        next: {
            tags: ['disciplines'],
            revalidate: false
        }
    })
    return await disciplinesResponse.json()
}

export async function getHorseGenders() {
    const gendersResponse = await fetch("http://192.168.0.217:4000/api/v1/genders", {
        next: {
            tags: ['genders'],
            revalidate: false
        }
    })
    return await gendersResponse.json()
}

export async function getHorseCategories() {
    const categoriesResponse = await fetch("http://192.168.0.217:4000/api/v1/categories", {
        next: {
            tags: ['categories'],
            revalidate: false
        }
    })
    return await categoriesResponse.json()
}


export async function addToFavorite(horseId: string) {
    const token = await auth.currentUser?.getIdToken()

    const response = await fetch(`http://192.168.0.217:4000/api/v1/horses/favorite/${horseId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const res = await response.json()
    console.log(res)
    return res
}

export async function removeFromFavorite(horseId: string) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`http://192.168.0.217:4000/api/v1/horses/favorite/${horseId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const res = await response.json()
    console.log(res)
    return res
}


// --------- Category ---------

export const addCategorySchema = z.object({
    name: z.string().min(1, "Name is required"),
    image: z
        .any()
        .refine((files) => files?.length === 1, "File is required"), // make sure one file is selected
});

export type AddCategoryFormData = z.infer<typeof addCategorySchema>;

export async function addCategory(data: FormData) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`http://192.168.0.217:4000/api/v1/admin/horses/category`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: data
    })
    const res = await response.json()
    console.log(res)
    return res
}


// --------- Discipline ---------

export const addDisciplineSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

export type AddDisciplineFormData = z.infer<typeof addDisciplineSchema>;

export async function addDiscipline(data: AddDisciplineFormData) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`http://192.168.0.217:4000/api/v1/admin/horses/discipline`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    const res = await response.json()
    console.log(res)
    return res
}

export const addGenderSchema = addDisciplineSchema
export type AddGenderFormData = AddDisciplineFormData

export async function addGender(data: AddGenderFormData) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`http://192.168.0.217:4000/api/v1/admin/horses/gender`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    const res = await response.json()
    console.log(res)
    return res
}


export const getHorseData = (id: string) => unstable_cache(
    async () => {
        const sdk = await getGraphQLClient();
        const { findUniqueHorse } = await sdk.findUniqueHorse({ where: { id } });
        console.log(findUniqueHorse)
        return findUniqueHorse;
    }, ["horses", id], { tags: ["horses", id] }
);
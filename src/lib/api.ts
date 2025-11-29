import z from "zod"
import { auth } from "./firebase"
import { unstable_cache } from "next/cache"
import { getGraphQLClient } from "./graphql"

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const errorBody = await response.text().catch(() => "Unknown error");
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }
    return response.json();
}

export async function getHorseDisciplines() {
    const disciplinesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/disciplines`, {
        next: {
            tags: ['disciplines'],
            revalidate: false
        }
    })
    return handleResponse<any>(disciplinesResponse)
}

export async function getHorseGenders() {
    const gendersResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/genders`, {
        next: {
            tags: ['genders'],
            revalidate: false
        }
    })
    return handleResponse<any>(gendersResponse)
}

export async function getHorseCategories() {
    const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
        next: {
            tags: ['categories'],
            revalidate: false
        }
    })
    return handleResponse<any>(categoriesResponse)
}


export async function addToFavorite(horseId: string) {
    const token = await auth.currentUser?.getIdToken()

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/horses/favorite/${horseId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return handleResponse<any>(response)
}

export async function removeFromFavorite(horseId: string) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/horses/favorite/${horseId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return handleResponse<any>(response)
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/horses/category`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: data
    })
    return handleResponse<any>(response)
}


// --------- Discipline ---------

export const addDisciplineSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

export type AddDisciplineFormData = z.infer<typeof addDisciplineSchema>;

export async function addDiscipline(data: AddDisciplineFormData) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/horses/discipline`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    return handleResponse<any>(response)
}

export const addGenderSchema = addDisciplineSchema
export type AddGenderFormData = AddDisciplineFormData

export async function addGender(data: AddGenderFormData) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/horses/gender`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    return handleResponse<any>(response)
}


export const getHorseData = (id: string) => unstable_cache(
    async () => {
        const sdk = await getGraphQLClient();
        const { findUniqueHorse } = await sdk.findUniqueHorse({ where: { id } });
        return findUniqueHorse;
    }, ["horses", id], { tags: ["horses", id] }
);

export async function getProtectedFile(url: string) {
    console.log("---", url)
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`)

    const blob = await response.blob()
    return URL.createObjectURL(blob)
}
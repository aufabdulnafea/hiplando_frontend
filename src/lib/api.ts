import z from "zod"
import { auth } from "./firebase"
// import { unstable_cache } from "next/cache"
import { getGraphQLClient } from "./graphql"

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const errorBody = await response.text().catch(() => "Unknown error");
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }
    return response.json();
}

export async function getHorseDisciplines() {
    const disciplinesResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/disciplines`, {
        next: {
            tags: ['disciplines'],
            revalidate: false
        }
    })
    return handleResponse<any>(disciplinesResponse)
}

export async function getHorseGenders() {
    const gendersResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/genders`, {
        next: {
            tags: ['genders'],
            revalidate: false
        }
    })
    return handleResponse<any>(gendersResponse)
}

export async function getHorseCategories() {
    const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/categories`, {
        next: {
            tags: ['categories'],
            revalidate: false
        }
    })
    return handleResponse<any>(categoriesResponse)
}


export async function addToFavorite(horseId: string) {
    const token = await auth.currentUser?.getIdToken()

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/favorite/${horseId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    return handleResponse<any>(response)
}

export async function removeFromFavorite(horseId: string) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/favorite/${horseId}`, {
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/admin/horses/category`, {
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/admin/horses/discipline`, {
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/admin/horses/gender`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    return handleResponse<any>(response)
}


// export const getHorseData = (id: string) =>
//     unstable_cache(
//         async () => {
//             const sdk = await getGraphQLClient();
//             const { findUniqueHorse } = await sdk.findUniqueHorse({ where: { id } });
//             return findUniqueHorse;
//         },
//         ["horses", id],
//         {
//             tags: ["horses", id]
//         }
//     );

export async function getHorseData(id: string) {
    const sdk = await getGraphQLClient();
    const { findUniqueHorse } = await sdk.findUniqueHorse({ where: { id } });
    return findUniqueHorse;
}

export async function getProtectedMedia(url: string) {
    if (!url) return undefined;
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

// http://localhost:4000/api/v1/horses/horse-telex-pedigree
export async function readHorseTelexPedigree(url: string) {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/horse-telex-pedigree`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url }),
    })

    if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`)

    const json = await response.json()
    if (Array.isArray(json)) return json
    return []
}

export async function updateHorse(id: string, data: any): Promise<any> {
    const token = await auth.currentUser?.getIdToken()
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/update/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    return handleResponse<any>(response)
}


export type HorseMediaType = 'photos' | 'vetReport' | 'xrayResults';

export async function deleteHorseMedia(
    horseId: string,
    mediaType: HorseMediaType,
    filename?: string,
): Promise<any> {
    const token = await auth.currentUser?.getIdToken();

    let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/${horseId}/delete-media?type=${mediaType}`;
    if (filename) {
        url += `&filename=${encodeURIComponent(filename)}`;
    }
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return handleResponse<any>(response);
}

interface UploadHorseMediaOptions {
    horseId: string;
    photos?: FileList;
    vetReport?: File;
    xrayResults?: File;
}

export async function uploadHorseMedia(
    options: UploadHorseMediaOptions
): Promise<any> {
    const { horseId, photos, vetReport, xrayResults } = options;
    const token = await auth.currentUser?.getIdToken();
    const formData = new FormData();
    if (photos && photos.length > 0) {
        for (const photo of photos) {
            formData.append('photos', photo);
        }
    } else if (vetReport) {
        formData.append('vetReport', vetReport);
    } else if (xrayResults) {
        formData.append('xrayResults', xrayResults);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/horses/${horseId}/upload-media`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
    });
    return handleResponse<any>(response);
}
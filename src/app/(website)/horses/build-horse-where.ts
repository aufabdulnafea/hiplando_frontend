import { HorseStatus, HorseWhereInput, QueryMode } from "@/graphql/sdk";

interface BuildWhereParams {
    search?: string;
    disciplines?: string[];
    ageMin?: number;
    ageMax?: number;
    priceMin?: number;
    priceMax?: number;
    heightMin?: number;
    heightMax?: number;
    location?: string;
}

export function buildHorseWhere(filters: BuildWhereParams): HorseWhereInput {
    const where: HorseWhereInput = {};

    if (filters.search && filters.search.trim()) {
        where.OR = [
            {
                name: { contains: filters.search, mode: QueryMode.Insensitive },
            },
            {
                category: { is: { name: { contains: filters.search, mode: QueryMode.Insensitive } } },
            },
        ];
    }

    if (filters.disciplines && filters.disciplines.length > 0) {
        where.discipline = { is: { OR: filters.disciplines.map((id) => ({ id: { equals: id } })) } };
    }

    if (filters.ageMin != null || filters.ageMax != null) {
        where.yearOfBirth = {};
        if (filters.ageMin != null) where.yearOfBirth.gte = filters.ageMin;
        if (filters.ageMax != null) where.yearOfBirth.lte = filters.ageMax;
    }

    if (filters.priceMin != null || filters.priceMax != null) {
        where.price = {};
        if (filters.priceMin != null) where.price.gte = filters.priceMin;
        if (filters.priceMax != null) where.price.lte = filters.priceMax;
    }

    if (filters.heightMin != null || filters.heightMax != null) {
        where.height = {};
        if (filters.heightMin != null) where.height.gte = filters.heightMin;
        if (filters.heightMax != null) where.height.lte = filters.heightMax;
    }

    if (filters.location) where.location = { equals: filters.location, mode: QueryMode.Insensitive };

    return { ...where, status: { equals: HorseStatus.Accepted } };
}
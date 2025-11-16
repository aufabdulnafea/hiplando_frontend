import { HorseWhereInput, QueryMode } from "@/graphql/sdk";

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

    // -------------------------------
    // TEXT SEARCH
    // -------------------------------
    if (filters.search && filters.search.trim()) {
        where.OR = [
            {
                name: {
                    contains: filters.search,
                    mode: QueryMode.Insensitive,
                },
            },
            {
                category: {
                    is: {
                        name: {
                            contains: filters.search,
                            mode: QueryMode.Insensitive,
                        },
                    },
                },
            },
        ];
    }

    // -------------------------------
    // DISCIPLINES (multi-select)
    // disciplines?: { some?: { id?: StringFilter } }
    // -------------------------------
    if (filters.disciplines && filters.disciplines.length > 0) {
        where.discipline = {
            is: {
                OR: filters.disciplines.map((id) => ({
                    id: { equals: id },
                })),
            },
        };
    }

    // -------------------------------
    // AGE RANGE
    // -------------------------------
    if (filters.ageMin != null || filters.ageMax != null) {
        where.age = {};
        if (filters.ageMin != null) where.age.gte = filters.ageMin;
        if (filters.ageMax != null) where.age.lte = filters.ageMax;
    }

    // -------------------------------
    // PRICE RANGE
    // -------------------------------
    if (filters.priceMin != null || filters.priceMax != null) {
        where.price = {};
        if (filters.priceMin != null) where.price.gte = filters.priceMin;
        if (filters.priceMax != null) where.price.lte = filters.priceMax;
    }

    // -------------------------------
    // HEIGHT RANGE (cm)
    // -------------------------------
    if (filters.heightMin != null || filters.heightMax != null) {
        where.height = {};
        if (filters.heightMin != null) where.height.gte = filters.heightMin;
        if (filters.heightMax != null) where.height.lte = filters.heightMax;
    }

    // -------------------------------
    // LOCATION
    // -------------------------------
    if (filters.location) {
        where.location = {
            equals: filters.location,
            mode: QueryMode.Insensitive,
        };
    }


    console.log(where)

    return where;
}
import { graphql } from '@/lib/graphql'

export function useHorses(params: {
    page: number;
    pageSize: number;
    search: string;
    sort: { field: string; direction: "asc" | "desc" } | null;
}) {
    const skip = (params.page - 1) * params.pageSize;
    const take = params.pageSize;

    const where = params.search
        ? { name: { contains: params.search, mode: "insensitive" } }
        : undefined;

    const orderBy = params.sort
        ? [{ [params.sort.field]: params.sort.direction }]
        : undefined;

    return graphql.findManyHorse({ skip, take, where, orderBy })
}

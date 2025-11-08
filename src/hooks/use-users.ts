import { graphql } from '@/lib/graphql'

function spreadToNestedObject(path: string, value: any) {
    return path.split('.').reduceRight((acc, key) => ({ [key]: acc }), value);
}

export function useUsers(params: {
    page: number;
    pageSize: number;
    search: string;
    sort: { field: string; direction: "asc" | "desc" } | null;
}) {
    const skip = (params.page - 1) * params.pageSize;
    const take = params.pageSize;

    const where = params.search
        ? { name: { contains: params.search } }
        : undefined;

    const orderBy = params.sort
        ? [spreadToNestedObject(params.sort.field, params.sort.direction)]
        : undefined;
    graphql.findManyUserCount({ where })
    return graphql.findManyUser({ skip, take, where, orderBy })
}

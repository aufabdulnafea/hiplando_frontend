import { getGraphQLClient } from "@/lib/graphql";
import { useQuery } from "@tanstack/react-query";
import { SortingState } from "@tanstack/react-table";

function spreadToNestedObject(path: string, value: any) {
    return path.split("_").reduceRight((acc, key) => ({ [key]: acc }), value);
}

export interface UseUsersProps {
    pageIndex: number;
    pageSize: number;
    search: string;
    sorting: SortingState;
}

export function useUsers(params: UseUsersProps) {

    const skip = (params.pageIndex) * params.pageSize;
    const take = params.pageSize;
    const orderBy = params.sorting[0] ? [spreadToNestedObject(params.sorting[0].id, params.sorting[0].desc ? "desc" : "asc")] : undefined;
    const where = params.search ? { name: { contains: params.search } } : undefined

    console.log(orderBy)

    return useQuery({
        queryKey: ["users", params],
        queryFn: async () => {
            const client = await getGraphQLClient()
            const [users, countResult] = await Promise.all([
                client.findManyUser({ skip, take, orderBy, where }),
                client.findManyUserCount({}),
            ]);
            return { users: users.findManyUser, count: countResult.findManyUserCount };
        }
    });
}

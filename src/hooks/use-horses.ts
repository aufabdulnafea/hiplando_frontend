import { FindManyHorseQuery } from "@/graphql/sdk";
import { getGraphQLClient } from "@/lib/graphql";
import { useQuery } from "@tanstack/react-query";
import { SortingState } from "@tanstack/react-table";

function spreadToNestedObject(path: string, value: any) {
    return path.split("_").reduceRight((acc, key) => ({ [key]: acc }), value);
}

export interface UseHorsesProps {
    pageIndex: number;
    pageSize: number;
    search: string;
    sorting: SortingState;
    initialData?: FindManyHorseQuery['findManyHorse']
}

export function useHorses(params: UseHorsesProps) {

    const skip = (params.pageIndex) * params.pageSize;
    const take = params.pageSize;
    const orderBy = params.sorting[0] ? [spreadToNestedObject(params.sorting[0].id, params.sorting[0].desc ? "desc" : "asc")] : undefined;
    const where = params.search ? { name: { contains: params.search } } : undefined

    return useQuery({
        queryKey: ["horses", params],
        queryFn: async () => {
            const client = await getGraphQLClient()
            const [horses, countResult] = await Promise.all([
                client.findManyHorse({ skip, take, orderBy, where }),
                client.findManyHorseCount({}),
            ]);
            return { horses: horses.findManyHorse, count: countResult.findManyHorseCount };
        },
        initialData: { horses: params.initialData, count: params.initialData?.length || 0 }
    });
}

import { FindManyHorseQuery, HorseWhereInput, InputMaybe } from "@/graphql/sdk";
import { getGraphQLClient } from "@/lib/graphql";
import { useQuery } from "@tanstack/react-query";
import { SortingState } from "@tanstack/react-table";

function spreadToNestedObject(path: string, value: any) {
    return path.split("_").reduceRight((acc, key) => ({ [key]: acc }), value);
}

export interface UseHorsesProps {
    pageIndex: number;
    pageSize: number;
    where?: InputMaybe<HorseWhereInput>;
    sorting: SortingState;
    initialData?: FindManyHorseQuery['findManyHorse'];
}

export function useHorses(params: UseHorsesProps) {

    const shouldFetch =
        (params.where && Object.keys(params.where).length > 0) ||
        (params.sorting && params.sorting.length > 0) ||
        params.pageIndex > 0;

    console.log(shouldFetch, params.where)

    const skip = params.pageIndex * params.pageSize;
    const take = params.pageSize;
    const orderBy = params.sorting[0]
        ? [spreadToNestedObject(params.sorting[0].id, params.sorting[0].desc ? "desc" : "asc")]
        : undefined;

    return useQuery({
        queryKey: ["horses", params],
        queryFn: async () => {
            const client = await getGraphQLClient();
            const [horses, countResult] = await Promise.all([
                client.findManyHorse({ skip, take, orderBy, where: params.where }),
                client.findManyHorseCount({ where: params.where }),
            ]);
            return {
                horses: horses.findManyHorse,
                count: countResult.findManyHorseCount,
            };
        },
        initialData: { horses: params.initialData, count: params.initialData?.length || 0 },
        enabled: shouldFetch,

    });
}

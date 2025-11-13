
import { revalidateTag, unstable_cache } from 'next/cache'
import { getGraphQLClient } from '@/lib/graphql'
import HorsesGrid from './horses-grid'

const getHorsesGridInitialData = unstable_cache(async () => {
    const sdk = await getGraphQLClient()
    const { findManyHorse } = await sdk.findManyHorse({ take: 6 })
    return findManyHorse
}, ['horses-grid'], { tags: ['horses-grid'] })

export default async function HorsesPage() {
    const initialData = await getHorsesGridInitialData()
    

    return (
        <HorsesGrid initialData={initialData} />
    )
}

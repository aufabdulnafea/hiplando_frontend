
import { getHorseDisciplines } from '@/lib/api'
import HorsesGrid from './horses-grid'

export default async function HorsesPage() {
    const disciplines = await getHorseDisciplines()
    return (
        <HorsesGrid disciplines={disciplines} />
    )
}

import { useRouter } from 'next/router'

export default function HorsePage() {
    const router = useRouter()
    return <div> Horse Page with ID: {router.query.slug}</div>
}
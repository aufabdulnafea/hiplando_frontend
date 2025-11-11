import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Heart, MapPin } from 'lucide-react'
import { FiCheckCircle } from "react-icons/fi";

export function VerifiedHorseCardBadge() {
    return (
        <div className='bg-primary flex items-center gap-1.5 text-primary-foreground px-2 py-1 rounded-full text-sm'>
            <span><FiCheckCircle /></span>
            verified
        </div>
    )
}

export default function HorseCard() {
    return (
        <Card className='max-w-md pt-0 relative'>
            <div className='absolute top-0 z-10 w-full p-2 flex justify-between'>
                <div>
                    <VerifiedHorseCardBadge />
                </div>
                <Button variant='secondary' size='icon-lg' className='rounded-full'>
                    <Heart className='text-red-500 fill-red-500' />

                </Button>
            </div>
            <CardContent className='px-0'>
                <img
                    src='http://192.168.0.217:4000/f8855ce1-b401-4926-81a2-bc9ff6c19bcf.webp'
                    alt='Banner'
                    className='aspect-video h-70 rounded-t-xl object-cover'
                />
            </CardContent>
            <CardHeader>
                <CardTitle className='text-primary font-bold'>Ethereal Swirl Gradient</CardTitle>
                <CardDescription className='flex flex-col gap-1'>
                    <div>8y Gelding. Show Jumping</div>
                    <div className='text-2xl font-extrabold text-yellow-600'>$55,000</div>
                    <div className='flex items-center gap-1'>
                        <MapPin className='size-4' />
                        Germany, Dortmund
                    </div>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className='flex-1'>View Details</Button>
            </CardFooter>
        </Card>
    )
}
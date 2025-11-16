import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Heart, MapPin } from 'lucide-react'
import { FiCheckCircle } from "react-icons/fi";
import { FindManyHorseQuery } from "@/graphql/sdk";
import Image from 'next/image'
import { Suspense } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/format-price';
import { Skeleton } from '@/components/ui/skeleton';

interface HorseCardProps {
    horse: FindManyHorseQuery['findManyHorse'][number]
}

function ImageSkeleton() {
    return (
        // <div className="w-full h-50 bg-gray-200 animate-pulse rounded-t-lg flex items-center justify-center text-gray-400 text-sm">
        //     Loading image...
        // </div>
        <Skeleton className='w-full h-52' />
    )
}

export function VerifiedHorseCardBadge() {
    return (
        <div className='bg-primary flex items-center gap-1.5 text-primary-foreground pl-2 pr-3 py-1 rounded-full text-sm'>
            <span><FiCheckCircle /></span>
            verified
        </div>
    )
}

export function HorseCardSkeleton() {
    return (
        <Card className='max-w-md pt-0 relative overflow-hidden'>

            <CardContent className='px-0'>
                <ImageSkeleton />
            </CardContent>
            <CardHeader>
                <CardTitle>
                    <Skeleton className='w-52 h-6' />
                </CardTitle>
                <CardDescription className='flex flex-col gap-1'>
                    <Skeleton className='w-full p-2 h-10' />
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Skeleton className='w-full p-2 h-7' />
            </CardFooter>
        </Card>
    )
}

export default function HorseCard({ horse }: HorseCardProps) {
    return (
        <Card className='max-w-md pt-0 relative overflow-hidden'>
            <div className='absolute top-0 z-10 w-full p-2 flex justify-between'>
                <div>
                    <VerifiedHorseCardBadge />
                </div>
                <Button variant='secondary' size='icon-lg' className='rounded-full'>
                    <Heart className='text-red-500 fill-red-500' />
                </Button>
            </div>
            <CardContent className='px-0'>
                {
                    horse.photos.length > 0 && (
                        <Suspense fallback={<ImageSkeleton />}>
                            <Image
                                src={horse.photos[0]}
                                alt={horse.name}
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full h-50 object-cover rounded-t-lg"
                            />
                        </Suspense>
                    )
                }
            </CardContent>
            <CardHeader>
                <CardTitle className='text-primary font-bold'>{horse.name}</CardTitle>
                <CardDescription className='flex flex-col gap-1'>
                    <div className='capitalize'>{horse.gender.name}</div>
                    <div className='text-2xl font-extrabold text-yellow-600'>{formatPrice(horse.price)}</div>
                    <div className='flex items-center gap-1 capitalize'>
                        <MapPin className='size-4' />
                        {horse.location}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/horses/${horse.id}`} className='flex-1'>
                    <Button className='w-full'>View Details</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
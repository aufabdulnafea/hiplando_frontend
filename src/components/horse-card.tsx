'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Heart, MapPin } from 'lucide-react'
import { FiCheckCircle } from "react-icons/fi";
import { FindManyHorseQuery } from "@/graphql/sdk";
import Image from 'next/image'
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/format-price';
import { Skeleton } from '@/components/ui/skeleton';
import { addToFavorite, removeFromFavorite } from '@/lib/api';
import { toast } from 'sonner'

interface HorseCardProps {
    horse: FindManyHorseQuery['findManyHorse'][number]
}

function ImageSkeleton() {
    return <Skeleton className='w-full h-64' />
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
    const [changingFavorite, setChangingFavorite] = useState(false)
    const [favoriteByUsers, setFavoriteByUsers] = useState(!!horse.favoriteByUsers.length);

    const addHorseToFavorite = async (id: string) => {
        try {
            if (changingFavorite) return
            setChangingFavorite(true)
            await addToFavorite(id)
            setFavoriteByUsers(true)
            setChangingFavorite(false)
        } catch (e) {
            toast.error("Failed to add horse to favorite")
            setChangingFavorite(false)
        }
    }

    const removeHorseFromFavorite = async (id: string) => {
        try {
            if (changingFavorite) return
            setChangingFavorite(true)
            await removeFromFavorite(id)
            setFavoriteByUsers(false)
            setChangingFavorite(false)
        } catch (e) {
            toast.error("Failed to remove horse from favorite")
            setChangingFavorite(false)
        }
    }

    return (
        <Card className='max-w-md pt-0 relative overflow-hidden'>
            <div className='absolute top-0 z-10 w-full p-2 flex justify-between'>
                <div>
                    <VerifiedHorseCardBadge />
                </div>
                <Button
                    onClick={() => {
                        if (favoriteByUsers) removeHorseFromFavorite(horse.id)
                        else addHorseToFavorite(horse.id)
                    }}
                    variant='secondary' size='icon-lg' className='rounded-full'>
                    <Heart className={
                        `${favoriteByUsers ? 'text-transparent fill-red-500' : 'text-transparent fill-neutral-400'} size-5 transition-colors ease-in-out duration-200`}
                    />
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
                                className="w-full h-64 object-cover rounded-t-lg"
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
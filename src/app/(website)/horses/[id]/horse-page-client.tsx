'use client';

import { HorsePhotosSliderCard } from './horse-photos-slider-card';
import { HorseInfoCard } from './horse-info-card';
import { HorseDescriptionCard } from './horse-description-card';
import HorsePedigreeCard from './horse-pedigree-card';
import { Button } from '@/components/ui/button';
import { HorseStatus } from '@/graphql/sdk';
import { useAuth } from '@/context/AuthContext'; // your Firebase AuthContext
import { FindUniqueHorseQuery } from '@/graphql/sdk';
import { acceptHorse } from '@/lib/api';
import { useState } from 'react';

interface HorsePageClientProps {
    horse: NonNullable<FindUniqueHorseQuery['findUniqueHorse']>;
}

export default function HorsePageClient({ horse }: HorsePageClientProps) {
    const user = useAuth();
    const [status, setStatus] = useState(horse.status)


    const acceptHorseButton = async () => {

        await acceptHorse(horse.id);
        setStatus(HorseStatus.Accepted)
    }

    return (
        <>
            <div className="pt-5 flex justify-end gap-2">
                {status === HorseStatus.Approved && <Button onClick={acceptHorseButton}>Accept</Button>}
                {user?.user?.uid === horse.user.uid && (
                    <Button variant="destructive">Delete</Button>
                )}
            </div>

            <div className="flex flex-col gap-10 pt-5 pb-20">
                <div className="flex flex-col md:flex-row w-full gap-10">
                    <div className="flex-2 md:w-2/3 flex flex-col gap-10">
                        <HorsePhotosSliderCard horse={horse} />
                    </div>
                    <div className="flex-1">
                        <HorseInfoCard horse={horse} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-10">
                    <div className="flex-2 flex flex-col gap-10">
                        <HorsePedigreeCard horse={horse} />
                        <HorseDescriptionCard horse={horse} />
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </>
    );
}

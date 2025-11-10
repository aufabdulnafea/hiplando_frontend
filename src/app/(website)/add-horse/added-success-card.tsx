
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { EyeIcon } from 'lucide-react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FiCheckCircle } from "react-icons/fi";

export interface HorseAddedSuccessCardProps {
    id: string
}

export function HorseAddedSuccessCard(props: HorseAddedSuccessCardProps) {
    const { id } = props
    return (
        <Container>
            <div className='h-[70vh] flex items-center justify-center'>
                <Card className='w-full max-w-lg'>
                    <CardHeader>
                        <div className='w-full flex items-center justify-center py-2'>
                            <FiCheckCircle className='size-18 text-green-700' />
                        </div>
                        <CardTitle className='text-xl font-bold text-primary'>Your horse has been submitted for review!</CardTitle>
                        <CardDescription>
                            We'll review your listing and notify you once it's live. This usually takes 24-48 hours.
                        </CardDescription>
                    </CardHeader>
                    {/* <CardContent>
                    </CardContent> */}
                    <CardFooter className='flex flex-col gap-2'>
                        <Button className='w-full'>
                            <EyeIcon />
                            Preview Listing
                        </Button>
                        <div className='w-full flex-col sm:flex-row flex gap-2'>
                            <Button variant="outline" className='flex-1 text-primary border border-primary/30'>
                                Browse Other Horses
                            </Button>
                            <Button variant="secondary" className='flex-1'>
                                Add Another Horse
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </Container>
    )
}
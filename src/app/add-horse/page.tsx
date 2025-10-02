'use client';
import Container from "@/components/Container";
import {z} from 'zod'

const schema = z.object({
    name: z.string().min(2, "Name is required")
})

export default function AddHorse() {
    return (
        <div>
            <Container>
                Add horse
            </Container>
        </div>
    )
}
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { path, secret } = await req.json();

    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    revalidatePath(path);
    return NextResponse.json({ revalidated: true });
}

import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { tag, secret } = await req.json();

    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    revalidateTag(tag, "max");
    return NextResponse.json({ revalidated: true });
}

// TODO: remove this
export async function GET() {
    revalidateTag("horses-grid", "max");
    revalidateTag("disciplines", "max");
    revalidateTag("genders", "max");
    revalidateTag("categories", "max");
    revalidateTag("5d7ca56b-3310-4234-a351-f1154b94c33a", "max");
    revalidateTag("3257dbb6-0c89-4353-86ab-640b88f2d51c", "max");
    return NextResponse.json({ revalidated: true });
}
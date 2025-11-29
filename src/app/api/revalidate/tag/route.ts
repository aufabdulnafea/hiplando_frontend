
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { tag, secret } = await req.json();
    console.log(tag, secret);

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
    revalidateTag("61159442-b82e-4c5a-9bbc-1127a3d959fe", "max");
    revalidateTag("3257dbb6-0c89-4353-86ab-640b88f2d51c", "max");
    return NextResponse.json({ revalidated: true });
}
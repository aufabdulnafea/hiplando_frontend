
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
    return NextResponse.json({ revalidated: true });
}
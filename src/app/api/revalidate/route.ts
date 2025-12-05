import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const tags: string[] = body.tags || ["*"];

        await Promise.all(tags.map(tag => revalidateTag(tag)));

        return new Response(JSON.stringify({ revalidated: true }), {
            status: 200,
        });
    } catch (err: any) {
        console.error(err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}

import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const tag = body.tag || "*";

        await revalidateTag(tag);

        return new Response(JSON.stringify({ revalidated: true }), {
            status: 200,
        });
    } catch (err: any) {
        console.error("Revalidate failed:", err);
        return new Response(
            JSON.stringify({ error: err.message || "Unknown error" }),
            { status: 500 }
        );
    }
}

import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
});

export async function sanityFetch<const Q extends string>({
    query,
    params = {},
    tags = [],
}: {
    query: Q;
    params?: QueryParams;
    tags?: string[];
}) {
    return client.fetch(query, params, {
        cache: "force-cache",
        next: {
            revalidate: false,
            tags,
        },
    });
}

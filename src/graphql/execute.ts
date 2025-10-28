import type { TypedDocumentString } from './graphql';

interface ExecuteOptions {
  /**
   * Options passed to `fetch()` – such as Next.js cache controls
   * Example: { next: { tags: ['horseCategories'] } } or { cache: 'no-store' }
   */
  fetchOptions?: RequestInit & {
    next?: { revalidate?: number; tags?: string[] };
  };
}

/**
 * Executes a typed GraphQL operation.
 * Works in both Next.js server and client components.
 */
export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables,
  options?: ExecuteOptions
) {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    ...options?.fetchOptions, // ✅ supports Next.js caching options
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const result = (await response.json()) as { data?: TResult; errors?: any[] };

  if (result.errors?.length) {
    console.error('GraphQL errors:', result.errors);
    throw new Error(result.errors[0].message || 'GraphQL error');
  }

  return result;
}

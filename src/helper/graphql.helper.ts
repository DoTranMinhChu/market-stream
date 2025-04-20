export class GraphqlHelper {
  static async fetchGraphQL<T>(
    url: string,
    query: string,
    variables: Record<string, any> = {}
  ): Promise<T> {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    if (!resp.ok) {
      throw new Error(`GraphQL error: ${resp.status} ${resp.statusText}`);
    }
    const { data, errors } = await resp.json();
    if (errors && errors.length) {
      throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
    }
    return data;
  }
}

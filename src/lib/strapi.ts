interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const STRAPI_URL = "http://172.16.20.50:1337";
  const token =
    "cf62e0c441430c1c44003563e8ac3b69620094393d0b9d445ee6e69a0b4a8be604042f670d26d327da5359b283fcafa14df981ee2a3d18a6ef7a29d56ce8cfac9d723025a029d3a54c265875efe79bdfca797e80e572c86ac05f5f60591d0a4a2d1c6c39841dc4a74ec2af82362b1b0afcbe0aec734369814b86b0c7833df940";

  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    });

    let data = await res.json();

    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    if (wrappedByList) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.log(error);
    return [] as T;
  }
}

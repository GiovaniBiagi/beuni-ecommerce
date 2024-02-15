export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
}

export type Headers = {
  [key: string]: string;
};

export type Method = "POST" | "GET" | "PUT" | "DELETE";

export type Fetch<B> = {
  body?: B;
  headers?: Headers;
  method?: Method;
  endpoint: string;
  withAuthorization?: boolean;
  individualRequest?: boolean;
};

export type FetchERROR = {
	errors: any[]
}

export interface FetchResponse<T, E> {
	data: T
	error: string | string[] | null | E
}

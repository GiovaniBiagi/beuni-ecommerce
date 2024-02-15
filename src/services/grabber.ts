import { ENV } from "_/env";
import type { Fetch } from "_/types";

const REVALIDATE = 3600;

export const grabber = async <R, O>(options: Fetch<O>): Promise<R> => {
  try {
    const url = new URL(`${ENV.NEXT_PUBLIC_API_URL}${options.endpoint}`);
    const requestArgs = {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options.headers ?? {}),
      },
      next: {
        revalidate: options.individualRequest ? 0 : REVALIDATE,
        cache: options.individualRequest ? "no-store" : "force-cache",
      },
    };
    const response = await fetch(url.href, requestArgs);
    const data = await response.json();
    return data;
  } catch (error) {
    throw {
      error,
      endpoint: `${ENV.NEXT_PUBLIC_API_URL}${options.endpoint}`,
    };
  }
};

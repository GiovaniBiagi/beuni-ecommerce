import { productsFetch } from "_/services/products/products.fetch";
import { ProductsSchema } from "_/services/products/products.schema";

export type FetchParams = {
  perPage?: string;
  page?: string;
  q?: string;
  sortBy?: string;
  min?: string;
  max?: string;
  category?: string;
};

export async function getProducts(params?: FetchParams) {
  const searchParams = new URLSearchParams(params).toString();

  return await productsFetch({
    endpoint: params ? `/products?${searchParams}` : "/products",
    method: "GET",
    schema: ProductsSchema,
  });
}

export async function getProductById(id: string) {
  return await productsFetch({
    endpoint: `/products/${id}`,
    method: "GET",
    schema: ProductsSchema,
  });
}

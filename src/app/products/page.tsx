import ProductList from "_/templates/productList";
import { type FetchParams, getProducts } from "_/services/products/actions";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: FetchParams;
}) {
  const products = await getProducts(searchParams);

  return <ProductList initialProducts={products.data.products} />;
}

import { siteConfig } from "_/config/site";
import ProductDetails from "_/templates/product";
import { getProductById } from "_/services/products/actions";
import { Suspense } from "react";
import { ProductDetailsSkeleton } from "./skeleton";

interface ProductPageParams {
  params: {
    productId: string;
  };
}

export const runtime = "edge";

export async function generateMetadata({ params }: ProductPageParams) {
  const product = await getProductById(params.productId);

  if (!product.data.product) {
    return {
      title: "Página não encontrada",
      description: "Página não encontrada",
      url: `${siteConfig.url}/product/${params.productId}`,
    };
  }

  return {
    title: product.data.product.name,
    description: product.data.product.description,
    image: product.data.product.image[0].url,
    url: `${siteConfig.url}/product/${params.productId}`,
  };
}

export default async function ProductPage({ params }: ProductPageParams) {
  const id = params.productId;

  const product = await getProductById(id);

  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetails product={product.data.product} />
    </Suspense>
  );
}

import { getProducts } from "_/services/products/actions";
import { Product } from "_/services/products/products.schema";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts({
    perPage: "100",
  });

  const productsRoutes = products.data.products.map((product: Product) => ({
    url: `https://localhost:3000/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  }));

  return [
    {
      url: "https://localhost:3000/products",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    ...productsRoutes,
  ];
}

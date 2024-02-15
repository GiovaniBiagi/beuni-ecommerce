"use client";

import { ProductCard } from "_/components/ui/product-card";
import { getProducts } from "_/services/products/actions";
import { Product, Products } from "_/services/products/products.schema";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "_/components/ui/loading-spinner";

export default function ProductList({ initialProducts }: Products) {
  const [products, setProducts] = useState<Products>([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const loadMoreProducts = async () => {
    const newProducts = await getProducts({ page: (page + 1).toString() });
    setProducts([...products, ...newProducts.data.products]);
    setPage(page + 1);
  };

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <div className="grid grid-cols-1 gap-6 w-full h-full lg:grid-cols-2 xl:grid-cols-3 mt-6">
      {products?.map((product: Product, index: number) => {
        product.total_stock = index < 20 ? 10 : 0;
        return <ProductCard key={product.id} {...product} />;
      })}
      <div
        ref={ref}
        className="col-span-full flex items-center justify-center w-full h-12 rounded-lg"
      >
        {inView ? (
          <LoadingSpinner />
        ) : (
          "Role a página para carregar mais produtos"
        )}
      </div>
    </div>
  );
}

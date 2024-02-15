"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { ShoppingCart, Truck, Wallet } from "lucide-react";

import { useCartStore } from "_/stores/use-cart-store";
import { type Product as ProductProps } from "_/services/products/products.schema";
import { formatCurrency } from "_/utils/format-currency";

import { Badge } from "_/components/ui/badge";
import { Button } from "_/components/ui/button";
import { ColorSelector } from "_/components/ui/color-selector";
import { Rating } from "_/components/ui/rating";
import { OutOfStockContactDialog } from "_/components/ui/out-of-stock-contact-dialog";

export default function ProductDetails({ product }: { product: ProductProps }) {
  product.total_stock = product.id === 19 ? 10 : 0;
  const { addToCart } = useCartStore();

  return (
    <div className="grid grid-rows-[50vh,_1fr] md:grid-rows-1 md:grid-cols-2 md:min-h-1/2 md:h-[92vh] p-8 md:py-10 md:px-28 gap-x-16 overflow-auto">
      <div className="relative">
        <Image
          className="rounded-lg"
          src={product.image[0].url}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="w-full mt-4 flex flex-col justify-evenly">
        <div className="space-y-4">
          <div className="flex flex-col justify-between space-y-4">
            {product.hasFreeShipping ? (
              <Badge variant="success" className="gap-x-2 text-md w-fit">
                Frete grátis
                <Truck className="stroke-2 w-5 h-5 text-green-500" />
              </Badge>
            ) : null}
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <Rating rating={product.rating} />
          </div>
          <h2 className="text-2xl font-bold">
            {formatCurrency(product.price)}
          </h2>
          <p className="text-sm text-muted-foreground">
            <Balancer>{product.description}</Balancer>
          </p>
        </div>
        <div className="space-y-12">
          <ColorSelector colorOptions={product.colorOptions} />

          {product.total_stock > 0 ? (
            <div className="flex justify-start gap-x-8">
              <Button
                className="w-auto"
                variant="secondary"
                onClick={() => addToCart(product)}
              >
                Adicionar ao carrinho
                <ShoppingCart className="w-4 h-4 ml-2" />
              </Button>
              <Button className="w-auto">
                Comprar agora <Wallet className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ) : (
            <div className="w-full text-center space-y-8">
              <h3 className="text-lg text-gray-500/75 font-bold">
                Produto indisponível no momento
              </h3>
              <OutOfStockContactDialog />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

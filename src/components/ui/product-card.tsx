"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Truck } from "lucide-react";

import { Card } from "./card";
import { Rating } from "./rating";
import { AnimatedIconButton } from "./animated-icon-button";
import { Badge } from "./badge";
import { cn } from "_/lib/utils";
import { Product } from "_/services/products/products.schema";
import { formatCurrency } from "_/utils/format-currency";
import { useWishListStore } from "_/stores/use-wish-list";
import { useCartStore } from "_/stores/use-cart-store";
import { Button } from "./button";
import { forwardRef } from "react";
import Balancer from "react-wrap-balancer";

export interface ProductCardProps extends Product {
  rootClassName?: string;
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ rootClassName, ...product }, ref) => {
    const { addWish, removeWish, wishes } = useWishListStore();
    const { addToCart } = useCartStore();

    const productFromWishList = wishes.find((w) => w.id === product.id);

    return (
      <Card.Root
        ref={ref}
        className={cn(
          "flex flex-col justify-between relative min-w-[18.75rem]",
          rootClassName
        )}
      >
        <div>
          <div className="absolute right-2 top-2 z-10">
            <AnimatedIconButton
              onClick={() =>
                productFromWishList ? removeWish(product.id) : addWish(product)
              }
            >
              {(isActive) => (
                <Heart
                  className={`w-6 h-6 ${
                    isActive || Boolean(productFromWishList)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-500"
                  }`}
                />
              )}
            </AnimatedIconButton>
          </div>
          <Link href={`/product/${product.id}`}>
            <Card.Media className="relative w-full h-[300px]">
              <Image
                src={product.image[0].url}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
                style={{
                  objectFit: "cover",
                  borderTopRightRadius: "0.5rem",
                  borderTopLeftRadius: "0.5rem",
                }}
              />
            </Card.Media>
          </Link>
          <Card.Header>
            <div className="space-y-2">
              {product.hasFreeShipping && (
                <Badge variant="success" className="gap-x-2">
                  Frete grátis
                  <Truck className="stroke-2 w-4 h-4 text-green-500" />
                </Badge>
              )}
              <Card.Title className="text-xl">{product.name}</Card.Title>
              <Rating rating={product.rating} size="0.8em" />
            </div>

            <Card.Description>
              <Balancer>{product.description}</Balancer>
              <div className="mt-2">
                <p className="font-semibold text-base">
                  <Balancer>Fornecido por:</Balancer>
                </p>
                <Balancer>{product.product?.["Nome do fornecedor"]}</Balancer>
              </div>
            </Card.Description>
          </Card.Header>
        </div>
        <div>
          <Card.Content>
            <p className="text-lg font-bold">{formatCurrency(product.price)}</p>
          </Card.Content>
          <div>
            {product.total_stock > 0 ? (
              <Card.Footer className="flex justify-end">
                <Button onClick={() => addToCart(product)}>
                  Adicionar ao carrinho
                </Button>
              </Card.Footer>
            ) : (
              <Card.Footer>
                <p>Produto indisponível</p>
              </Card.Footer>
            )}
          </div>
        </div>
      </Card.Root>
    );
  }
);

ProductCard.displayName = "ProductCard";

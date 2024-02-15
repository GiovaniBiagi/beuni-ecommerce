"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, X } from "lucide-react";

import { Sheet } from "./sheet";
import { useWishListStore } from "_/stores/use-wish-list";
import { Card } from "./card";

interface ProductsOnWishListProps {
  numberOfProducts: number;
}

export const ProductsOnWishList = ({
  numberOfProducts,
}: ProductsOnWishListProps) => (
  <div className="absolute top-0 right-0 bg-brandPrimary text-white text-xs rounded-full w-4 h-4 flex justify-center items-center">
    {numberOfProducts}
  </div>
);

export function WishList() {
  const { wishes, removeWish } = useWishListStore();

  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <div className="relative w-fit px-2 py-1">
          <Heart />
          {wishes.length > 0 ? (
            <ProductsOnWishList numberOfProducts={wishes.length} />
          ) : null}
        </div>
      </Sheet.Trigger>
      <Sheet.Content>
        <div className="py-4">
          <h2 className="text-lg font-bold mb-4">Lista de desejos</h2>
          {wishes.length > 0 ? (
            <ul className="space-y-4">
              {wishes.map((wish) => (
                <Sheet.Close key={wish.id} asChild>
                  <Card.Root
                    key={wish.id}
                    className="flex space-x-2 relative pr-6"
                  >
                    <Link
                      href={`/product/${wish.id}`}
                      className="flex space-x-2"
                    >
                      <Card.Media className="p-1">
                        <Image
                          src={wish.image[0].url}
                          alt={wish.name}
                          width={80}
                          height={80}
                          className="rounded-md"
                        />
                      </Card.Media>
                      <div className="flex flex-col justify-evenly">
                        <h1 className="font-bold text-sm text-wrap">
                          {wish.name}
                        </h1>
                        <h2 className="text-xs text-gray-500/75">
                          {wish.total_stock > 0
                            ? `Quantidade em estoque: ${wish.total_stock}`
                            : "Produto indisponível"}
                        </h2>
                      </div>
                    </Link>
                    <button
                      onClick={() => removeWish(wish.id)}
                      className="absolute right-1 top-1"
                    >
                      <X className="w-4 h4" />
                    </button>
                  </Card.Root>
                </Sheet.Close>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">
              Nenhum produto na lista de desejos
            </p>
          )}
        </div>
      </Sheet.Content>
    </Sheet.Root>
  );
}

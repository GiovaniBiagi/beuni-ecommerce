"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, X } from "lucide-react";

import { useCartStore } from "_/stores/use-cart-store";
import { Sheet } from "./sheet";
import { Card } from "./card";
import { formatCurrency } from "_/utils/format-currency";
import { Button } from "./button";

interface ProductsOnCartProps {
  numberOfProducts: number;
}

export function ProductsOnCart({ numberOfProducts }: ProductsOnCartProps) {
  return (
    <div className="absolute top-0 right-0 bg-brandPrimary text-white text-xs rounded-full w-4 h-4 flex justify-center items-center">
      {numberOfProducts}
    </div>
  );
}

export function Cart() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <div className="relative w-fit px-2 py-1">
          <ShoppingCart />
          {cart.length > 0 ? (
            <ProductsOnCart numberOfProducts={cart.length} />
          ) : null}
        </div>
      </Sheet.Trigger>
      <Sheet.Content className="overflow-auto">
        <div className="py-4">
          <h2 className="text-lg font-bold mb-4">Lista de compras</h2>
          {cart.length > 0 ? (
            <>
              <ul className="space-y-4 overflow-auto">
                {cart.map((product) => (
                  <Sheet.Close key={product.id} asChild>
                    <Card.Root
                      key={product.id}
                      className="flex space-x-2 relative pr-6"
                    >
                      <Link
                        href={`/product/${product.id}`}
                        className="flex space-x-2"
                      >
                        <Card.Media className="p-1">
                          <Image
                            src={product.image[0].url}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="rounded-md"
                          />
                        </Card.Media>
                        <div className="flex flex-col justify-evenly">
                          <h1 className="font-bold text-sm text-wrap">
                            {product.name}
                          </h1>
                          <h2 className="text-xs text-gray-500/75">
                            {product.total_stock > 0
                              ? `Quantidade: ${product.quantity}`
                              : "Produto indisponível"}
                          </h2>
                        </div>
                      </Link>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="absolute right-1 top-1"
                      >
                        <X className="w-4 h4" />
                      </button>
                    </Card.Root>
                  </Sheet.Close>
                ))}
              </ul>
              <div className="mt-2 bottom-6 space-y-4 ">
                <h1 className="font-black text-xl">
                  {formatCurrency(
                    cart.reduce(
                      (acc, product) => acc + product.price * product.quantity,
                      0
                    )
                  )}
                </h1>
                <Button className="w-full">Finalizar compra</Button>
              </div>
            </>
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

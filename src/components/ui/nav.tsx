"use client";

import Link from "next/link";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";
import { Filters } from "./filters-form";
import { usePathname, useSearchParams } from "next/navigation";
import { MobileFilters } from "./mobile-filters";

interface NavProps {
  categories: any[];
}

export function Nav({ categories }: NavProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const generateCategoryLink = (category: string) => {
    const params = new URLSearchParams(
      Array.from(searchParams?.entries() || [])
    );
    params.set("category", category);

    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className="md:hidden flex w-full px-8 pt-4">
        <MobileFilters />
      </div>
      <div className="flex-col gap-4 p-4 h-full max-h-[800px] items-stretch justify-items-center border-r hidden md:flex">
        <div>
          <h4 className="font-semibold">Categorias</h4>
          <ScrollArea className="h-52 rounded-md mt-2">
            <div className="space-y-2 flex flex-col">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  className="text-sm bg-transparent text-left"
                  href={generateCategoryLink(category.id)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
        <Separator />
        <Filters />
      </div>
    </>
  );
}

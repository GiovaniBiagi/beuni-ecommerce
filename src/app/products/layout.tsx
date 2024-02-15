import { Suspense } from "react";

import { getCategories } from "_/services/categories/actions";

import { Nav } from "_/components/ui/nav";
import { ProductsSkeleton } from "./skeleton";

import "_/styles/globals.css";

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();

  return (
    <>
      <Nav categories={categories.data} />
      <div className="container overflow-auto">{children}</div>
    </>
  );
}

export default async function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <Layout>{children}</Layout>
    </Suspense>
  );
}

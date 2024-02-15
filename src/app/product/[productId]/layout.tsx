export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="col-span-full">{children}</section>;
}

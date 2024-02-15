import { Skeleton } from "_/components/ui/skeleton";

const ColorSelectorSkeleton = () => (
  <div className="flex justify-evenly md:justify-normal md:max-w-48 gap-2.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
    ))}
  </div>
);

const ImageSkeleton = () => (
  <div className="relative">
    <Skeleton className="w-1/2 h-screen rounded-lg" />
  </div>
);

const RatingSkeleton = () => <Skeleton className="w-12 h-6" />;

const TitleSkeleton = () => <Skeleton className="h-12 w-16" />;

const PriceSkeleton = () => <Skeleton className="h-8 w-16" />;

const DescriptionSkeleton = () => <Skeleton className="h-24 w-full" />;

const FooterSkeleton = () => (
  <div className="flex justify-between">
    <Skeleton className="h-8 w-24" />
    <Skeleton className="h-8 w-24" />
  </div>
);

export function ProductDetailsSkeleton() {
  return (
    <section className="col-span-full">
      <div className="grid grid-rows-[50vh,_1fr] md:grid-rows-1 md:grid-cols-2 md:min-h-1/2 md:h-[92vh] p-8 md:py-10 md:px-28 gap-x-16 overflow-auto">
        <ImageSkeleton />

        <div className="w-full mt-4 flex flex-col justify-evenly">
          <div className="space-y-4">
            <div className="flex flex-wrap justify-between space-y-4">
              <TitleSkeleton />
              <RatingSkeleton />
            </div>
            <PriceSkeleton />
            <DescriptionSkeleton />
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <label className="text-lg font-bold">Opções de cor</label>
              <ColorSelectorSkeleton />
            </div>

            <div className="flex justify-start gap-x-8">
              <FooterSkeleton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from "_/components/ui/card";
import { Separator } from "_/components/ui/separator";
import { Skeleton } from "_/components/ui/skeleton";

export function ProductsSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-4 md:p-4 px-8 py-4 border-r">
        <Skeleton className="md:h-6 h-10 rounded-md animate-pulse" />
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton
            key={i}
            className="hidden md:block md:h-4 rounded-md animate-pulse"
          />
        ))}
        <Separator className="md:block hidden" />
        <Skeleton className="md:block hidden md:h-6 rounded-md animate-pulse" />
        <Skeleton className="md:block hidden md:h-8 rounded-md animate-pulse" />
        <Skeleton className="md:block hidden md:h-6 rounded-md animate-pulse" />
        <Skeleton className="md:block hidden md:h-8 rounded-md animate-pulse" />
      </div>
      <div className="container overflow-auto grid grid-cols-1 gap-6 w-full h-full lg:grid-cols-2 xl:grid-cols-3 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-between relative min-w-[18.75rem]"
          >
            <Card.Root>
              <Skeleton className="h-80 animate-pulse" />
              <div className="p-4">
                <Skeleton className="h-12 animate-pulse" />
                <Skeleton className="h-4 w-20 mt-2 animate-pulse" />
                <Skeleton className="h-20 mt-2 animate-pulse" />
                <div className="flex flex-col">
                  <Skeleton className="h-4 w-20 mt-10 animate-pulse" />
                  <Skeleton className="h-10 w-40 mt-10 animate-pulse self-end" />
                </div>
              </div>
            </Card.Root>
          </div>
        ))}
      </div>
    </>
  );
}

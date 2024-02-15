import { cn } from "_/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center md:border-b md:border-r md:px-6", className)}>
      <span className="font-medium text-brandSecondary text-[2em]">be</span>
      <span className="font-black text-brandPrimary text-[2em]">uni</span>
    </div>
  );
}

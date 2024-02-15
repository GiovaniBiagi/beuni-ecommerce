import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  size?: string;
}

export function Rating({ rating, size }: RatingProps) {
  return (
    <div className="flex items-center space-x-[0.125rem]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size ?? "1.5em"}
          className={
            index < rating
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-500 stroke-1"
          }
        />
      ))}
    </div>
  );
}

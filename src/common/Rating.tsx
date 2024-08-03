import { StarIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

const sizes = {
  md: "w-5 h-5",
  sm: "w-4 h-4",
  lg: "w-6 h-6",
};

type RatingProps = {
  stars: number;
  rate: number;
  size: "md" | "sm" | "lg";
};

const Rating: FC<RatingProps> = ({ stars, rate, size }) => {
  const fillStars = Array.from({ length: rate }, (_, x) => x + 1);
  const emptyStars = Array.from({ length: stars - rate }, (_, x) => x + 1);
  return (
    <div className="flex items-center">
      <p className="flex items-center text-blue-500">
      {fillStars.map((i) => {
        return (
          <StarIcon key={i} style={{ color: "gold", stroke: "rgba(148,163,184,0.1)" }} className={`${sizes[size]} `} />
        );
      })}
    </p>
    <p className="flex items-center text-blue-500">
      {emptyStars.map((i) => {
        return (
          <StarIcon key={i} style={{ color: "white", stroke: "rgba(148,163,184,0.3)" }}  className={`${sizes[size]}`} />
        );
      })}
    </p>
    </div>
  );
};

export default Rating;

import { FC } from "react";
import { TileProps } from "../types/global";
import {
  Heart,
  Star,
  CircleDot,
  Square,
  Triangle,
  Diamond,
  Sun,
  Moon,
  Cloud,
  Zap,
  Umbrella,
  Sparkles,
  Coffee,
  Music,
  Camera,
  Plane,
  Car,
  Bike,
} from "lucide-react";

const iconMap = {
  Heart,
  Star,
  CircleDot,
  Square,
  Triangle,
  Diamond,
  Sun,
  Moon,
  Cloud,
  Zap,
  Umbrella,
  Sparkles,
  Coffee,
  Music,
  Camera,
  Plane,
  Car,
  Bike,
};

const Tile: FC<TileProps> = ({ tile, onClick }) => {
  const isNumber = !isNaN(Number(tile.value));
  const IconComponent = isNumber
    ? null
    : iconMap[tile.value as keyof typeof iconMap];

  return (
    <button
      onClick={onClick}
      disabled={tile.isMatched || tile.isFlipped}
      className="relative aspect-square w-full"
      aria-label={`Memory tile ${tile.value}`}
    >
      <div
        className={`
          tile-flip w-full h-full
          ${tile.isFlipped || tile.isMatched ? "flipped" : ""}
        `}
      >
        <div
          className="tile-front rounded-xl bg-white border-2 border-gray-100 shadow-sm
          hover:border-blue-200 hover:shadow-md transition-all duration-200
          flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
        <div
          className={`
          tile-back rounded-xl
          ${
            tile.isMatched
              ? "bg-green-50 border-2 border-green-200"
              : "bg-white border-2 border-blue-200"
          }
          shadow-md flex items-center justify-center
        `}
        >
          {isNumber ? (
            <span className="text-2xl font-medium text-gray-700">
              {tile.value}
            </span>
          ) : (
            IconComponent && (
              <IconComponent
                className={`w-8 h-8 ${
                  tile.isMatched ? "text-green-500" : "text-blue-500"
                }`}
              />
            )
          )}
        </div>
      </div>
    </button>
  );
};

Tile.displayName = "Tile";

export default Tile;

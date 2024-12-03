import { GridSize, Theme, Tile } from "../types/game";
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

const icons = [
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
];

export const generateTiles = (theme: Theme, gridSize: GridSize): Tile[] => {
  const pairCount = gridSize === "4x4" ? 8 : 18;
  const values =
    theme === "numbers"
      ? Array.from({ length: pairCount }, (_, i) => String(i + 1))
      : icons
          .slice(0, pairCount)
          .map((Icon, i) => Icon.displayName || String(i));

  const pairs = [...values, ...values];
  const shuffled = pairs.sort(() => Math.random() - 0.5);

  return shuffled.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
};

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

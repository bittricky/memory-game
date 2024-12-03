export type Theme = "numbers" | "icons";
export type GridSize = "4x4" | "6x6";
export type GameMode = "single" | "multiplayer";

export interface Player {
  id: number;
  name: string;
  score: number;
  moves: number;
}

export interface GameState {
  theme: Theme;
  gridSize: GridSize;
  gameMode: GameMode;
  players: Player[];
  currentPlayer: number;
  timeElapsed: number;
  isGameOver: boolean;
}

export interface Tile {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

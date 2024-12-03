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

export interface GameSetupProps {
  onStartGame: (config: {
    theme: Theme;
    gridSize: GridSize;
    gameMode: GameMode;
    playerCount: number;
  }) => void;
}

interface GameControlsProps {
  players: Player[];
  currentPlayer: number;
  timeElapsed: number;
  onRestart: () => void;
  onNewGame: () => void;
}

export interface Tile {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameStore {
  tiles: Tile[];
  flippedTiles: number[];
  players: Player[];
  currentPlayer: number;
  timeElapsed: number;
  isGameOver: boolean;
  theme: Theme | null;
  gridSize: GridSize | null;
  gameMode: GameMode | null;
  playerCount: number;
  gameStarted: boolean;

  initializeGame: (config: {
    theme: Theme;
    gridSize: GridSize;
    gameMode: GameMode;
    playerCount: number;
  }) => void;
  flipTile: (tileId: number) => void;
  incrementTime: () => void;
  resetGame: () => void;
  startNewGame: () => void;
}

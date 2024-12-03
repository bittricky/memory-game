import { create } from "zustand";
import {
  GameInterface,
  Theme,
  GridSize,
  GameMode,
  Player,
  Tile,
} from "../types/global";
import { generateTiles } from "../utils/gameUtils";

export const useGameStore = create<GameInterface>((set, get) => ({
  tiles: [],
  flippedTiles: [],
  players: [],
  currentPlayer: 0,
  timeElapsed: 0,
  isGameOver: false,
  theme: null,
  gridSize: null,
  gameMode: null,
  playerCount: 1,
  gameStarted: false,

  initializeGame: (config) => {
    const initialTiles = generateTiles(config.theme, config.gridSize);
    const initialPlayers = Array.from(
      { length: config.playerCount },
      (_, i) => ({
        id: i,
        name: `Player ${i + 1}`,
        score: 0,
        moves: 0,
      })
    );

    set({
      tiles: initialTiles,
      players: initialPlayers,
      theme: config.theme,
      gridSize: config.gridSize,
      gameMode: config.gameMode,
      playerCount: config.playerCount,
      gameStarted: true,
      currentPlayer: 0,
      timeElapsed: 0,
      isGameOver: false,
      flippedTiles: [],
    });
  },

  startNewGame: () =>
    set({
      gameStarted: false,
      theme: null,
      gridSize: null,
      gameMode: null,
      playerCount: 1,
      tiles: [],
      players: [],
      currentPlayer: 0,
      timeElapsed: 0,
      isGameOver: false,
      flippedTiles: [],
    }),
}));

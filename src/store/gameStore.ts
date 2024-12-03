import { create } from "zustand";
import { GameStore } from "../types/global";
import { generateTiles } from "../utils/gameUtils";

export const useGameStore = create<GameStore>((set, get) => ({
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

  flipTile: (tileId) => {
    const { tiles, flippedTiles, currentPlayer } = get();

    if (flippedTiles.length === 2) return;

    set((state) => ({
      tiles: state.tiles.map((tile) =>
        tile.id === tileId ? { ...tile, isFlipped: true } : tile
      ),
      flippedTiles: [...state.flippedTiles, tileId],
    }));

    if (flippedTiles.length === 1) {
      const [firstTileId] = flippedTiles;
      const firstTile = tiles.find((t) => t.id === firstTileId);
      const secondTile = tiles.find((t) => t.id === tileId);

      if (firstTile && secondTile && firstTile.value === secondTile.value) {
        setTimeout(() => {
          set((state) => ({
            tiles: state.tiles.map((tile) =>
              tile.id === firstTileId || tile.id === tileId
                ? { ...tile, isMatched: true }
                : tile
            ),
            players: state.players.map((player, idx) =>
              idx === currentPlayer
                ? { ...player, score: player.score + 1 }
                : player
            ),
            flippedTiles: [],
          }));
        }, 500);
      } else {
        setTimeout(() => {
          set((state) => ({
            tiles: state.tiles.map((tile) =>
              tile.id === firstTileId || tile.id === tileId
                ? { ...tile, isFlipped: false }
                : tile
            ),
            currentPlayer: (state.currentPlayer + 1) % state.players.length,
            flippedTiles: [],
          }));
        }, 1000);
      }

      set((state) => ({
        players: state.players.map((player, idx) =>
          idx === currentPlayer
            ? { ...player, moves: player.moves + 1 }
            : player
        ),
      }));
    }
  },

  incrementTime: () => set((state) => ({ timeElapsed: state.timeElapsed + 1 })),

  resetGame: () => {
    const { theme, gridSize, gameMode, playerCount } = get();
    if (theme && gridSize && gameMode) {
      get().initializeGame({ theme, gridSize, gameMode, playerCount });
    }
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

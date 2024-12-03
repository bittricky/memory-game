import React from "react";

import { GameSetup, GameControls, GameBoard } from "./components";
import { useGameTimer } from "./hooks/useGameTimer";
import { useGameStore } from "./store/gameStore";

function App() {
  const {
    gameStarted,
    tiles,
    players,
    currentPlayer,
    timeElapsed,
    gridSize,
    initializeGame,
    flipTile,
    resetGame,
    startNewGame,
  } = useGameStore();

  useGameTimer();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Memory Game</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {!gameStarted ? (
          <GameSetup onStartGame={initializeGame} />
        ) : gridSize ? (
          <>
            <GameControls
              players={players}
              currentPlayer={currentPlayer}
              timeElapsed={timeElapsed}
              onRestart={resetGame}
              onNewGame={startNewGame}
            />
            <GameBoard
              tiles={tiles}
              gridSize={gridSize}
              onTileClick={flipTile}
            />
          </>
        ) : null}
      </main>
    </div>
  );
}

export default App;

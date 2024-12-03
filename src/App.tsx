import React from "react";

import { GameSetup, GameControls } from "./components";
import { useGameStore } from "./store/gameStore";

function App() {
  const {
    gameStarted,
    tiles,
    players,
    timeElapsed,
    gridSize,
    initializeGame,
    startNewGame,
  } = useGameStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Memory Game</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* TODO: Add game content here */}
        {!gameStarted ? (
          <GameSetup onStartGame={initializeGame} />
        ) : gridSize ? (
          // TODO: Add game Controls and Board here here
          <>
            <GameControls
              players={players}
              currentPlayer={0}
              timeElapsed={timeElapsed}
              onRestart={startNewGame}
              onNewGame={startNewGame}
            />
          </>
        ) : null}
      </main>
    </div>
  );
}

export default App;

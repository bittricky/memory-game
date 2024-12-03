import { FC, useState } from "react";
import { Grid, Users, Hash, Shapes, Play } from "lucide-react";
import { GameSetupProps, Theme, GridSize, GameMode } from "../types/global";

const GameSetup: FC<GameSetupProps> = ({ onStartGame }) => {
  const [theme, setTheme] = useState<Theme>("numbers");
  const [gridSize, setGridSize] = useState<GridSize>("4x4");
  const [gameMode, setGameMode] = useState<GameMode>("single");
  const [playerCount, setPlayerCount] = useState<number>(2);

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Game Setup</h2>
          <p className="mt-2 text-gray-500">Customize your memory game</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Theme
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setTheme("numbers")}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                  ${
                    theme === "numbers"
                      ? "bg-purple-50 border-purple-200"
                      : "bg-white border-gray-100 hover:border-purple-200"
                  }
                `}
              >
                <Hash
                  className={`w-5 h-5 ${
                    theme === "numbers" ? "text-purple-500" : "text-gray-400"
                  }`}
                />
                <span>Numbers</span>
              </button>
              <button
                onClick={() => setTheme("icons")}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                  ${
                    theme === "icons"
                      ? "bg-purple-50 border-purple-200"
                      : "bg-white border-gray-100 hover:border-purple-200"
                  }
                `}
              >
                <Shapes
                  className={`w-5 h-5 ${
                    theme === "icons" ? "text-purple-500" : "text-gray-400"
                  }`}
                />
                <span>Icons</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Grid Size
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setGridSize("4x4")}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                  ${
                    gridSize === "4x4"
                      ? "bg-purple-50 border-purple-200"
                      : "bg-white border-gray-100 hover:border-purple-200"
                  }
                `}
              >
                <Grid
                  className={`w-5 h-5 ${
                    gridSize === "4x4" ? "text-purple-500" : "text-gray-400"
                  }`}
                />
                <span>4 x 4</span>
              </button>
              <button
                onClick={() => setGridSize("6x6")}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                  ${
                    gridSize === "6x6"
                      ? "bg-purple-50 border-purple-200"
                      : "bg-white border-gray-100 hover:border-purple-200"
                  }
                `}
              >
                <Grid
                  className={`w-5 h-5 ${
                    gridSize === "6x6" ? "text-purple-500" : "text-gray-400"
                  }`}
                />
                <span>6 x 6</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Game Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setGameMode("single");
                  setPlayerCount(1);
                }}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                  ${
                    gameMode === "single"
                      ? "bg-purple-50 border-purple-200"
                      : "bg-white border-gray-100 hover:border-purple-200"
                  }
                `}
              >
                <Users
                  className={`w-5 h-5 ${
                    gameMode === "single" ? "text-purple-500" : "text-gray-400"
                  }`}
                />
                <span>Single</span>
              </button>
              <button
                onClick={() => {
                  setGameMode("multiplayer");
                  setPlayerCount(2);
                }}
                className={`
                  flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200
                  ${
                    gameMode === "multiplayer"
                      ? "bg-purple-50 border-purple-200"
                      : "bg-white border-gray-100 hover:border-purple-200"
                  }
                `}
              >
                <Users
                  className={`w-5 h-5 ${
                    gameMode === "multiplayer"
                      ? "text-purple-500"
                      : "text-gray-400"
                  }`}
                />
                <span>Multi</span>
              </button>
            </div>
          </div>

          {gameMode === "multiplayer" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Number of Players
              </label>
              <select
                value={playerCount}
                onChange={(e) => setPlayerCount(Number(e.target.value))}
                className="w-full p-4 rounded-xl border-2 border-gray-100 
                  focus:border-purple-200 focus:ring-2 focus:ring-purple-100 
                  transition-all duration-200"
              >
                {[2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} Players
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <button
          onClick={() =>
            onStartGame({ theme, gridSize, gameMode, playerCount })
          }
          className="w-full flex items-center justify-center gap-2 p-4 
            bg-purple-50 border-2 border-purple-200 rounded-xl
            hover:bg-purple-100 transition-all duration-200"
        >
          <Play className="w-5 h-5" />
          <span>Start Game</span>
        </button>
      </div>
    </div>
  );
};

GameSetup.displayName = "GameSetup";

export default GameSetup;

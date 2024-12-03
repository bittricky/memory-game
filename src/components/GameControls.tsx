import { FC } from "react";
import { Timer, RotateCcw, Plus } from "lucide-react";

import { formatTime } from "../utils/gameUtils";
import { GameControlsProps } from "../types/global";

const GameControls: FC<GameControlsProps> = ({
  players,
  currentPlayer,
  timeElapsed,
  onRestart,
  onNewGame,
}) => {
  return (
    <div className="mb-8 space-y-6">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`
              px-6 py-4 rounded-xl transition-all duration-200
              ${
                currentPlayer === index
                  ? "bg-purple-50 border-2 border-purple-200 shadow-sm"
                  : "bg-white border-2 border-gray-100"
              }
            `}
          >
            <h3 className="font-medium text-sm text-gray-500 mb-1">
              {player.name}
            </h3>
            <div className="space-y-1">
              <p className="text-2xl font-semibold">{player.score}</p>
              <p className="text-sm text-gray-500">{player.moves} moves</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border-2 border-gray-100">
          <Timer className="w-5 h-5 text-gray-400" />
          <span className="font-mono text-xl">{formatTime(timeElapsed)}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 
              rounded-xl hover:border-purple-200 hover:shadow-sm transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Restart</span>
          </button>

          <button
            onClick={onNewGame}
            className="flex items-center gap-2 px-6 py-3 bg-purple-50 border-2 border-purple-200 
              rounded-xl hover:bg-purple-100 hover:shadow-sm transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>New Game</span>
          </button>
        </div>
      </div>
    </div>
  );
};

GameControls.displayName = "GameControls";

export default GameControls;

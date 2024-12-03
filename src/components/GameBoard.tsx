import { FC } from "react";
import { GameBoardProps,Tile as TileType } from "../types/global";

const GameBoard: FC<GameBoardProps> = ({ tiles, gridSize, onTileClick }) => {
  const gridClass = gridSize === "4x4" ? "grid-cols-4" : "grid-cols-6";

  return (
    <div className={`grid gap-4 ${gridClass} max-w-4xl mx-auto p-4`}>
      {tiles.map((tile) => (
        // TODO: Add tile component here
      ))}
    </div>
  );
};

GameBoard.displayName = "GameBoard";

export default GameBoard;

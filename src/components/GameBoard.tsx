import { FC } from "react";
import { GameBoardProps } from "../types/global";
import Tile from "./Tile";

const GameBoard: FC<GameBoardProps> = ({ tiles, gridSize, onTileClick }) => {
  const gridClass = gridSize === "4x4" ? "grid-cols-4" : "grid-cols-6";

  return (
    <div className={`grid gap-4 ${gridClass} max-w-4xl mx-auto p-4`}>
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} onClick={() => onTileClick(tile.id)} />
      ))}
    </div>
  );
};

GameBoard.displayName = "GameBoard";

export default GameBoard;

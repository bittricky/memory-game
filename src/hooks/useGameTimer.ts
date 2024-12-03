import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

export function useGameTimer() {
  const { gameStarted, isGameOver, incrementTime } = useGameStore();

  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const timer = setInterval(() => {
      incrementTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, isGameOver, incrementTime]);
}

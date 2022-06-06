import { useEffect } from "react";
import { BoardType, ItemBoardType } from "./types/boardTypes";

const useAi = ({
  prevMove,
  enable,
  board,
  onCellClick,
}: {
  prevMove: ItemBoardType;
  enable: boolean;
  board: BoardType;
  onCellClick: (index: number) => void;
}) => {
  useEffect(() => {
    // if (prevMove === "x" && enable) getPos(board, onCellClick);
  }, [prevMove]);
};
export default useAi;

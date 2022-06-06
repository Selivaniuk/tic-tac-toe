import { ItemBoardType, BoardType } from "./types/boardTypes";
export const INITIAL_BOARD: BoardType = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const winLine1 = [0, 1, 2];
const winLine2 = [3, 4, 5];
const winLine3 = [6, 7, 8];
const winLine4 = [0, 3, 6];
const winLine5 = [1, 4, 7];
const winLine6 = [2, 5, 8];
const winLine7 = [0, 4, 8];
const winLine8 = [2, 4, 6];

const getIndexItems = (arr: BoardType, type: "x" | "0") => {
  const r = arr
    .map((e, i) => (e === type ? i : null))
    .filter((e) => e !== null) as number[];
  return r;
};
const found = (arr1: any[], arr2: any[]) => {
  const count = arr1.filter((v) => arr2.includes(v)).length;
  return count === arr2.length;
};
const getWinLine = (arr: number[]) => {
  if (found(arr, winLine1)) return "winLine1";
  if (found(arr, winLine2)) return "winLine2";
  if (found(arr, winLine3)) return "winLine3";
  if (found(arr, winLine4)) return "winLine4";
  if (found(arr, winLine5)) return "winLine5";
  if (found(arr, winLine6)) return "winLine6";
  if (found(arr, winLine7)) return "winLine7";
  if (found(arr, winLine8)) return "winLine8";
  return null;
};

export const getMove = (prevMove: ItemBoardType): ItemBoardType => {
  if (prevMove === "0") return "x";
  if (prevMove === "x") return "0";
  return "x";
};

export const pickWinner = (
  board: BoardType
): null | { winner: "x" | "0"; line: string } => {
  const x = getIndexItems(board, "x");
  const o = getIndexItems(board, "0");
  if (x.length < 3 && o.length < 3) return null;
  const winLineX = getWinLine(x);
  const winLine0 = getWinLine(o);
  if (winLineX) return { winner: "x", line: winLineX };
  if (winLine0) return { winner: "0", line: winLine0 };
  return null;
};

export const replaceBoard = (
  board: BoardType,
  index: number,
  move: ItemBoardType
) => {
  const newBoard: BoardType = JSON.parse(JSON.stringify(board));
  newBoard.splice(index, 1);
  newBoard.splice(index, 0, move);
  return newBoard;
};

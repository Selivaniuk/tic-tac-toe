import React, { useEffect, useRef, useState } from "react";
import styles from "./Board.module.css";
import { BoardType, ItemBoardType } from "../types/boardTypes";
import Cell from "../cell/Cell";
import { getMove, INITIAL_BOARD, pickWinner, replaceBoard } from "../utils";
import useAi from "../useAi";
type PropsType = {
  is_AI: boolean;
};
const Board: React.FC<PropsType> = ({ is_AI }) => {
  const [winner, setWinner] = useState<ItemBoardType>(null);
  const [winLine, setWinLine] = useState<string | null>(null);
  const [isDraw, setDraw] = useState(false);
  const [board, setBoard] = useState<BoardType>(INITIAL_BOARD);
  const prevMove = useRef<ItemBoardType>(null);
  const onCellClick = (index: number) => {
    console.log("onCellClick", index);

    if (winner) return;
    const move = getMove(prevMove.current);
    setBoard((prevBoard) => replaceBoard(prevBoard, index, move));
    prevMove.current = move;
  };
  useAi({
    prevMove: prevMove.current,
    enable: is_AI && !winner,
    board,
    onCellClick,
  });
  useEffect(() => {
    const count = board.filter((v) => v).length;
    if (count >= 5) {
      const win = pickWinner(board);
      if (win) {
        setWinner(win.winner);
        setWinLine(win.line);
      } else if (count === 9) {
        setDraw(true);
      }
    }
  }, [board]);

  const onReset = () => {
    setBoard(INITIAL_BOARD);
    setWinner(null);
    setWinLine(null);
    setDraw(false);
    prevMove.current = null;
  };
  useEffect(() => {
    onReset();
  }, [is_AI]);
  return (
    <div>
      <div className={styles.info}>
        {winner && (
          <p>
            Winner: <b> {winner.toUpperCase()} </b>
          </p>
        )}
        {isDraw && <b>Draw</b>}
        {!isDraw && !winner && (
          <p>
            <b>{getMove(prevMove.current)?.toUpperCase()}</b> Turn
          </p>
        )}
      </div>
      <div className={styles.board}>
        <div
          className={styles[winLine ?? ""]}
          style={{ position: "absolute" }}
        />
        {board.map((item, i) => (
          <Cell key={"cell" + i} onClick={() => onCellClick(i)} item={item} />
        ))}
      </div>
      <button onClick={onReset}>Restart</button>
    </div>
  );
};

export default Board;

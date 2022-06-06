import React from "react";
import { ItemBoardType } from "../types/boardTypes";
import styles from "./Cell.module.css";

type PropsType = {
  item: ItemBoardType;
  onClick: () => void;
};
const Cell: React.FC<PropsType> = ({ item, onClick }) => {
  const onCellClick = () => {
    if (!item) onClick();
  };
  return (
    <div onClick={onCellClick} className={styles.cell}>
      {item?.toLocaleUpperCase()}
    </div>
  );
};

export default Cell;

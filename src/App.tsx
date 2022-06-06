import React, { useState } from "react";
import Board from "./board/Board";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [is_AI, setIs_AI] = useState(false);
  return (
    <div className={styles.main}>
      <h1>Tic-Tac-Toe</h1>
      <div className={styles.board}>
        <div className={styles.buttons}>
          <button
            className={!is_AI ? styles.activeButton : styles.button}
            onClick={() => setIs_AI(false)}
          >
            Play against a friend
          </button>
          <button
            className={is_AI ? styles.activeButton : styles.button}
            onClick={() => setIs_AI(true)}
          >
            Play against a bot
          </button>
        </div>
        <Board is_AI={is_AI} />
      </div>
    </div>
  );
};

export default App;

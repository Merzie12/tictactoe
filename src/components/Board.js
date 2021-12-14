import React, { useState } from "react";
import "../styles/Board.scss";
const Board = () => {
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [isFinished, setIsFinished] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [boardArr, setBoardArr] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [winner, setWinner] = useState("");

  const checkForWin = () => {
    if (isFinished) {
      return;
    }
    if (!isFinished) {
      if (
        (boardArr[0] === boardArr[3] &&
          boardArr[0] === boardArr[6] &&
          boardArr[0] !== "") ||
        (boardArr[0] === boardArr[4] &&
          boardArr[0] === boardArr[8] &&
          boardArr[0] !== "") ||
        (boardArr[0] === boardArr[1] &&
          boardArr[0] === boardArr[2] &&
          boardArr[0] !== "")
      ) {
        setWinner(boardArr[0] === "O" ? "Gracz 1" : "Gracz 2");
        if (boardArr[0] === "O") {
          setPlayer1Wins((prevState) => prevState + 1);
        } else {
          setPlayer2Wins((prevState) => prevState + 1);
        }
        setIsFinished(true);
      }
      if (
        (boardArr[6] === boardArr[7] &&
          boardArr[6] === boardArr[8] &&
          boardArr[6] !== "") ||
        (boardArr[6] === boardArr[4] &&
          boardArr[6] === boardArr[2] &&
          boardArr[6] !== "")
      ) {
        setWinner(boardArr[6] === "O" ? "Gracz 1" : "Gracz 2");
        if (boardArr[6] === "O") {
          setPlayer1Wins((prevState) => prevState + 1);
        } else {
          setPlayer2Wins((prevState) => prevState + 1);
        }
        setIsFinished(true);
      }
      if (
        (boardArr[5] === boardArr[2] &&
          boardArr[5] === boardArr[8] &&
          boardArr[5] !== "") ||
        (boardArr[5] === boardArr[4] &&
          boardArr[5] === boardArr[3] &&
          boardArr[5] !== "")
      ) {
        setWinner(boardArr[5] === "O" ? "Gracz 1" : "Gracz 2");
        if (boardArr[5] === "O") {
          setPlayer1Wins((prevState) => prevState + 1);
        } else {
          setPlayer2Wins((prevState) => prevState + 1);
        }
        setIsFinished(true);
      }
      if (
        boardArr[1] === boardArr[4] &&
        boardArr[1] === boardArr[7] &&
        boardArr[1] !== ""
      ) {
        setWinner(boardArr[1] === "O" ? "Gracz 1" : "Gracz 2");
        if (boardArr[1] === "O") {
          setPlayer1Wins((prevState) => prevState + 1);
        } else {
          setPlayer2Wins((prevState) => prevState + 1);
        }
        setIsFinished(true);
      }
    }
  };

  const handleReset = () => {
    setBoardArr(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
    setIsFinished(false);
    setCurrentPlayer("player1");
  };
  const handleResetPoints = () => {
    setPlayer2Wins(0);
    setPlayer1Wins(0);
  };

  const checkTrue = (item) => {
    return item !== "";
  };

  const handleClick = (id) => {
    let boardCopy = [...boardArr];
    if (boardCopy[id] || isFinished) {
      return 0;
    }

    setIsFinished(boardCopy.every(checkTrue));

    setBoardArr(boardCopy);
    if (currentPlayer === "player1") {
      boardCopy[id] = "O";
      setCurrentPlayer("player2");
    } else if (currentPlayer === "player2") {
      boardCopy[id] = "X";
      setCurrentPlayer("player1");
    }
  };

  const newBoard = boardArr.map((item, id) => (
    <div className="square" onClick={() => handleClick(id)} key={id}>
      {item}
    </div>
  ));

  checkForWin();

  return (
    <>
      <button onClick={handleReset} className="reset-btn">
        Resetuj pola
      </button>

      <button onClick={handleResetPoints} className="reset-btn">
        Resetuj punkty
      </button>

      <br />
      <div className="score">
        <div className="counter">
          Wynik Gracza 1 ( <strong>O</strong> ) <p>{player1Wins}</p>
        </div>

        <div className="counter">
          Wynik Gracza 2 ( <strong>X</strong> ) <p>{player2Wins}</p>
        </div>
      </div>

      {winner ? <h1>Zwycięża {winner} </h1> : null}

      <div className="board">{newBoard}</div>
    </>
  );
};

export default Board;

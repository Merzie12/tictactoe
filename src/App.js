import "./styles/App.scss";
import Board from "./components/Board";
import React, { useState, createRef } from "react";
function App() {
  let rules = createRef();

  const [isShown, setIsShown] = useState(false);

  const handleShowRules = () => {
    rules.current.classList.toggle("active");
    setIsShown((prevState) => !prevState);
  };

  return (
    <>
      <div className="App">
        <h1>
          TIC TAC TOE <br /> (kółko i krzyżyk)
        </h1>
        <button className="rules-btn" onClick={handleShowRules}>
          {isShown ? "Zamknij zasady" : "Pokaż zasady"}
        </button>
        <div className="rules" ref={rules}>
          <h1>Zasady gry w kółko i krzyżyk</h1>
        </div>
        <Board />
      </div>
    </>
  );
}

export default App;

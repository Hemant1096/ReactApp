import React, { useState } from "react";
import "./Ludo.css";

const WIN_POSITION = 30;

function Ludo() {
  const [positions, setPositions] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState([false, false, false, false]);
  const [turn, setTurn] = useState(0);
  const [dice, setDice] = useState(null);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    if (winner) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);

    const newPositions = [...positions];
    const newStarted = [...started];

    // Player not started yet
    if (!started[turn]) {
      if (roll === 6) {
        newStarted[turn] = true;
        newPositions[turn] = 1;
      }
    } else {
      // Player already started
      if (newPositions[turn] + roll <= WIN_POSITION) {
        newPositions[turn] += roll;
      }
    }

    // Check winner
    if (newPositions[turn] === WIN_POSITION) {
      setWinner(`Player ${turn + 1}`);
    }

    setPositions(newPositions);
    setStarted(newStarted);

    // Extra turn if dice is 6
    if (roll !== 6) {
      setTurn((turn + 1) % 4);
    }
  };

  return (
    <div className="ludo-container">
      <h1>🎲 Ludo Game (4 Players)</h1>

      <div className="players">
        {positions.map((pos, i) => (
          <p key={i}>
            Player {i + 1}: {pos} {started[i] ? "" : "(Not Started)"}
          </p>
        ))}
      </div>

      {dice && <h2>Dice: {dice}</h2>}

      {!winner ? (
        <>
          <h3>Turn: Player {turn + 1}</h3>
          <button onClick={rollDice}>Roll Dice</button>
        </>
      ) : (
        <h2>🎉 {winner} Wins!</h2>
      )}
    </div>
  );
}

export default Ludo;

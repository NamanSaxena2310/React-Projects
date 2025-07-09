import React, { useContext, useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import NameInput from "../components/NameInput";
import { GameContext } from "../context/GameContext";
import GridContainer from "../components/GridContainer";

const Home = () => {
  const {
    playerName,
    flashIndices,
    setFlashIndices,
    userSelections,
    setUserSelections,
    rounds,
    setRounds,
  } = useContext(GameContext);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (!playerName) return;

    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [playerName]);

  useEffect(() => {
    if (count !== 0) return

    
  }, [count, rounds]);

  return (
    <div>
      <Topbar />
      {playerName ? (
        <p
          className={`text-center mt-10 text-3xl mb-10 ${
            count == 0 ? "hidden" : ""
          }`}
        >
          Hello <span className="text-[#00d3bb]">{playerName}</span>, the game
          will start in {count}{" "}
        </p>
      ) : (
        <NameInput />
      )}
      <GridContainer />
    </div>
  );
};

export default Home;

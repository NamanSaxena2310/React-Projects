import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

const NameInput = () => {
  const [name, setName] = useState("");
  const { playerName, setPlayerName } = useContext(GameContext);

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onClickHandler = () => {
    setPlayerName(name);
    setName("");
  };

  console.log(playerName);

  return (
    <div className="flex justify-center items-center gap-5   mt-10   ">
      <fieldset className="fieldset">
        <input
          value={name}
          onChange={(e) => onChangeHandler(e)}
          type="text"
          className="input"
          placeholder="Enter your name here"
        />
      </fieldset>

      <button
        onClick={() => onClickHandler()}
        className="btn bg-black text-white border-black"
      >
        Submit
      </button>
    </div>
  );
};

export default NameInput;

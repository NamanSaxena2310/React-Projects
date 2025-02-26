import { useState } from "react";

function Game() {
  const [grid, setGrid] = useState(5);

  const cells = [];
  for (let i = 0; i < grid * grid; i++) {
    cells.push(i + 1);
  }

  return (
    <>
    

      <div className="flex justify-center align-middle border h-screen p-20">
      <div
        className="grid gap-4 "
        style={{ gridTemplateColumns: `repeat(${grid}, minmax(50px, 100px))` }}
      >
        {cells.map((cell) => (
          <div key={cell} className="border border-amber-50 p-5 bg-blue-500 text-white">
            {cell}
          </div>
        ))}
      </div>
      </div>
     
    </>
  );
}

export default Game;

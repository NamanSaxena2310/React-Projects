import { useEffect, useState } from "react";

function Game() {
  const [grid, setGrid] = useState(5);
  const [newGameKey,setnewGameKey] = useState(0)
  const [randomSquare, setRandomSquare] = useState([]);
  const [showSquares, setShowSquares] = useState(true); // Initially hidden
  const [clickedSquares, setClickedSquares] = useState({}); // Stores clicked results

  const restartGame = ()=>{
    setClickedSquares({})
    setRandomSquare([])
    setShowSquares(false)
    setnewGameKey((prev)=> prev +1)
  } 

  const checkAllSquaresAreClicked = ()=>{
    return randomSquare.every((index)=>clickedSquares[index] === "bg-green-500" )

  }

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      const newRandomSquares = [];
      while (newRandomSquares.length < 6) {
        let randomIndex = Math.floor(Math.random() * (grid * grid));
        if (!newRandomSquares.includes(randomIndex)) newRandomSquares.push(randomIndex);
      }
      setRandomSquare(newRandomSquares);
      setShowSquares(true); // Show squares

      // Hide after 200ms
      const timeout2 = setTimeout(() => {
        setShowSquares(false);
      }, 200);

      return () => clearTimeout(timeout2);
    }, 5000); // Delay reveal by 5 sec

    return () => clearTimeout(timeout1);
  }, [newGameKey]);

  const checkUserClick = (index) => {
    if (randomSquare.includes(index)) {
      
      setClickedSquares((prev) => {
        const updatedClicks = { ...prev, [index]: "bg-green-500" };

       
        if (randomSquare.every((square) => updatedClicks[square] === "bg-green-500")) {
          setTimeout(() => {
            alert("🎉 You Won! The game will restart.");
            restartGame();
          }, 500);
        }

        return updatedClicks;
      });
    } else {
    
      alert("❌ You Lost! The game will restart.");
      restartGame();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${grid}, minmax(50px, 100px))` }}
      >
        {Array.from({ length: grid * grid }, (_, index) => (
          <div
            key={index}
            onClick={() => checkUserClick(index)}
            className={`border border-amber-50 p-5 text-white cursor-pointer transition-all duration-300 ${
              showSquares && randomSquare.includes(index)
                ? "bg-amber-600" // Show initially
                : clickedSquares[index] || "bg-blue-500" // Turn red or green on click
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;

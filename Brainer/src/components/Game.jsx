import { useEffect, useState } from "react";

function Game() {
  const [grid, setGrid] = useState(5);
  const [randomSquare,setRandomSquare] = useState([])
  const [showSquares,setShowSquares] = useState(true)

  useEffect(()=>{
    const newRandomSquares = []
    for (let i = 1; i <= 3; i++) {
    newRandomSquares.push(Math.floor(Math.random()*(grid*grid)))
     
    }
    setRandomSquare(newRandomSquares)
    const timeout = setTimeout(()=>{
      setShowSquares(false)
    },100)

    
   
  },[grid])



  const cells = [];
  for (let i = 0; i < grid * grid; i++) {
    cells.push(i + 1);
  }

  const checkUserClick = (index)=>{
    if (randomSquare.includes(index)) {
      console.log("correct")
    }else{
      console.log("incorrect")
    }
  }

  return (
    <>

      <div className="flex justify-center align-middle border h-screen p-20">
      <div
        className="grid gap-4 "
        style={{ gridTemplateColumns: `repeat(${grid}, minmax(50px, 100px))` }}
      >
        {cells.map((cell,index) => (
          <div key={cell} onClick={()=>{checkUserClick(index)}} className={`border border-amber-50 p-5 text-white ${
             showSquares && randomSquare.includes(index) ? "bg-amber-600" : "bg-blue-500" } }` }>
            {cell}
          </div>
        ))}
      </div>
      </div>
     
    </>
  );
}

export default Game;

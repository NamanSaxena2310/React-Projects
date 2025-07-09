import { createContext, useState } from "react";

const GameContext = createContext()

const GameProvider = ({children}) => {
    const [numberOfGrids, setNumberOfGrids] = useState(4)
    const [playerName,setPlayerName] = useState(null)
    const [flashIndices,setFlashIndices] = useState([])
    const [userSelections,setUserSelections] = useState([])
    const [rounds,setRounds] = useState(1)

    const value = {
        numberOfGrids,
        setNumberOfGrids,
        playerName,
        setPlayerName,
        flashIndices,
        setFlashIndices,
        userSelections,
        setUserSelections,
        rounds,
        setRounds,
    }

return (<GameContext.Provider value= {value}>
    {children}
</GameContext.Provider>)

}


export {GameContext,GameProvider}
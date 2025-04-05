import { createContext, useState } from "react";

const GameContext = createContext()

const GameProvider = ({children}) => {
    const [numberOfGrids, setNumberOfGrids] = useState(4)

    const value = {
        numberOfGrids,
        setNumberOfGrids
    }

return (<GameContext.Provider value= {value}>
    {children}
</GameContext.Provider>)

}


export {GameContext,GameProvider}
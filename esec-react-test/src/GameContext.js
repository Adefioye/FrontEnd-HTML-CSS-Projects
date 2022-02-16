import React, { createContext, useState } from 'react'

export const GameContext = createContext(null);

export const GameContextProvider = (props) => {

   
    const [videoList, setVideoList] = useState([]);
    const [tempVideoList, setTempVideoList] = useState([]);

    return (
        <GameContext.Provider value={{videoList,setVideoList,tempVideoList,setTempVideoList}}>
            {props.children}
        </GameContext.Provider>
    )
}
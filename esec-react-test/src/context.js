import React from 'react';

const GameContext = React.createContext();

const GameProvider = (props) => {
  return (
    <GameContext.Provider value={}>
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };
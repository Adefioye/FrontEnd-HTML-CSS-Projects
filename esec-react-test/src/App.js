import React, {  useContext, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import VideoCards from "./components/videocards/VideoCards";
import { GameContextProvider,GameContext } from "./GameContext";


function App() {
  // const state = useContext(GameContext);
  // console.log(state);


  return (
    <GameContextProvider >
      <div className="container">
        <div className="row">
          <SideBar />
          <VideoCards />
        </div>
      </div>

    </GameContextProvider>

  );
}

export default App;

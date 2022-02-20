import React, {  useContext, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import VideoCards from "./components/videocards/VideoCards";
import { GameContextProvider,GameContext } from "./GameContext";
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  


  return (
    <Provider  store= { store }>
      <div className="container">
        <div className="row">
          <SideBar />
          <VideoCards />
        </div>
      </div>

    </Provider>

  );
}

export default App;

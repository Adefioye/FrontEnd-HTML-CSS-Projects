import React, {  useContext, useEffect,useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
// import Practise from "./practise";
import VideoCards from "./components/videocards/VideoCards";
import { GameContextProvider,GameContext } from "./GameContext";
import { Provider } from 'react-redux';
import store from "./store";
import axios from "axios";

function App() {
  


  const [likeVal, setLikeVal]=useState(100);
  const [dislikeVal, setDislikeVal] =useState(25);

  return (

    
    <div>
    <h2>Like/Dislike</h2>
    <button className={likeVal>100?'liked like-button':'like-button'}
    onClick={()=> likeVal>100?setLikeVal(likeVal-1):setLikeVal(likeVal+1)}>Like | 
    {likeVal}
    </button>
    <button className={dislikeVal>25?'disliked dislike-button':'dislike-button'}
    onClick={()=>dislikeVal>25?setDislikeVal(dislikeVal-1):setDislikeVal(dislikeVal+1) }>Dislike |
     {dislikeVal}
    </button>
</div>

    // <Provider  store= { store }>
    //   <div className="container">
    //     <div className="row">
    //       <SideBar />
    //       <VideoCards />
    //     </div>
    //   </div>
    //   <Practise/>

    // </Provider>

  );
}

export default App;




const getVideos= async (term) => {

  await axios.get('')
  .then( res => {
    console.log(res);
  })
}
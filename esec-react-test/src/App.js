import { React, useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import SideBar from "./components/SideBar";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [flagCheck, setFlagCheck] = useState(0);

  


  useEffect(() => {
    const fetchVideoData = async (term) => {
      const response = await axios.get(
        "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
      );
      console.log(response.data.length);
      setVideoList(response.data);
      setFlagCheck(1);
    };
    fetchVideoData();
  }, []);

  return (
    <div className="container">
      
        <SideBar videoList={videoList}  flagCheck={flagCheck}/>
      
    </div>
  );
}

export default App;

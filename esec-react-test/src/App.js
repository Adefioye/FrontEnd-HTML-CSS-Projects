import { React, useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import SideBar from "./components/SideBar";
import VideoCards from "./components/VideoCards";

function App() {
  const [videoList, setVideoList] = useState([]);


  useEffect(() => {
    const fetchVideoData = async (term) => {
      const response = await axios.get(
        "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
      );
      console.log(response.data.length);
      setVideoList(response.data);
    };
    fetchVideoData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <SideBar videoList={videoList} />
        <VideoCards videoList={videoList} />
      </div>
    </div>
  );
}

export default App;

import React,{ useContext , useState} from "react";
import { GameContext } from "../../GameContext";
import { useSelector } from 'react-redux'



function VideoCards() {

  
  const videoList = useSelector((state) => state.videos.video);
  console.log(videoList)



  return (
    <div data-testid='videocard' className="col-sm-8">
      <h1>Video Informations</h1>
      {videoList.map((video) => (
        <div key={video.id} className="card mb-3">
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid w-100 h-100"
                src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{video.name}</h5>
                <p className="card-text">
                  Release Date: {new Date(video.first_release_date).toLocaleString().toLocaleString().split(",")[0]}
                </p>
                <p className="card-text">{video.summary}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoCards;

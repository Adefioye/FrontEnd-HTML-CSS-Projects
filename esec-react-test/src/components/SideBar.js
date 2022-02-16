import { React, useState, createContext, useContext, useRef, useEffect } from "react";
import { GameContext } from "../GameContext.js";
import axios from "axios"


function SideBar() {

  const {videoList,setVideoList,tempVideoList,setTempVideoList} = useContext(GameContext);
  const [filterValue, setFilterValue] = useState('');
  const searchText = useRef('');

  useEffect(() => {
    const fetchVideoData = async (term) => {
      const response = await axios.get(
        "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
      );
      setVideoList([1,2,3]);
      setVideoList(response.data);
      setTempVideoList(response.data);
      console.log(response.data);
    };
    fetchVideoData();
  }, []);
 


function sortByTitle(e) {
  let sortedVideoList = [...tempVideoList];


  sortedVideoList = sortedVideoList.filter((game) =>
    game.name.includes(e.target.value)
  );

  setVideoList(sortedVideoList);
  console.log(videoList);
}
function handleChange(e) {
  let filterSortedVideoList = [...videoList];
  setFilterValue(e.target.value);
  console.log(filterSortedVideoList);

  console.log(e.target.value);
  switch (e.target.value) {
    case 'Rating (Asc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.rating > b.rating ? 1 : -1)
      console.log(filterSortedVideoList);
      setVideoList(filterSortedVideoList);
      break;
    case 'Rating (Desc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.rating > b.rating ? -1 : 1)
      console.log(filterSortedVideoList);
      setVideoList(filterSortedVideoList);
      break;
    case 'Release Date (Asc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.first_release_date > b.first_release_date ? 1 : -1)
      console.log(filterSortedVideoList);
      setVideoList(filterSortedVideoList);
      break;
    case 'Release Date (Desc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.first_release_date > b.first_release_date ? -1 : 1)
      console.log(filterSortedVideoList);
      setVideoList(filterSortedVideoList);
      break;
    default:
      
      setVideoList(filterSortedVideoList);

  }
}


function clearFilter(e) {
  e.preventDefault();
  searchText.current.value="";
  setFilterValue("No Filter");
  setVideoList(tempVideoList);
}

  

  return (
   
    <div className="col-sm-4">
    <h1>Filter Results</h1>
          <div className="mb-3">
            <label className="form-label">Name(contains)</label>
            <input className="form-control" ref={searchText} type="text" onChange={sortByTitle} />
          </div>
          <div className="mb-3">
            <label className="form-label">Order By</label>
            <select
              className="form-control"
              value={filterValue}
              onChange={handleChange}
            >
              <option value="No Filter">No Filter</option>
              <option value="Rating (Asc)">Rating (Asc)</option>
              <option value="Rating (Desc)">Rating (Desc)</option>
              <option value="Release Date (Asc)">Release Date (Asc)</option>
              <option value="Release Date (Desc)">Release Date (Desc)</option>
            </select>
          </div>
          <div className="mb-3">
            <button className="btn-primary" onClick={clearFilter}>Clear</button>
          </div>
    </div>
    
  );
}

export default SideBar;

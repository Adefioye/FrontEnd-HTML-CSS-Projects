import { React, useState, useEffect, useRef } from "react";
import VideoCards from "./VideoCards";


function SideBar({ videoList,flagCheck }) {
  
  
  const [filterVideoList, setFilterVideoList] = useState([]);
  const [tempVideoList, setTempVideoList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const searchText = useRef('');
  const [date, setDate] = useState(new Date());

  console.log(videoList);
  
  useEffect(() => {
    
      setFilterVideoList(videoList);
      setTempVideoList(videoList);
    
    
  }, [flagCheck]);

function sortByTitle(e) {
  let sortedVideoList = [...tempVideoList];

  console.log(sortedVideoList);

  sortedVideoList = sortedVideoList.filter((game) =>
    game.name.includes(e.target.value)
  );
  console.log(sortedVideoList);

  setFilterVideoList(sortedVideoList);
}
function handleChange(e) {
  let filterSortedVideoList = [...filterVideoList];
  setFilterValue(e.target.value);
  console.log(filterSortedVideoList);

  console.log(e.target.value);
  switch (e.target.value) {
    case 'Rating (Asc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.rating > b.rating ? 1 : -1)
      console.log(filterSortedVideoList);
      setFilterVideoList(filterSortedVideoList);
      break;
    case 'Rating (Desc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.rating > b.rating ? -1 : 1)
      console.log(filterSortedVideoList);
      setFilterVideoList(filterSortedVideoList);
      break;
    case 'Release Date (Asc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.first_release_date > b.first_release_date ? 1 : -1)
      console.log(filterSortedVideoList);
      setFilterVideoList(filterSortedVideoList);
      break;
    case 'Release Date (Desc)':
      filterSortedVideoList = filterSortedVideoList.sort((a, b) => a.first_release_date > b.first_release_date ? -1 : 1)
      console.log(filterSortedVideoList);
      setFilterVideoList(filterSortedVideoList);
      break;
    default:
      
      setFilterVideoList(filterSortedVideoList);

  }
}


function clearFilter(e) {
  e.preventDefault();
  searchText.current.value="";
  setFilterValue("No Filter");
  setFilterVideoList(tempVideoList);
}

  return (
    <div className="row">
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
    <VideoCards videoList={filterVideoList}  />
    </div>
    
  );
}

export default SideBar;

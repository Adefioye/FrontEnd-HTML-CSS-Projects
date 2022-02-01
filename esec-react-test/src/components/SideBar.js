import { React, useState, createContext } from "react";

// export const userContext = createContext()

function SideBar({ videoList }) {
  const [textArray, setTextArray] = useState(videoList);
  const [date, setDate] = useState(new Date());

  function sortByTitle(e) {
    const newTextArray = [...textArray];
    newTextArray.filter((game) => {
      game.title.includes(e.target.value);
    });

    setTextArray(newTextArray);
  }

//   function sortByDate() {

//   }

  return (
    <div className="col-sm-4">
      <h1>Filter Results</h1>
      <div className="mb-3">
        <label className="form-label">Name(contains)</label>
        <input className="form-control" type="text" onChange={sortByTitle} />
      </div>
      <div className="mb-3">
        <label className="form-label">Order By</label>
        <input className="form-control" type="text" />
      </div>
    </div>
  );
}

export default SideBar;

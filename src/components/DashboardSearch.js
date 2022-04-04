import React from "react";

function DashboardSearch() {
  return (
    <div className="shadow mx-1 rounded mb-5 bg-white p-2">
      <div>
        <input
          className="border border-sky-400 border-2 rounded w-full p-2 focus:outline-none"
          placeholder="Search Here.."
        ></input>
      </div>
    </div>
  );
}

export default DashboardSearch;

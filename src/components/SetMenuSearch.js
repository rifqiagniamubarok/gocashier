import React from "react";
import addIcon from "../assets/icon/add.svg";

function SetMenuSearch() {
  return (
    <div className="shadow mx-1 rounded mb-5 bg-white p-2 grid grid-cols-10 gap-x-5">
      <div className="inline col-span-8">
        <input
          className="border border-sky-400 border-2 rounded w-full p-2 focus:outline-none inline"
          placeholder="Search Here.."
        />
      </div>
      <div className="bg-sky-400 align-middle col-span-2 pt-1 rounded hover:bg-sky-300 cursor-pointer">
        <img src={addIcon} className="inline align-middle mr-3 mt-1" />
        <p className="inline text-center align-middle text-white font-semibold">
          Add Menu
        </p>
      </div>
    </div>
  );
}

export default SetMenuSearch;

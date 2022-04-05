import React from "react";

function setMenuAddItem() {
  return (
    <div className="shadow mx-1 rounded mb-5 bg-sky-400 p-2 ">
      <div className="grid grid-cols-3 px-5 my-3 gap-x-10 gap-y-10">
        <div className="">
          <p className="text-left text-xl text-white font-medium font-sans mb-3">
            Name :
          </p>
          <input className="w-full text-xl mr-2 p-1 px-2 rounded bg-sky-50 text-sky-400 focus:outline-none" />
        </div>
        <div className="">
          <p className="text-left text-xl text-white font-medium font-sans mb-3">
            Capital Price :
          </p>
          <input className="w-full text-xl mr-2 p-1 px-2 rounded bg-sky-50 text-sky-400 focus:outline-none" />
        </div>
        <div className="">
          <p className="text-left text-xl text-white font-medium font-sans mb-3">
            Price :
          </p>
          <input className="w-full text-xl mr-2 p-1 px-2 rounded bg-sky-50 text-sky-400 focus:outline-none" />
        </div>
        <div className="col-span-2 text-left text-xl  rounded ">
          <input
            type="file"
            className="text-sky-400 rounded   font-medium w-full bg-sky-50"
          />
        </div>
        <div>
          <button className="text-xl text-sky-400 font-semibold bg-sky-100 px-3 rounded hover:bg-sky-50 w-full p-1">
            Add Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default setMenuAddItem;

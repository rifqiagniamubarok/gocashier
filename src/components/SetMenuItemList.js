import React from "react";
import discount from "../assets/icon/dicount.svg";
import edit2 from "../assets/icon/edit2.svg";

function SetMenuItemList() {
  return (
    <div className=" mb-5 grid grid-cols-1">
      {/*  head */}
      <div className="shadow mx-1 rounded  bg-white p-2 mb-3 grid  grid-cols-7 px-5">
        <div className="col-span-3 text-left text-xl font-medium text-sky-400">
          Name
        </div>
        <div className="text-xl font-medium text-sky-400">Capital Price</div>
        <div className="text-xl font-medium text-sky-400">Price</div>
        <div className="font-medium text-xl col-span-2 place-self-end"></div>
      </div>
      {/* akhir head */}
      {/* list */}
      <div className="shadow mx-1 rounded  bg-white p-2 mb-3 grid  grid-cols-7 px-5">
        <div className="col-span-3 text-left text-xl font-medium">
          Sandwich Buah
        </div>
        <div className="text-xl font-medium ">Rp. 48,000</div>
        <div className="text-xl font-medium">Rp. 50,000</div>
        <div className="font-medium text-xl col-span-2 place-self-end">
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={edit2} className="inline mr-1" />
            Edit
          </button>
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={discount} className="inline mr-1" />
            Add Discount
          </button>
        </div>
      </div>
      {/* batas list */}
      {/* repeat */}
      <div className="shadow mx-1 rounded  bg-white p-2 mb-3 grid  grid-cols-7 px-5">
        <div className="col-span-3 text-left text-xl font-medium">
          Sandwich Buah
        </div>
        <div className="text-xl font-medium ">Rp. 48,000</div>
        <div className="text-xl font-medium">Rp. 50,000</div>
        <div className="font-medium text-xl col-span-2 place-self-end">
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={edit2} className="inline mr-1" />
            Edit
          </button>
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={discount} className="inline mr-1" />
            Add Discount
          </button>
        </div>
      </div>
      <div className="shadow mx-1 rounded  bg-white p-2 mb-3 grid  grid-cols-7 px-5">
        <div className="col-span-3 text-left text-xl font-medium">
          Sandwich Buah
        </div>
        <div className="text-xl font-medium ">Rp. 48,000</div>
        <div className="text-xl font-medium">Rp. 50,000</div>
        <div className="font-medium text-xl col-span-2 place-self-end">
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={edit2} className="inline mr-1" />
            Edit
          </button>
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={discount} className="inline mr-1" />
            Add Discount
          </button>
        </div>
      </div>
      <div className="shadow mx-1 rounded  bg-white p-2 mb-3 grid  grid-cols-7 px-5">
        <div className="col-span-3 text-left text-xl font-medium">
          Sandwich Buah
        </div>
        <div className="text-xl font-medium ">Rp. 48,000</div>
        <div className="text-xl font-medium">Rp. 50,000</div>
        <div className="font-medium text-xl col-span-2 place-self-end">
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={edit2} className="inline mr-1" />
            Edit
          </button>
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={discount} className="inline mr-1" />
            Add Discount
          </button>
        </div>
      </div>
      <div className="shadow mx-1 rounded  bg-white p-2 mb-3 grid  grid-cols-7 px-5">
        <div className="col-span-3 text-left text-xl font-medium">
          Sandwich Buah
        </div>
        <div className="text-xl font-medium ">Rp. 48,000</div>
        <div className="text-xl font-medium">Rp. 50,000</div>
        <div className="font-medium text-xl col-span-2 place-self-end">
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={edit2} className="inline mr-1" />
            Edit
          </button>
          <button className="bg-sky-400 text-white rounded mx-1  px-5 py-1  hover:bg-sky-300">
            <img src={discount} className="inline mr-1" />
            Add Discount
          </button>
        </div>
      </div>
      {/* batas repeat */}
    </div>
  );
}

export default SetMenuItemList;

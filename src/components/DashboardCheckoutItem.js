import React from "react";

function DashboardCheckoutItem() {
  return (
    <div className="bg-sky-400 mx-2 rounded p-8 h-max mb-5">
      <div className="">
        <div className="flex justify-between">
          <div className="basis-auto text-white text-xl font-normal">
            <p>Sandwich Buah</p>
          </div>
          <div className="">
            <input className="w-16 mr-1 bg-sky-400 border-b-2 focus:outline-none text-white text-center text-xl" />
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div className="basis-auto text-white text-xl font-semibold">
            <p>Rp. 50,000</p>
          </div>
          <div className="">
            <button className="text-xl text-sky-400 font-semibold bg-sky-100 px-3 rounded hover:bg-sky-50">
              input
            </button>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 gap-y-2 mt-3 ">
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">Qty</div>
            <div className="col-span-5">Name</div>
            <div className="col-span-4 place-self-end">Price</div>
          </div>
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">1</div>
            <div className="col-span-5">Sandwich Buah</div>
            <div className="col-span-4 place-self-end">Rp. 500,000</div>
          </div>
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">1</div>
            <div className="col-span-5">Sandwich Buah</div>
            <div className="col-span-4 place-self-end">Rp. 500,000</div>
          </div>
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">1</div>
            <div className="col-span-5">Sandwich Buah</div>
            <div className="col-span-4 place-self-end">Rp. 500,000</div>
          </div>
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">1</div>
            <div className="col-span-5">Sandwich Buah</div>
            <div className="col-span-4 place-self-end">Rp. 500,000</div>
          </div>
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">1</div>
            <div className="col-span-5">Sandwich Buah</div>
            <div className="col-span-4 place-self-end">Rp. 500,000</div>
          </div>
          <div className="grid grid-cols-10 gap-x-2 justify-items-start text-white text-xl">
            <div className="col-span-1 place-self-center">1</div>
            <div className="col-span-5">Sandwich Buah</div>
            <div className="col-span-4 place-self-end">Rp. 500,000</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full mt-20 mb-5">
        <div className="grid grid-cols-6 w-full mb-5">
          <div className="col-span-1 place-self-start text-white text-xl font-medium">
            Code
          </div>
          <div className="col-span-5 place-self-end">
            <input className="w-40 mr-2 p-1 px-2 rounded bg-sky-50 text-sky-400 focus:outline-none" />
            <button className="text-xl text-sky-400 font-semibold bg-sky-100 px-3 rounded hover:bg-sky-50">
              input
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 w-full">
          <div className="col-span-1 place-self-start text-white text-xl font-medium">
            Discount
          </div>
          <div className="col-span-5 place-self-end">
            <input className="w-40 mr-2 p-1 px-2 rounded bg-sky-50 text-sky-400 focus:outline-none" />
            <button className="text-xl text-sky-400 font-semibold bg-sky-100 px-3 rounded hover:bg-sky-50">
              input
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 w-full mt-2 mb-5">
        <div className="grid grid-cols-2 w-full ">
          <div className="col-span-1 place-self-start text-white text-xl font-medium">
            Discount
          </div>
          <div className="col-span-1 place-self-end text-white text-xl font-normal">
            - Rp. 50.000
          </div>
        </div>
        <div className="grid grid-cols-2 w-full ">
          <div className="col-span-1 place-self-start text-white text-xl font-medium">
            Total Price
          </div>
          <div className="col-span-1 place-self-end text-white text-3xl font-medium">
            Rp. 50.000
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCheckoutItem;

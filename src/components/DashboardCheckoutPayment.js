import React from "react";

function DashboardCheckoutPayment() {
  return (
    <div className="bg-sky-400 mx-2 rounded p-8 h-max">
      <div className="grid grid-cols-8 w-full">
        <div className="col-span-2 place-self-start text-white text-xl font-medium">
          Cash
        </div>
        <div className="col-span-1 text-right text-xl text-white">Rp.</div>
        <div className="col-span-5 place-self-end ">
          <input className="w-full mr-2 p-1 px-2 rounded bg-sky-50 text-sky-400 focus:outline-none text-right" />
        </div>
      </div>
      <div className="grid grid-cols-8 w-full">
        <div className="col-span-2 place-self-start text-white text-xl font-medium">
          Cashback
        </div>
        <div className="col-span-1 text-right text-xl text-white">Rp.</div>
        <div className="col-span-5 place-self-end text-xl text-white mt-2">
          50,000
        </div>
      </div>
      <div className="bg-sky-50 py-5 rounded mt-5 hover:bg-sky-100 cursor-pointer">
        <p className="text-6xl font-bold text-sky-400 italic ">PAY</p>
      </div>
    </div>
  );
}

export default DashboardCheckoutPayment;

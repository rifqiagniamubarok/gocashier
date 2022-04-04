import React from "react";
import NavbarComponent from "../views/NavbarComponent";
import food from "../assets/categoryIcon/food.svg";
import drink from "../assets/categoryIcon/drink.svg";
import snack from "../assets/categoryIcon/snack.svg";
import more from "../assets/categoryIcon/more.svg";
import discount from "../assets/categoryIcon/discount.svg";

function DashboardCategoryMenu() {
  return (
    <div className="grid grid-cols-5 mb-4">
      <div className="bg-sky-400 font-medium text-white mx-1 rounded py-2 shadow hover:bg-sky-300 cursor-pointer">
        <img src={food} className="inline mr-2 h-5" />
        <p className="inline">FOOD</p>
      </div>
      <div className="bg-sky-400 font-medium text-white mx-1 rounded py-2 shadow hover:bg-sky-300 cursor-pointer">
        <img src={drink} className="inline mr-2 h-5" />
        <p className="inline">DRINK</p>
      </div>
      <div className="bg-sky-400 font-medium text-white mx-1 rounded py-2 shadow hover:bg-sky-300 cursor-pointer">
        <img src={snack} className="inline mr-2 h-5" />
        <p className="inline">SNACK</p>
      </div>
      <div className="bg-sky-400 font-medium text-white mx-1 rounded py-2 shadow hover:bg-sky-300 cursor-pointer">
        <img src={more} className="inline mr-2 h-5" />
        <p className="inline">MORE</p>
      </div>
      <div className="bg-sky-400 font-medium text-white mx-1 rounded py-2 shadow hover:bg-sky-300 cursor-pointer">
        <img src={discount} className="inline mr-2 h-5" />
        <p className="inline">DISCOUNT</p>
      </div>
    </div>
  );
}

export default DashboardCategoryMenu;

import React from "react";
import NavbarComponent from "../views/NavbarComponent";
import DashboardCategoryMenu from "../components/DashboardCategoryMenu";
import DashboardSearch from "../components/DashboardSearch";
import DashboardItemMenu from "../components/DashboardItemMenu";
import DashboardCheckoutItem from "../components/DashboardCheckoutItem";
import DashboardCheckoutPayment from "../components/DashboardCheckoutPayment";
import FooterComponent from "../views/FooterComponent";

function DashboardPage() {
  return (
    <div className="">
      <NavbarComponent />

      <div className="container mx-auto  px-2 flex flex-row w-full pt-20">
        <div className="basis-5/6  mx-2">
          <DashboardCategoryMenu />
          <DashboardSearch />
          <DashboardItemMenu />
        </div>
        <div className="basis-2/6">
          <DashboardCheckoutItem />
          <DashboardCheckoutPayment />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default DashboardPage;

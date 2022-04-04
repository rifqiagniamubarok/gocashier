import React from "react";
import logo from "../assets/logo/Logo.png";
import facebookLogo from "../assets/socmedIcon/facebookLogo.png";
import instagramLogo from "../assets/socmedIcon/instagramLogo.png";
import twitterLogo from "../assets/socmedIcon/twitterLogo.png";
import waLogo from "../assets/socmedIcon/waLogo.png";

function FooterComponent() {
  const today = new Date();
  return (
    <div className="border border-t-3 mt-10 py-10 content-start">
      <div className="grid grid-cols-2 gap-x-20 content-start">
        <div className="place-self-end">
          <p className="text-2xl font-semibold text-black cursor-pointer text-right">
            Go Cashier
          </p>
          <p className="text-xl font-normal text-black cursor-pointer text-right">
            Landing Page
          </p>
          <p className="text-xl font-normal text-black cursor-pointer text-right">
            About Developer
          </p>
          <p className="text-xl font-normal text-black cursor-pointer text-right">
            F.A.Q
          </p>
          <p className="text-2xl font-semibold text-black  text-right mt-5">
            Developer Contact
          </p>
          <div className="mt-1">
            <img src={facebookLogo} className=" mx-1 inline cursor-pointer" />
            <a href="https://www.instagram.com/rifqi.amm/">
              <img
                src={instagramLogo}
                className=" mx-1 inline cursor-pointer"
              />
            </a>
            <img src={twitterLogo} className=" mx-1 inline cursor-pointer" />
            <a href="https://wa.me/6281264287564/">
              <img src={waLogo} className=" mx-1 inline cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="place-self-start">
          <img src={logo} className="w-40" />
          <p className="text-xl text-gray-400 mt-5">
            &copy; {today.getFullYear()} - Go Cashier{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

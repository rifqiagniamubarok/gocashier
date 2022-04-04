import React from "react";
import SetMenuSearch from "../components/SetMenuSearch";
import SetMenuAddItem from "../components/SetMenuAddItem";

import NavbarComponent from "../views/NavbarComponent";

function SetMenuPage() {
  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto pt-20">
        <SetMenuSearch />
        <SetMenuAddItem />
      </div>
    </div>
  );
}

export default SetMenuPage;

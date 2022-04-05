import React, { useState } from "react";
import SetMenuSearch from "../components/SetMenuSearch";
import SetMenuAddItem from "../components/SetMenuAddItem";

import NavbarComponent from "../views/NavbarComponent";
import SetMenuItemList from "../components/SetMenuItemList";

function SetMenuPage() {
  const [openAddItem, setOpenAddItem] = useState(false);

  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto pt-20">
        <SetMenuSearch
          setOpenAddItem={setOpenAddItem}
          openAddItem={openAddItem}
        />
        {openAddItem ? <SetMenuAddItem /> : <span></span>}

        <SetMenuItemList />
      </div>
    </div>
  );
}

export default SetMenuPage;

import React, { createContext, useRef, useState } from "react";

export const CustomContext = createContext();

const AppContext = (props) => {
  const [menuOpen, setmenuOpen] = useState(false);
  const menuRef = useRef(null);
  return (
    <CustomContext.Provider value={{ setmenuOpen, menuOpen, menuRef }}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default AppContext;

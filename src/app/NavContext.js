// NavContext.jsx
'use client';
import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function NavProvider({ children }) {
  const [showNav, setshowNav] = useState(true);
  return (
    <NavContext.Provider value={{ showNav, setshowNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavProv() {
  return useContext(NavContext);  // ai typo aici - era CounterContext
}
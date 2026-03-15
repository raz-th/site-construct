// NavContext.jsx
'use client';
import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function NavProvider({ children }) {
  const [showNav, setshowNav] = useState(true);
  const [messageData, setMessageData] = useState({show: false, message: '', type: 'success'})
  return (
    <NavContext.Provider value={{ showNav, setshowNav, messageData, setMessageData }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavProv() {
  return useContext(NavContext); 
}
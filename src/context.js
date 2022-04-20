import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  return (
    <AppContext.Provider value={{ dark, setDark }}>
      {children}
    </AppContext.Provider>
  );
};
// hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

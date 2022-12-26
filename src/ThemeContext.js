import { createContext, useContext, useState } from "react";

const MyTheme = createContext(undefined);

export const MyProvider = ({ children }) => {
  const [settings, setSettings] = useState("sun");

  return (
    <MyTheme.Provider
      value={{
        settings,
        toggleSettings: () => setSettings(settings === "sun" ? "moon" : "sun"),
      }}
    >
      {children}
    </MyTheme.Provider>
  );
};

export const useSettings = () => useContext(MyTheme);

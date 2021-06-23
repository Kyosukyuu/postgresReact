import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const GenshinContext = createContext();
const GenshinProvider = ({ children }) => {
  const { REACT_APP_API_URL, REACT_APP_API_ALL_CHARACTERS } =
    process.env;
  const { data: allCharsData, status: allCharsStatus } = useFetch(
    `${REACT_APP_API_URL}${REACT_APP_API_ALL_CHARACTERS}`
  );

  return (
    <GenshinContext.Provider
      value={{
        allCharsData,
        allCharsStatus,
      }}
    >
      {children}
    </GenshinContext.Provider>
  );
};

export { GenshinContext, GenshinProvider };

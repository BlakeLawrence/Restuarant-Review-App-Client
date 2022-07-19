import { useState, createContext } from "react";

export const RestuarantsContext = createContext();

export const RestuarantsContextProvider = (props) => {
  const [restuarants, setRestuarants] = useState([]);

  const addRestuarant = (restuarant) => {
    setRestuarants([...restuarants, restuarant]);
  };

  return (
    <RestuarantsContext.Provider
      value={{ restuarants, setRestuarants, addRestuarant }}
    >
      {props.children}
    </RestuarantsContext.Provider>
  );
};

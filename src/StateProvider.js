import React, { createContext, useContext, useReducer } from "react";

//Preparing The Date layer

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hock Which Allow us to puull information from data layer
export const useStateValue = () => useContext(StateContext);

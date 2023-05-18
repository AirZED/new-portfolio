import React, { useReducer } from "react";
import portfolioContext from "./portfolioStore";

enum actionKind {
  LIGHTMODE = "LIGHTMODE",
  DARKMODE = "DARKMODE",
}

type actionProps = {
  payload: string;
  action: actionKind;
};

type contextProps = {
  children: React.ReactNode;
};

type initialStateProps = {
  darkMode: boolean;
};

const initialState = {
  darkMode: false,
};

const reducerFn = (state: initialStateProps, action: actionProps) => {
  if (action.action === actionKind.LIGHTMODE) {
    return { ...state, darkMode: false };
  }

  if (action.action === actionKind.DARKMODE) {
    return { ...state, darkMode: true };
  }

  return initialState;
};

const ContextProvider = ({ children }: contextProps) => {
  const [reducerState, dispatchFn] = useReducer(reducerFn, initialState);

  return (
    <portfolioContext.Provider value={{ darkMode: false }}>
      {children}
    </portfolioContext.Provider>
  );
};

export default ContextProvider;

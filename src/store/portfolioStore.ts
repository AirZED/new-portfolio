import { createContext } from "react";

type MyContextValue = {};

const portfolioContext = createContext<MyContextValue | undefined>(undefined);

export default portfolioContext;

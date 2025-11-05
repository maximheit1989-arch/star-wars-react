import { createContext, useContext } from "react";

export const PageContext = createContext();

export const usePage = () => useContext(PageContext);

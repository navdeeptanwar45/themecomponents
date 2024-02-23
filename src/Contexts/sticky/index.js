import { createContext, useContext, useMemo, useReducer } from "react";
import { actionCreator } from "./action";
import { initialState, reducer } from "./reducer";

export const StickyContext = createContext();

function StickyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return (
    <StickyContext.Provider value={value}>{children}</StickyContext.Provider>
  );
}

export const useStickyContext = () => {
  const context = useContext(StickyContext);
  if (!context) console.log("stickycontext not found");
  const [state, dispatch] = context;
  const actions = actionCreator(dispatch);
  return [state, actions];
};

export default StickyContextProvider;

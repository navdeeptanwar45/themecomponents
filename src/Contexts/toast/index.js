import { createContext, useContext, useMemo, useReducer, useState } from "react";
import { createActions } from "./action";
import { contextReducer,initialState } from "./reducer";

export const ToastContext = createContext();

function ToastContextProvider({ children }) {
    const [state, dispatch] = useReducer(contextReducer, initialState);
    const value = useMemo(()=>[state,dispatch],[state])
    return (
        <ToastContext.Provider value={value}>
        {children}
        </ToastContext.Provider>
    );
}
export const useToastContext = () =>{
    const context = useContext(ToastContext);
    if(!context){
        console.log("wrong context")
    }
    const [state, dispatch] = context;
    const ToastContextAction = createActions(dispatch)
    return {state, ToastContextAction};
}

export default ToastContextProvider;

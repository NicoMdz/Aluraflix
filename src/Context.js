import React, { createContext } from "react";


export const Context = createContext ();

export const Provider = ({ children }) => {
    const values = {
        count: 5,
    };

    return (
        <Context.Provider value={values}>{children}</Context.Provider>
    )
}
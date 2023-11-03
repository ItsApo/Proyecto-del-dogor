import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => { 
    
    const [accounts, setAccounts] = useState([]);
    const [cars, setCars] = useState([]);
    const [rents, setRents] = useState([]);

    return (
        
        <AppContext.Provider value={{ accounts, setAccounts, cars, setCars, rents, setRents }}>
            {children}
        </AppContext.Provider>

    );
};

export const useAppContext = () => useContext(AppContext);
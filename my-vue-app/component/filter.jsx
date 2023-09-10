import { useState, createContext, useContext } from "react";

const filterContext = createContext();

export const FilterProvider = ({children}) => {
    const [selectEcosystem,setSelectEcosystem] = useState([]);
    const [selectProvinces,setSelectProvinces] = useState([]);

    return(
        <filterContext.Provider value={{
        selectEcosystem,
        setSelectEcosystem,
        selectProvinces,
        setSelectProvinces
         }}>
            {children}
        </filterContext.Provider>
    );
};

export const useFilter = () =>{
    return useContext(filterContext);
};
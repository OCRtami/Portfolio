import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({children}){

    const [data,setData] = useState(null);

    const fetchdata = async() =>{
        const data = await fetch("/data.json");
        const res = await data.json();

        if(!res.ok){
            setData(res.projets)
        } else{
            console.log("err")
        }              
    }

    
    useEffect(() => {
        fetchdata();
    }, []); // Dépendance vide pour exécuter une seule fois au montage



    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContext;
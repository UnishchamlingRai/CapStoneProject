
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocument } from '../utils/firebase/firebase';
import { gql,useQuery } from "@apollo/client";

export const CategoriesContext=createContext({
    categoriesMap:{},

})

const COLLECTIONS=gql`
query{
    collections{
        id
        title
        items{
            id
            name
            price
            imageUrl
        }
    }
}
`

export const CategoriesProvider=({children})=>{
    const {loading,error,data}=useQuery(COLLECTIONS)
    console.log("DAta :",data)

    // useEffect(()=>{
    //     const getCategoriesMap=async ()=>{
    //         const categoryMap=await getCategoriesAndDocument()
    //         console.log("Map:",categoryMap)
    //         setCategories(categoryMap)
        
    //     }
    //     getCategoriesMap()
    // },[])

    const [categoriesMap,setCategories]=useState({})
    const value={categoriesMap}
   return  <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
}
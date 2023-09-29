
// import { createContext, useEffect, useState } from "react";
// import { getCategoriesAndDocument } from '../utils/firebase/firebase';

// export const CategoriesContext=createContext({
//     categoriesMap:{},

// })



// export const CategoriesProvider=({children})=>{

//     useEffect(()=>{
//         const getCategoriesMap=async ()=>{
//             const categoryMap=await getCategoriesAndDocument()
//             console.log("Map:",categoryMap)
//             setCategories(categoryMap)
        
//         }
//         getCategoriesMap()
//     },[])

//     const [categoriesMap,setCategories]=useState({})
//     const value={categoriesMap}
//    return  <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
// }
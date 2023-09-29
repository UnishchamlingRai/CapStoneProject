import React from "react";

import CategoryPreview from "../../container/Category-Preview/CategoryPreview";
import {useSelector} from 'react-redux'
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector";
import SpennerLoading from "../../container/SpennerLoading/SpennerLoading";
// import { setCategoriesSelector } from "../../store/categories/categories.selector";

const CategoriesPrevews = () => {
 const categoriesMap=useSelector(selectCategoriesMap)
 const IsLoading=useSelector(selectIsLoading)
 console.log("hello Categoruyesjdjflkdjflk")
  return (
    <>
      {IsLoading?<SpennerLoading />:<> {Object.keys(categoriesMap).map((title,index) => {
        const product=categoriesMap[title]
        return ( 
          <CategoryPreview key={title} title={title} product={product} />
        );
      })}</>}
    </>
  );
};

export default CategoriesPrevews;

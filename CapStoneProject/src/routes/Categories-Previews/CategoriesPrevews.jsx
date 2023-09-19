import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../Context/CategoriesContext";
import CategoryPreview from "../../container/Category-Preview/CategoryPreview";
const CategoriesPrevews = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <>
      {Object.keys(categoriesMap).map((title,index) => {
        const product=categoriesMap[title]
        return ( 
          <CategoryPreview key={title} title={title} product={product} />
        );
      })}
    </>
  );
};

export default CategoriesPrevews;

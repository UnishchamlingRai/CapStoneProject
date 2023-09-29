import {  useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../container/Product-Card/ProductCard';
import {useSelector} from 'react-redux'

import './Category.scss'
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';
import SpennerLoading from '../../container/SpennerLoading/SpennerLoading';
// import { setCategoriesSelector } from '../../store/categories/categories.selector';

const Category = () => {
  const { category } = useParams();
  // console.log("render/re-render categories components")
const categoriesMap=useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  const IsLoading=useSelector(selectIsLoading)
  // const IsLoading=useSelector((state)=>state.categories.isLoading)

  // console.log("IsLoading:",IsLoading)

  useEffect(() => {
    // console.log("Effect fired calling setproducts")
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {IsLoading? <SpennerLoading />:<>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      </>}
      
    </Fragment>
  );
};

export default Category;
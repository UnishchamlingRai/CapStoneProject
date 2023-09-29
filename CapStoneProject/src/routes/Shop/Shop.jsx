import {Route,Routes} from 'react-router-dom'
import CategoriesPrevews from '../Categories-Previews/CategoriesPrevews';
import Category from '../Category/Category';
// import { getCategoriesAndDocument } from '../../utils/firebase/firebase';
import {useDispatch} from 'react-redux'
import { fetchCategoriesAsync } from '../../store/categories/categories.action';
import { useEffect } from 'react';
const Shop = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    // const getCategoriesMap=async ()=>{
    //     const categoryMap=await getCategoriesAndDocument()
    //     // console.log("Map:",categoryMap)
    //     dispatch(setCategoriesAction(categoryMap))
    // }
    // getCategoriesMap()
    dispatch(fetchCategoriesAsync())
},[])

  return (
    <>
    <Routes>
      <Route index element={<CategoriesPrevews />} />
      <Route path=':category' element={<Category />} />
    </Routes>
    </>
  );
};

export default Shop;

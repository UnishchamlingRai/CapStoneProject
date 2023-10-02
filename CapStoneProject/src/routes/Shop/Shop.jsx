import {Route,Routes} from 'react-router-dom'
import CategoriesPrevews from '../Categories-Previews/CategoriesPrevews';
import Category from '../Category/Category';
// import { getCategoriesAndDocument } from '../../utils/firebase/firebase';
import {useDispatch} from 'react-redux'
import {  fetchCategoriesStart } from '../../store/categories/categories.action';
import { useEffect } from 'react';
const Shop = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchCategoriesStart())
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

import {Route,Routes} from 'react-router-dom'
import CategoriesPrevews from '../Categories-Previews/CategoriesPrevews';
import Category from '../Category/Category';
const Shop = () => {
 
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

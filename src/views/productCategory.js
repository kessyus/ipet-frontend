import ProductByCategory from '../components/product/listcategory';
import { useParams } from 'react-router-dom';

const ProductCategory = (props) => {
  const { id } = useParams();
  return <ProductByCategory id={id} />;
};

export default ProductCategory;
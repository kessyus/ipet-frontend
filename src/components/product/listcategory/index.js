import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProductByCategory } from '../../../services/product.service';
import Card from '../../card';

const ProductByCategory = ({ id }) => {

  const [product, setProduct] = useState({});

  const getProduct = useCallback(async () => {
    try {
      const res = await getAllProductByCategory(id);
      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return  (
    <>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Explore os nossos serviços</h2>
      <p className="mt-2 mb-6 text-center text-sm text-gray-600">
        Ou volte para a lista de categorias{' '}
        <Link to="/product" className="font-medium text-indigo-600 hover:text-indigo-500">
          clicando aqui
        </Link>
      </p>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="flex flex-row flex-wrap w-300">
        {(product && product.length) ? (
          product && product.map((item) => (
            <Card key={item.id} url={item.url} nome={item.supplierName} servico={item.nome} descricao={item.descricao} preco={parseFloat(item.preco).toFixed(2)} />
          ))) : ('')
        }
      </div>

    </>
  )
}

export default ProductByCategory;
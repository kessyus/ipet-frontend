import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../services/category.service';

const Service = () => {
  const [category, setCategory] = useState({});

  const getCategory = useCallback(async () => {
    try {
      const res = await getAllCategories();
      setCategory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Explore os nossos serviços</h2>
      <p className="mt-2 mb-6 text-center text-sm text-gray-600">
        Mais comodidade para os seus peludinhos!
      </p>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {category && category.length ? (
        category && category.map((item) => (
            <div key={item._id} className="mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={item.url} alt="" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Serviços</div>
                <Link to={'/product/' + item._id} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.nome}</Link>
                <p className="mt-2 text-gray-500">{item.descricao}</p>
              </div>
            </div>
          </div>
       ))) : ('') 
      }
    </>
  )
};

export default Service;
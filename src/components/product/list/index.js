import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllProductBySupplier } from '../../../services/product.service';
import moment from 'moment';
import 'moment/locale/pt-br.js';
import { Link } from 'react-router-dom';

const ProductBySupplierList = () => {
  const userId = useSelector((state) => state.auth.user.id);
  const [product, setProduct] = useState({});

  const getProduct = useCallback(async () => {
    try {
      const res = await getAllProductBySupplier(userId);
      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Administração de Produtos</h2>
      <p className="mt-2 mb-6 text-center text-sm text-gray-600">
        Caso queira criar um novo produto{' '}
        <Link to="new_product" className="font-medium text-indigo-600 hover:text-indigo-500">
          clique aqui
        </Link>
      </p>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Imagem
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Descrição
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Preço
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Criação
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product && product.length ? (
                  product && product.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <img
                              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                              src={item.url}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.nome}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.descricao}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{'R$ '}{parseFloat(item.preco).toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {moment(item.createdAt).startOf('hour').fromNow()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            <span className="cursor-pointer px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Ativo
                            </span>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sem produtos cadastrados.</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductBySupplierList;
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createProduct } from '../../../services/product.service';
import { toastr } from 'react-redux-toastr';
import history from '../../../config/history';
import FileUploader from '../../uploader';
import { getAllCategories } from '../../../services/category.service';

const Products = () => {

  const userId = useSelector((state) => state.auth.user.id);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleChange = (props) => {
    const { value, name } = props.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitForm = (props) => {
    const formData = new FormData();
    const { nome, descricao, preco, category } = form;
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("preco", preco);
    formData.append("file", selectedFile);
    formData.append("category", category);
    formData.append("supplier", userId);

    setLoading(true);

    createProduct(formData)
      .then(() => {
        toastr.success('Produto', 'Produto criado com sucesso!');
        history.push('/productlist');
      })
      .catch((err) => {
        toastr.error('Produto', 'Erro ao criar o produto. Verifique se os campos obrigatórios foram preenchidos.');
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-900">Novo produto</h2>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Produto</h3>
              <p className="mt-1 text-sm text-gray-600">É essencial que você informe uma descrição detalhada para facilitar o entendimento dos usuários.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden" noValidate>
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
                        Preço
                      </label>
                      <input
                        type="text"
                        name="preco"
                        value={form.preco || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                        Descrição
                      </label>
                      <input
                        type="text"
                        name="descricao"
                        value={form.descricao || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Estado
                      </label>
                      <select
                        name="category"
                        value={form.category || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                      {category && category.length ? (
                      category && category.map((item) => (
                        <option key={item.id} value={item.id}>{item.nome}</option>
                      ))) : ''}
                      </select>
                    </div>

                    <FileUploader 
                      onFileSelectSuccess={(file) => setSelectedFile(file)} 
                      onFileSelectError={({ error }) => toastr.error('Arquivo', error)}
                    />  

                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={submitForm}
                    disabled={loading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;
import React, { useState } from 'react';
import { createCategories } from '../../services/category.service';
import { toastr } from 'react-redux-toastr';
import history from '../../config/history';
import FileUploader from '../uploader';

const Categories = () => {

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (props) => {
    const { value, name } = props.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitForm = (props) => {
    const formData = new FormData();
    const { nome, descricao } = form;
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("status", 'true');
    formData.append("file", selectedFile);

    setLoading(true);

    createCategories(formData)
      .then(() => {
        toastr.success('Categorias', 'Categoria criada com sucesso!');
        history.push('/');
      })
      .catch((err) => {
        toastr.error('Categorias', 'Erro ao criar a categoria. Verifique se os campos obrigatórios foram preenchidos.');
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-900">Nova categoria</h2>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Categoria</h3>
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
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Descrição
                      </label>
                      <input
                        type="text"
                        name="descricao"
                        value={form.descricao || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    {/* <input accept="image/*" type="file" name="file" required onChange={(e) => setSelectedFile(e.target.files[0])} /> */}
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

export default Categories;
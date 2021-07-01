import React, { useState } from 'react';
import { createUsers } from '../../../services/supplier.service';
import { toastr } from 'react-redux-toastr';
import history from '../../../config/history';
import { Link } from 'react-router-dom';
import State from '../../states';

const Supplier = () => {

  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(false);

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    setLoading(true);
    const data = { ...form };
    createUsers(data)
      .then(() => {
        toastr.success('Usuário', 'Usuário criado com sucesso!');
        history.push('/supplierapproval');
      })
      .catch((err) => {
        toastr.error('Usuário', 'Erro ao criar o usuário. Verifique se os campos obrigatórios foram preenchidos.');
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Seja um Fornecedor</h2>
      <p className="mt-2 mb-6 text-center text-sm text-gray-600">
        Ou volte para a sua criar conta de cliente{' '}
        <Link to="new_customer" className="font-medium text-indigo-600 hover:text-indigo-500">
          clicando aqui
        </Link>
      </p>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Informações pessoais</h3>
              <p className="mt-1 text-sm text-gray-600">Lembre-se de cadastrar o seu endereço de trabalho.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                        Nome completo
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
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={form.email || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div className="col-span-6">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <input
                        type="password"
                        name="senha"
                        value={form.senha || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        autoComplete="password"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="documento" className="block text-sm font-medium text-gray-700">
                        Documento
                      </label>
                      <input
                        type="documento"
                        name="documento"
                        value={form.documento || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        autoComplete="documento"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="contato" className="block text-sm font-medium text-gray-700">
                        Contato
                      </label>
                      <input
                        type="contato"
                        name="contato"
                        value={form.contato || ''}
                        onChange={handleChange}
                        disabled={loading}
                        required
                        autoComplete="contato"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="rua" className="block text-sm font-medium text-gray-700">
                        Endereço
                      </label>
                      <input
                        type="text"
                        name="rua"
                        autoComplete="address"
                        value={form.rua || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <input
                        type="text"
                        name="numero"
                        autoComplete="number"
                        value={form.numero || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">
                        Complemento
                      </label>
                      <input
                        type="text"
                        name="complemento"
                        value={form.complemento || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <State value={form.estado || ''} change={handleChange} disabled={loading} />

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
                        Cidade
                      </label>
                      <input
                        type="text"
                        name="cidade"
                        value={form.cidade || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
    
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
                        CEP
                      </label>
                      <input
                        type="text"
                        name="cep"
                        value={form.cep || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
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

export default Supplier;
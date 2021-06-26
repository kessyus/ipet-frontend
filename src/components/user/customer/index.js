import React, { useState } from 'react';
import { createUsers } from '../../../services/customer.service';
import { toastr } from 'react-redux-toastr';
import history from '../../../config/history';

const Customer = () => {

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
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        toastr.error('Usuário', 'Erro ao criar o usuário. Verifique se os campos obrigatórios foram preenchidos.');
        setLoading(false);
      });
  };

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Informações pessoais</h3>
              <p className="mt-1 text-sm text-gray-600">Lembre-se de usar o endereço em que o seu pet reside.</p>
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

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                        Estado
                      </label>
                      <input
                        type="text"
                        name="estado"
                        value={form.estado || ''}
                        onChange={handleChange}
                        disabled={loading}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Seu pet</h3>
              <p className="mt-1 text-sm text-gray-600">
                Não se esqueça de incluir uma foto do seu bichinho.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6">
                    <label htmlFor="nome_pet" className="block text-sm font-medium text-gray-700">
                      Nome do Pet
                    </label>
                    <input
                      type="text"
                      name="nome_pet"
                      value={form.nome_pet || ''}
                      onChange={handleChange}
                      disabled={loading}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
                      Tipo
                    </label>
                    <select
                      name="tipo"
                      value={form.tipo || ''}
                      onChange={handleChange}
                      disabled={loading}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                    <label htmlFor="nascimento" className="block text-sm font-medium text-gray-700">
                      Nascimento
                    </label>
                    <input
                      type="date"
                      name="nascimento"
                      value={form.nascimento || ''}
                      onChange={handleChange}
                      disabled={loading}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label htmlFor="raca" className="block text-sm font-medium text-gray-700">
                      Raça
                    </label>
                    <input
                      type="text"
                      name="raca"
                      value={form.raca || ''}
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customer;
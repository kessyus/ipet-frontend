import { Link } from 'react-router-dom';

const SupplierUnderApproval = () => {
  return (
    <> 
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Conta criada com sucesso!</h2>
      <p className="mt-2 mb-6 text-center text-sm text-gray-600">
        Parabéns! Você deu o primeiro passo para trabalhar como um fornecedor iPet.<br />
        Aguarde o e-mail da nossa equipe autorizando a sua conta para acessar a plataforma.<br />
        Para retornar a página inicial{' '}
        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
          clique aqui.
        </Link>
      </p>
    </>
  );
};

export default SupplierUnderApproval;
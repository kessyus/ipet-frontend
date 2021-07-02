import { Link } from 'react-router-dom';

const Card = ({ url, nome, servico, descricao, preco }) => {

  return (
    <>
      <div className="m-4 bg-white rounded shadow-md">
        <img className="h-64 w-full object-cover md:w-64 rounded" src={url} alt="imgAlt" />
        <div className="mt-2">
          <div className="p-2 pb-4">
            <div className="ml-3 text-xs text-gray-600 uppercase font-bold">{nome}</div>
            <div className="font-bold text-gray-700 leading-snug">
              <Link to="" className="ml-3 hover:underline">{servico}</Link>
            </div>
            <div className="mt-2 ml-3 w-56 text-sm text-gray-600">{descricao}</div>
            <div className="mt-2 ml-3 text-sm text-gray-600">R$ {preco}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-200">
      <div className="p-6 max-w-xl w-full bg-white rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">
          Bem-vindo ao <span className="text-indigo-700">Conselho do Dia</span>
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Receba conselhos sábios para melhorar o seu dia.
        </p>
        <div className="text-center">
          <Link
            to="/favoritos"
            className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Ver Conselho
          </Link>
        </div>
      </div>
    </div>
  );
}


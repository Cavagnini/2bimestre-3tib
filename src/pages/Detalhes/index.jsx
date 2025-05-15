import { Link } from "react-router-dom";

export default function Detalhes() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-200">
      <div className="p-6 max-w-xl w-full bg-white rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">Acabou por hoje!</h1>
        <p className="text-xl text-gray-700 mb-4">Volte amanhã para mais conselhos! 😊</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

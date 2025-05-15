import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Favoritos() {
  const [advice, setAdvice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const salvo = localStorage.getItem("conselho");
      if (salvo) {
        const obj = JSON.parse(salvo);
        if (obj && typeof obj.advice === "string") {
          setAdvice(obj.advice);
        }
      }
    } catch (error) {
      console.error("Erro ao carregar conselho:", error);
    }
  }, []);

  function handleContinuar() {
    navigate("/detalhes/1");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-200 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Seu Conselho</h1>
        {advice ? (
          <p className="text-xl text-gray-700 font-medium mb-8">"{advice}"</p>
        ) : (
          <p className="text-gray-500 mb-8">Nenhum conselho disponível.</p>
        )}
        <button
          onClick={handleContinuar}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

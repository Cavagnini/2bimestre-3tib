import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Detalhes() {
  const [paises, setPaises] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar países");
        return res.json();
      })
      .then((data) => {
        setPaises(data.slice(0, 12));
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar países:", err);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-100">
        <p className="text-lg text-gray-700">Carregando países...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-200 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Lista de Países</h1>
      <ul className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {paises.map((pais, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-xl shadow-md text-center"
          >
            <img
              src={pais.flags?.svg || pais.flags?.png || ""}
              alt={`Bandeira de ${pais.name?.common || "país desconhecido"}`}
              className="w-20 h-auto mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{pais.name?.common || "Sem nome"}</h2>
            <p className="text-sm text-gray-600">
              Capital: {pais.capital?.[0] || "Desconhecida"}
            </p>
            <p className="text-sm text-gray-600">
              Região: {pais.region || "Não informada"}
            </p>
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="mt-10 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
      >
        Voltar para Home
      </Link>
    </div>
  );
}

import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import Detalhes from "../pages/Detalhes";

export default function AppRoutes() {
  return (
    <>
      <nav className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 flex justify-center gap-8 sm:flex-col sm:gap-4">
        <Link to="/" className="text-white text-xl font-semibold hover:text-gray-300 transition duration-300 transform hover:scale-105">
          Home
        </Link>
        <Link to="/favoritos" className="text-white text-xl font-semibold hover:text-gray-300 transition duration-300 transform hover:scale-105">
          Conselho
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </>
  );
}

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes" element={<Detalhes />} />
    </Routes>
  );
}

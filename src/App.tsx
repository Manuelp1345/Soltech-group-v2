import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Recursos from "./pages/Recursos";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";
import Vision from "./pages/vision";
import { createContext, useState } from "react";

export const Language = createContext(null);

function App() {
  const [language, setLanguage] = useState("english");

  return (
    //@ts-ignore
    <Language.Provider value={{ language, setLanguage }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="vision" element={<Vision />} />
        <Route path="lo-que-hacemos" element={<Servicios />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="lab" element={<Laboratorio />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </Language.Provider>
  );
}

export default App;

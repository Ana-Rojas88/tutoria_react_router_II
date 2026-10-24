import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Registro from "./views/Registro";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import Personajes from "./components/Personajes";
import { InfoProduct } from "./views/InfoProduct";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
    const { token } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/productos-carrito" element={<Cart />} />

         {/* Rutas públicas: solo si no hay sesión */}
        <Route
          path="/registro"
          element={!token ? <Registro /> : <Navigate to="/home" />}
        />

        <Route
          path="/"
          element={!token ? <Login /> : <Navigate to="/home"  />}
        />

        {/* Rutas privadas: requieren token */}
        <Route
          path="/perfil"
          element={token ? <Profile /> : <Navigate to="/" />}
        />

        <Route
          path="/personajes/:id"
          element={token ? <Personajes /> : <Navigate to="/" />}
        />

        <Route
          path="/info-producto/:id"
          element={token ? <InfoProduct /> : <Navigate to="/" />}
        />

        {/* Ruta para páginas inexistentes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

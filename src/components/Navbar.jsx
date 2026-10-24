import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        MiApp
      </Link>

      <div className="navbar-links">
   <NavLink className={setActiveClass} to="/home">
          Home
        </NavLink>

        {token ? (
          <>
            <NavLink className={setActiveClass} to="/perfil">
              Mi Perfil
            </NavLink>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
        <>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "no-active")}
        >
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/registro">
          Registro
        </NavLink>
        </>
        )}
          <NavLink className={setActiveClass} to="/productos-carrito">
          🛒
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

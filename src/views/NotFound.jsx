import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="https://franklinbelen.com/wp-content/uploads/cual-es-el-error-404-not-fund.jpg"
        alt="Página no encontrada"
      />

      <h1>¡Ups! Página no encontrada</h1>

      <p>
        La página que buscas no existe.
      </p>

      <Link to="/" className="btn-inicio">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
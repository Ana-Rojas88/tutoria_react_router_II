import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Crear cuenta</h1>
        <p>Regístrate para comenzar</p>

        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit" className="auth-button">
            Registrarme
          </button>
        </form>

        <p className="auth-footer">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
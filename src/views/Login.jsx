import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Bienvenido</h1>
        <p>Inicia sesión en tu cuenta</p>

        <form>
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
            Iniciar sesión
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro">Regístrate</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
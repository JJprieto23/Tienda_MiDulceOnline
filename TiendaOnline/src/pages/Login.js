import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; // Asegúrate de que la ruta del archivo CSS es correcta

function Login() {
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form className="login-form">
                <label htmlFor="username">Correo Electrónico o Nombre de Usuario</label>
                <input type="text" id="username" name="username" required />
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit" className="btn-primary">Iniciar Sesión</button>
                
                <div className="form-options">
                    <Link to="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</Link>
                    <p>¿No tienes una cuenta? <Link to="/register" className="link">Crear cuenta</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;

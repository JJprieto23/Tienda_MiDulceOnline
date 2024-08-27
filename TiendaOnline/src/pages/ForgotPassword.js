import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPassword.css'; // Asegúrate de que la ruta del archivo CSS es correcta

function ForgotPassword() {
    return (
        <div className="forgot-password-container">
            <h2>Recuperar Contraseña</h2>
            <form className="forgot-password-form">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
                
                <button type="submit" className="btn-primary">Recuperar Contraseña</button>
                
                <p>¿Ya recuerdas tu contraseña? <Link to="/login" className="link">Iniciar sesión</Link></p>
            </form>
        </div>
    );
}

export default ForgotPassword;

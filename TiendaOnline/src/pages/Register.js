import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css'; // Asegúrate de que la ruta del archivo CSS es correcta

function Register() {
    return (
        <div className="register-container">
            <h2>Crear Cuenta</h2>
            <form className="register-form">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="username">Nombre de Usuario</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="phone">Número Telefónico</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm-password">Repetir Contraseña</label>
                <input type="password" id="confirm-password" name="confirm-password" required />

                <button type="submit" className="btn-primary">Crear Cuenta</button>

                <div className="form-options">
                    <p>¿Ya tienes una cuenta? <Link to="/login" className="link">Iniciar sesión</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Register;

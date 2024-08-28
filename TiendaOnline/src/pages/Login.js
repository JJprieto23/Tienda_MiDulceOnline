import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';

function Login({ onLogin }) {
    const [loginData, setLoginData] = useState({
        usernameOrEmail: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:4000/users');
            const user = response.data.find(
                user =>
                    (user.username === loginData.usernameOrEmail || user.email === loginData.usernameOrEmail) &&
                    user.password === loginData.password
            );

            if (user) {
                // Guardar ID del usuario en localStorage
                localStorage.setItem('userId', user.id);
                localStorage.setItem('isAuthenticated', 'true'); // Establecer autenticación en localStorage
                onLogin(); // Actualizar estado en App.js
                navigate('/'); // Redirigir al home
            } else {
                setError('Credenciales incorrectas. Inténtalo nuevamente.');
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
            setError('Hubo un problema con el servidor. Inténtalo más tarde.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="usernameOrEmail">Correo Electrónico o Nombre de Usuario</label>
                <input
                    type="text"
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    value={loginData.usernameOrEmail}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="password">Contraseña</label>
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                
                <button type="submit" className="btn-primary">Iniciar Sesión</button>
                
                {error && <p className="error">{error}</p>}

                <div className="form-options">
                    <Link to="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</Link>
                    <p>¿No tienes una cuenta? <Link to="/register" className="link">Crear cuenta</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;

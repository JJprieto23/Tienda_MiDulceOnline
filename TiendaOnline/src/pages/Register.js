import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
            return;
        }

        try {
            // Registrar el nuevo usuario
            const response = await axios.post('http://localhost:4000/users', {
                email: formData.email,
                username: formData.username,
                phone: formData.phone,
                password: formData.password,
            });

            // Obtener el ID del usuario registrado
            const userId = response.data.id;
            // Almacenar el ID del usuario en localStorage
            localStorage.setItem('userId', userId);

            // Redirigir al Home
            navigate('/');
        } catch (err) {
            setError('Hubo un problema al registrar tu cuenta. Intenta nuevamente.');
        }
    };

    return (
        <div className="register-container">
            <h2>Crear Cuenta</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="username">Nombre de Usuario</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Número Telefónico</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirm-password">Repetir Contraseña</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="btn-primary">Crear Cuenta</button>

                <div className="form-options">
                    <p>¿Ya tienes una cuenta? <Link to="/login" className="link">Iniciar sesión</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Register;

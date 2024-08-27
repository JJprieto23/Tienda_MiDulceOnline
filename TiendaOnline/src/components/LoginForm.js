import React, { useState } from 'react';

function LoginForm() {
  const [loginData, setLoginData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Login Data:', loginData);
  };

  return (
    <div className="auth-page">
      <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameOrEmail">Correo electrónico o Nombre de Usuario:</label>
        <input
          type="text"
          id="usernameOrEmail"
          name="usernameOrEmail"
          value={loginData.usernameOrEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    </div>
  );
}

export default LoginForm;

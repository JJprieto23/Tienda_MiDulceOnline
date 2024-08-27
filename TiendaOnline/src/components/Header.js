import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Icono del carrito de compras
import { IoIosSearch } from 'react-icons/io';  // Icono de búsqueda
import colombiaFlag from '../assets/colombia-flag.png';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta del archivo es correcta
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <img src={logo} alt="Mi Dulce Online Logo" className="logo" /> {/* Cambia la ruta si es necesario */}
                <h1>Mi Dulce Online</h1>
                <div className="header-actions">
                    <img src={colombiaFlag} alt="Bandera de Colombia" className="flag" />
                    <div className="search-bar">
                        <input type="text" placeholder="Buscar..." />
                        <IoIosSearch className="search-icon" />
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <nav className="main-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/categories">Categorías</Link>
                    <Link to="/best-sellers">Productos Más Vendidos</Link>
                    <Link to="/offers">Ofertas</Link>
                </nav>
                <nav className="account-nav">
                    <Link to="/register">Crear Cuenta</Link>
                    <Link to="/login">Ingresar</Link>
                    <Link to="/my-purchases">Mis Compras</Link>
                    <Link to="/sell">Vender</Link>
                    <Link to="/history">Historial</Link>
                    <Link to="/cart">
                        <FaShoppingCart className="cart-icon" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import colombiaFlag from '../assets/colombia-flag.png';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header({ isAuthenticated, onLogout, cartItems, onCartClick, hideCartIcon }) {
    return (
        <>
            <header className="header">
                <div className="header-top">
                    <img src={logo} alt="Mi Dulce Online Logo" className="logo" />
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
                        <Link to="/products">Ver Productos</Link>
                    </nav>
                    <nav className="account-nav">
                        {isAuthenticated ? (
                            <>
                                <Link to="/profile">Perfil</Link>
                                <Link to="/sell">Vender</Link>
                                <Link to="/cart">Carrito</Link>
                                <button onClick={onLogout} className="logout-btn">Cerrar Sesión</button>
                            </>
                        ) : (
                            <>
                                
                                <Link to="/login">Ingresar</Link>
                                <Link to="/register">Crear Cuenta</Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            {!hideCartIcon && (
                <div className="cart-icon-container" onClick={onCartClick}>
                    <FaShoppingCart className="cart-icon" />
                    {cartItems.length > 0 && (
                        <span className="cart-count">{cartItems.length}</span>
                    )}
                </div>
            )}
        </>
    );
}

export default Header;

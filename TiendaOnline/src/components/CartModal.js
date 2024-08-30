import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CartModal.css';
import { FaTrashAlt } from 'react-icons/fa';

function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart, isAuthenticated, showAlert }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleViewCart = () => {
        if (isAuthenticated) {
            onClose(); // Cerrar el modal antes de redirigir
            navigate('/cart');
        } else {
            showAlert('Debes iniciar sesión antes de hacer una compra.', 'error');
            onClose(); // Cerrar el modal
            navigate('/login');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-btn">X</button>
                <h2>Tu Carrito</h2>
                {cartItems.length > 0 ? (
                    <ul className="cart-items-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-price">${item.price} <span className="cart-item-discount">({item.discount}% off)</span></p>
                                </div>
                                <button onClick={() => onRemoveFromCart(item.id)} className="remove-item-btn">
                                    <FaTrashAlt />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Tu carrito está vacío.</p>
                )}
                <button className="view-cart-btn" onClick={handleViewCart}>Continuar Compra</button>
            </div>
        </div>
    );
}

export default CartModal;

import React, { useState } from 'react';
import '../styles/Cart.css';
import { FaTrashAlt } from 'react-icons/fa';
import Alert from '../components/Alert'; 
import axios from 'axios';

// Función para formatear números con separadores de miles
const formatPrice = (price) => {
    return price.toLocaleString('es-ES', { style: 'currency', currency: 'COL' }).replace('$', '');
};

function Cart({ cartItems, onRemoveFromCart }) {
    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = 1; // Inicializa la cantidad en 1 para cada producto
            return acc;
        }, {})
    );

    const [alert, setAlert] = useState(null);

    // Función para manejar la disminución de cantidad
    const handleDecrease = (id) => {
        setQuantities((prevQuantities) => {
            const newQuantity = Math.max(prevQuantities[id] - 1, 1); 
            return { ...prevQuantities, [id]: newQuantity };
        });
    };

    // Función para manejar el incremento de cantidad
    const handleIncrease = (id, stock) => {
        setQuantities((prevQuantities) => {
            if (prevQuantities[id] >= stock) {
                // Mostrar alerta si intenta añadir más productos que el stock disponible
                setAlert({ message: `No puedes añadir más de ${stock} unidades al carrito.`, type: 'error' });
                return prevQuantities;
            }
            return { ...prevQuantities, [id]: prevQuantities[id] + 1 };
        });
    };

    // Calcular el precio total con descuento
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + (item.price - (item.price * item.discount / 100)) * quantity;
        }, 0);
    };

    // Calcular el precio total sin descuento
    const calculateTotalPriceWithoutDiscount = () => {
        return cartItems.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + item.price * quantity;
        }, 0);
    };

    // Calcular el descuento total aplicado
    const calculateTotalDiscount = () => {
        return calculateTotalPriceWithoutDiscount() - calculateTotalPrice();
    };

    // Función para actualizar el stock en la base JSON
    const updateStockInDatabase = async () => {
        try {
            const promises = cartItems.map(item => {
                const updatedStock = item.stock - quantities[item.id]; 
                return axios.put(`http://localhost:4000/products/${item.id}`, { ...item, stock: updatedStock });
            });
            await Promise.all(promises);
        } catch (error) {
            console.error("Error actualizando el stock:", error);
        }
    };

    // Manejar la acción de comprar
    const handlePurchase = async () => {
        // Verificar si hay productos con cantidad mayor que el stock o si algún producto tiene 0 en stock
        const outOfStockItems = cartItems.filter(item => item.stock < quantities[item.id]);
        const zeroStockItems = cartItems.filter(item => item.stock === 0);

        if (zeroStockItems.length > 0) {
            setAlert({ message: "Uno o más productos están fuera de stock.", type: "error" });
            return;
        }

        if (outOfStockItems.length > 0) {
            setAlert({ message: "Tienes productos que exceden el stock disponible.", type: "error" });
            return;
        }

        if (window.confirm("¿Estás seguro de que quieres comprar estos productos?")) {
            await updateStockInDatabase();
            setAlert({ message: "Compra realizada", type: "success" });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            setAlert({ message: "Compra rechazada", type: "error" });
        }
    };

    // Cerrar alerta
    const handleCloseAlert = () => {
        setAlert(null);
    };

    return (
        <div className="c-wrapper">
            <div className="c-main-content">
                <div className="c-products">
                    {cartItems.length > 0 ? (
                        <div className="c-product-list">
                            {cartItems.map(item => (
                                <div key={item.id} className="c-product-item">
                                    <div className="p-info">
                                        <img src={item.imageUrl} alt={item.name} className="p-image" />
                                        <div className="p-details">
                                            <h3 className="p-name">{item.name}</h3>
                                            <p className="p-category">Categoría: {item.category}</p>
                                            <p className="p-stock">Stock: {item.stock}</p>
                                            <p className="p-discount">{item.discount}%</p>
                                        </div>
                                        <button onClick={() => onRemoveFromCart(item.id)} className="d-button">
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                    <div className="p-actions">
                                        <button 
                                            className="a-button" 
                                            onClick={() => handleDecrease(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className="q-display">{quantities[item.id]}</span>
                                        <button 
                                            className="a-button" 
                                            onClick={() => handleIncrease(item.id, item.stock)} // Pasamos el stock a la función
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="p-prices">
                                        <p className="p-price">$ {formatPrice(item.price * quantities[item.id])}</p>
                                        <p className="d-price">$ {formatPrice((item.price - (item.price * item.discount / 100)) * quantities[item.id])}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Tu carrito está vacío.</p>
                    )}
                </div>
                <div className="c-summary">
                    <h3>Resumen de Compra</h3>
                    <div className="s-details">
                        <p>Total con Descuento:</p>
                        <p className="t-price"> ${formatPrice(calculateTotalPrice())}</p>
                    </div>
                    <div className="s-details">
                        <p>Total Sin Descuento:</p>
                        <p className="t-price-no-discount">$ {formatPrice(calculateTotalPriceWithoutDiscount())}</p>
                    </div>
                    <div className="s-details">
                        <p>Descuento Aplicado:</p>
                        <p className="discount-applied">$ {formatPrice(calculateTotalDiscount())}</p>
                    </div>
                    <button className="c-button" onClick={handlePurchase}>Comprar</button>
                </div>
            </div>

            {alert && (
                <Alert 
                    message={alert.message} 
                    type={alert.type} 
                    onClose={handleCloseAlert} 
                />
            )}
        </div>
    );
}

export default Cart;

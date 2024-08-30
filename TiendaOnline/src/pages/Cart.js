import React, { useState } from 'react';
import '../styles/Cart.css';
import { FaTrashAlt } from 'react-icons/fa';
import Alert from '../components/Alert'; // Asegúrate de importar el componente de alerta

// Función para formatear números con separadores de miles
const formatPrice = (price) => {
    return price.toLocaleString('es-ES', { style: 'currency', currency: 'COL' }).replace('$', '');
};

function Cart({ cartItems, onRemoveFromCart }) {
    // Estado local para manejar las cantidades de los productos
    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = 1; // Inicializa la cantidad en 1 para cada producto
            return acc;
        }, {})
    );

    // Estado para manejar las alertas
    const [alert, setAlert] = useState(null);

    // Función para manejar la disminución de cantidad
    const handleDecrease = (id) => {
        setQuantities((prevQuantities) => {
            const newQuantity = Math.max(prevQuantities[id] - 1, 1); // Asegura que la cantidad no sea menor a 1
            return { ...prevQuantities, [id]: newQuantity };
        });
    };

    // Función para manejar el incremento de cantidad
    const handleIncrease = (id) => {
        setQuantities((prevQuantities) => {
            const newQuantity = prevQuantities[id] + 1; // Incrementa la cantidad
            return { ...prevQuantities, [id]: newQuantity };
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

    // Manejar la acción de comprar
    const handlePurchase = () => {
        if (window.confirm("¿Estás seguro de que quieres comprar estos productos?")) {
            // Si el usuario confirma, muestra alerta de compra realizada y recarga la página
            setAlert({ message: "Compra realizada", type: "success" });
            setTimeout(() => {
                window.location.reload();
            }, 2000); // Espera 2 segundos antes de recargar para mostrar la alerta
        } else {
            // Si el usuario cancela, muestra alerta de compra rechazada
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
                                            <p className="p-stock">{item.discount}%</p>
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
                                            onClick={() => handleIncrease(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="p-prices">
                                        <p className="p-price">$
                                            {formatPrice(item.price * quantities[item.id])}
                                        </p>
                                        <p className="d-price">$
                                            {formatPrice((item.price - (item.price * item.discount / 100)) * quantities[item.id])}
                                        </p>
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
                        <p className="t-price-no-discount">$
                            {formatPrice(calculateTotalPriceWithoutDiscount())}
                        </p>
                    </div>
                    <div className="s-details">
                        <p>Descuento Aplicado:</p>
                        <p className="discount-applied">$
                            {formatPrice(calculateTotalDiscount())}
                        </p>
                    </div>
                    <button className="c-button" onClick={handlePurchase}>Comprar</button>
                </div>
            </div>

            {/* Mostrar alerta si existe */}
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

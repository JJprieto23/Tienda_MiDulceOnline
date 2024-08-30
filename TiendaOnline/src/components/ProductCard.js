import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ id, name, image, price, discount, stock, category, onAddToCart, onFavorite }) {
    const navigate = useNavigate();
    const [addedToCart, setAddedToCart] = useState(false);
    const [favorited, setFavorited] = useState(false); // Estado para el cambio de color del ícono

    const handleReadMore = () => {
        navigate(`/product-detail/${id}`);
    };

    const handleAddToCart = () => {
        if (!addedToCart) {
            onAddToCart();
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }
    };

    const handleFavorite = () => {
        if (!favorited) {
            onFavorite();
            setFavorited(true); // Activa la animación de color
            setTimeout(() => setFavorited(false), 2000); // Revertir el color después de 2 segundos
        }
    };

    const discountedPrice = (price * (1 - discount / 100)).toFixed(2);

    return (
        <div className={`product-card ${addedToCart ? 'added' : ''}`}>
            {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
            <img src={image} alt="Producto" />
            <div className="product-info">
                <h3>{name}</h3>
                <p className="original-price">Precio: {price} COL</p>
                <p className="discounted-price">{discountedPrice} COL</p>
                <p>Stock: {stock}</p>
                <p>Categoría: {category}</p>
            </div>
            <div className="product-actions">
                <button className="read-more-btn" onClick={handleReadMore}>
                    Leer más
                </button>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <FaShoppingCart />
                </button>
                <button className={`favorite-btn ${favorited ? 'favorited' : ''}`} onClick={handleFavorite}>
                    <FaHeart />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;

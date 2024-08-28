import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ id, name, image, price, discount, stock, category, onAddToCart, onFavorite }) {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/product-detail/${id}`); // Redirige a la página de detalles del producto
    };

    const discountedPrice = (price * (1 - discount / 100)).toFixed(2);

    return (
        <div className="product-card">
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
                <button className="add-to-cart-btn" onClick={onAddToCart}>
                    <FaShoppingCart />
                </button>
                <button className="favorite-btn" onClick={onFavorite}>
                    <FaHeart />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;

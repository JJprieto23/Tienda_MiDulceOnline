import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function ProductCard({ image, price, discount, stock, arrivalDate, store, onAddToCart, onReadMore, onFavorite }) {
    return (
        <div className="product-card">
            {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
            <img src={image} alt="Product" />
            <div className="product-info">
                <h3>{store}</h3>
                <p>Precio: ${price.toFixed(2)}</p>
                <p>Stock: {stock} unidades</p>
                <p>Llega el: {arrivalDate}</p>
            </div>
            <div className="product-actions">
                <button className="read-more-btn" onClick={onReadMore}>
                    Leer más
                </button>
                <button className="add-to-cart-btn" onClick={onAddToCart}>
                    <FaShoppingCart />
                </button>
                <button className="favorite-btn" onClick={onFavorite}><FaHeart /></button>
            </div>
        </div>
    );
}

export default ProductCard;

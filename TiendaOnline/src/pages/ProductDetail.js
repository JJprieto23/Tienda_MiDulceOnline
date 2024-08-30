import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import '../styles/ProductDetail.css';

function ProductDetail({ onAddToCart }) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/products/${productId}`);
                setProduct(response.data);
                // Fetch comments for the product
                const commentsResponse = await axios.get(`http://localhost:4000/comments?productId=${productId}`);
                setComments(commentsResponse.data);
            } catch (err) {
                console.error('Error fetching product data:', err);
            }
        };

        fetchProductData();
    }, [productId]);

    const handleAddToCart = () => {
        if (product) {
            onAddToCart(product); // Llama a la función pasada como prop
        }
    };

    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/comments', {
                productId,
                text: newComment
            });
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (err) {
            console.error('Error adding comment:', err);
        }
    };

    // Helper function to safely handle price
    const formatPrice = (price) => {
        if (typeof price === 'number') {
            return price.toFixed(2);
        }
        return '0.00';
    };

    return (
        <div className='product-detail-body'>
            <div className="product-detail-container">
                {product ? (
                    <div className="product-detail">
                        <div className="product-image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h1>{product.name}</h1>
                            <p><strong>Categoría:</strong> {product.category}</p>
                            <p className="price-old">Precio: ${formatPrice(parseFloat(product.price))}</p>
                            <p className="price-new">
                                Precio con descuento: ${formatPrice(parseFloat(product.price) * (1 - (product.discount || 0) / 100))}
                            </p>
                            {product.discount && (
                                <p className="discount">Descuento: {product.discount}%</p>
                            )}
                            <p className="stock">Stock: {product.stock}</p>
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                <FaShoppingCart /> Añadir al Carrito
                            </button>
                            <div className="product-actions">
                                <p className="product-owner">Producto de: {product.userName || 'Desconocido'}</p>
                                <div className="product-stats">
                                    <p>Ventas: {product.salesCount || 0}</p>
                                </div>
                                <button className="favorites-btn">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Cargando detalles del producto...</p>
                )}
                <div className="comments-section">
                    <h3>Comentarios</h3>
                    <form onSubmit={handleAddComment}>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Escribe un comentario..."
                        />
                        <button type="submit">Enviar</button>
                    </form>
                    <div className="comments-list">
                        {comments.map((comment, index) => (
                            <p key={index}>{comment.text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

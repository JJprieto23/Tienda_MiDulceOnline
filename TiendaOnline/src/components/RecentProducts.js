import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function RecentProducts({ onAddToCart }) {
    const [recentProducts, setRecentProducts] = useState([]);
    const [addedProducts, setAddedProducts] = useState(new Set()); // Estado para productos agregados
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRecentProducts();
    }, []);

    const fetchRecentProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/products');
            setRecentProducts(response.data);
        } catch (err) {
            console.error('Error fetching recent products:', err);
            setError('Error al cargar los productos recientes.');
        }
    };

    const handleAddToCart = (product) => {
        if (!addedProducts.has(product.id)) {
            onAddToCart(product);
            setAddedProducts(new Set(addedProducts).add(product.id)); // Añade el producto al set
        }
    };

    return (
        <div className="recent-products">
            <h2>Productos Agregados Recientemente</h2>
            <div className="product-list">
                {error && <p className="error-message">{error}</p>}
                {recentProducts.length > 0 ? (
                    recentProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.imageUrl}
                            price={product.price}
                            discount={product.discount}
                            stock={product.stock}
                            category={product.category}
                            onAddToCart={() => handleAddToCart(product)}
                            onFavorite={() => console.log(`Añadir ${product.id} a favoritos`)}
                        />
                    ))
                ) : (
                    <p>No hay productos recientes disponibles.</p>
                )}
            </div>
        </div>
    );
}

export default RecentProducts;

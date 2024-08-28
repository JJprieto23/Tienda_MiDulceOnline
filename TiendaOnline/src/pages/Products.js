import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategoriesMenu from '../components/CategoriesMenu'; 
import '../styles/Products.css';

function Products() {
    const [recentProducts, setRecentProducts] = useState([]);
    const [error, setError] = useState('');
    const [filteredCategory, setFilteredCategory] = useState('');

    const fetchRecentProducts = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:4000/products');
            let filteredProducts = response.data;

            // Filtrar los productos por categoría si se ha seleccionado una
            if (filteredCategory) {
                filteredProducts = filteredProducts.filter(product => product.category === filteredCategory);
            }

            setRecentProducts(filteredProducts);
        } catch (err) {
            console.error('Error fetching recent products:', err);
            setError('Error al cargar los productos recientes.');
        }
    }, [filteredCategory]);

    useEffect(() => {
        fetchRecentProducts();
    }, [fetchRecentProducts]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        setFilteredCategory(category);
    }, []);

    return (
        <div className="products-container">
            <CategoriesMenu />
            <div className="recent-products">
                <h2>Todos los Productos</h2>
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
                                onAddToCart={() => console.log(`Añadir ${product.id} al carrito`)}
                                onFavorite={() => console.log(`Añadir ${product.id} a favoritos`)}
                            />
                        ))
                    ) : (
                        <p>No hay productos recientes disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;

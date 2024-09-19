import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom'; // Importar para leer los parámetros de la URL
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategoriesMenu from '../components/CategoriesMenu';
import '../styles/Products.css';

function Products({ onAddToCart }) { 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [filteredCategory, setFilteredCategory] = useState('');

    const location = useLocation();
    
    // Leer la categoría de los parámetros de la URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        setFilteredCategory(category || ''); // Si no hay categoría, muestra todos los productos
    }, [location.search]);

    const fetchProducts = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:4000/products');
            let filteredProducts = response.data;

            // Filtrar los productos por categoría si se ha seleccionado una
            if (filteredCategory) {
                filteredProducts = filteredProducts.filter(product => product.category === filteredCategory);
            }

            setProducts(filteredProducts);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError('Error al cargar los productos.');
        }
    }, [filteredCategory]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="products-container">
            <CategoriesMenu onCategoryClick={setFilteredCategory} />
            <div className="recent-products">
                <h2>{filteredCategory ? `${filteredCategory}` : 'Todos los Productos'}</h2>
                <div className="product-list">
                    {error && <p className="error-message">{error}</p>}
                    {products.length > 0 ? (
                        products.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.imageUrl}
                                price={product.price}
                                discount={product.discount}
                                stock={product.stock}
                                category={product.category}
                                onAddToCart={() => onAddToCart(product)}
                                onFavorite={() => console.log(`Añadir ${product.id} a favoritos`)}
                            />
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;

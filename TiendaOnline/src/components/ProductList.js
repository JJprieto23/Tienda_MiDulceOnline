import React, { useEffect, useState } from 'react';

function ProductList({ filters }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products based on filters
        // Example: fetch(`/api/products?category=${filters.category}&region=${filters.region}&priceRange=${filters.priceRange}`)
        // setProducts(response.data);
    }, [filters]);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                    <a href={`/product/${product.id}`}>Ver detalles</a>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

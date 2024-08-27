import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Asegúrate de que la ruta es correcta

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details by ID
        // Example: fetch(`/api/products/${id}`)
        // setProduct(response.data);
    }, [id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <p>Región: {product.region}</p>
        </div>
    );
}

export default ProductDetails;

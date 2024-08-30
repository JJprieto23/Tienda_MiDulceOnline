import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/SellProduct.css';

const discountOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

function EditProduct() {
    const { productId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        discount: '',
        stock: '',
        category: '',
        imageUrl: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchProductData(productId);
    }, [productId]);

    const fetchProductData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/products/${id}`);
            setFormData(response.data);
        } catch (err) {
            console.error('Error fetching product data:', err);
            setError('Error al cargar los datos del producto.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones similares a las de SellProduct.js
        if (parseFloat(formData.price) < 5000) {
            setError('El precio debe ser al menos 5.000 pesos colombianos.');
            return;
        }

        if (formData.discount && !discountOptions.includes(parseInt(formData.discount))) {
            setError('Descuento no válido. Elige un descuento de la lista.');
            return;
        }

        try {
            await axios.put(`http://localhost:4000/products/${productId}`, formData);
            setSuccess('Producto actualizado exitosamente.');
            navigate('/profile');
        } catch (err) {
            console.error('Error updating product:', err);
            setError('Hubo un problema al actualizar el producto. Inténtalo nuevamente.');
        }
    };

    return (
        <div className="sell-product-container">
            <h2>Editar Producto</h2>
            <form className="sell-product-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre del Producto</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="price">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="discount">Descuento</label>
                <select
                    id="discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                >
                    <option value="">Ninguno</option>
                    {discountOptions.map((discount) => (
                        <option key={discount} value={discount}>{discount}%</option>
                    ))}
                </select>

                <label htmlFor="stock">Cantidad en Stock</label>
                <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="category">Categoría</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="chocolates">Chocolates</option>
                    <option value="gelatinas">Gelatinas</option>
                    <option value="chicles">Chicles</option>
                    <option value="caramelos duros">Caramelos Duros</option>
                    <option value="caramelos blandos">Caramelos Blandos</option>
                    <option value="malvaviscos">Malvaviscos</option>
                    <option value="regaliz">Regaliz</option>
                    <option value="mentas">Mentas</option>
                    <option value="galletas">Galletas</option>
                    <option value="piruletas">Piruletas</option>
                    <option value="turrones">Turrones</option>
                    <option value="gominolas">Gominolas</option>
                </select>

                <label htmlFor="imageUrl">URL de Imagen (PNG)</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    required
                />

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <button type="submit" className="btn-primary">Actualizar Producto</button>
            </form>
        </div>
    );
}

export default EditProduct;

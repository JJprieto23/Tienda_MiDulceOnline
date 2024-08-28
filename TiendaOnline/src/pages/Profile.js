import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import myImgAvatar from '../assets/avatar.png';
import '../styles/Profile.css';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [userProducts, setUserProducts] = useState([]);
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            fetchUserData(userId);
            fetchUserProducts(userId);
        } else {
            navigate('/login');
        }
    }, [userId, navigate]);

    const fetchUserData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/users/${id}`);
            setUserData(response.data);
        } catch (err) {
            console.error('Error fetching user data:', err);
            setError('Error al cargar los datos del usuario.');
        }
    };

    const fetchUserProducts = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:4000/products?userId=${userId}`);
            setUserProducts(response.data);
        } catch (err) {
            console.error('Error fetching user products:', err);
            setError('Error al cargar los productos del usuario.');
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        if (!newPassword) {
            setError('La nueva contraseña no puede estar vacía.');
            return;
        }

        try {
            await axios.patch(`http://localhost:4000/users/${userId}`, {
                password: newPassword
            });
            setSuccess('Contraseña actualizada exitosamente.');
        } catch (err) {
            console.error('Error updating password:', err);
            setError('Error al actualizar la contraseña.');
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:4000/products/${productId}`);
            setUserProducts(userProducts.filter(product => product.id !== productId));
        } catch (err) {
            console.error('Error deleting product:', err);
            setError('Error al eliminar el producto.');
        }
    };

    const handleEditProduct = (productId) => {
        navigate(`/edit-product/${productId}`);
    };

    const handleReadMore = (productId) => {
        navigate(`/product-detail/${productId}`);
    };

    return (
        <div className="profile-container">
            <h2>Perfil del Usuario</h2>
            {userData ? (
                <div className="profile-details">
                    <div className="profile-header">
                        <img src={myImgAvatar} alt="Avatar" className="profile-avatar" />
                        <div className="profile-info">
                            <p className="info"><strong>Nombre de Usuario:</strong> {userData.username}</p>
                            <p className="info"><strong>Email:</strong> {userData.email}</p>
                            <p className="info"><strong>Telefono: </strong> {userData.phone}</p>
                            <p className="info"><strong>Contraseña:</strong> {userData.password}</p>
                            <form onSubmit={handlePasswordChange} className="password-change-form">
                                <label htmlFor="newPassword">Nueva Contraseña:</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                                <button type="submit">Cambiar Contraseña</button>
                            </form>
                            
                            {error && <p className="error-message">{error}</p>}
                            {success && <p className="success-message">{success}</p>}
                        </div>
                    </div>
                    
                    <h3>Mis Productos</h3>
                    <div className="product-list">
                        {userProducts.length > 0 ? (
                            userProducts.map((product) => (
                                <div key={product.id} className="product-card">
                                    <img src={product.imageUrl} alt={product.name} />
                                    <p className='discount-badge'>{product.discount}%</p>
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <p>Precio: {product.price} COL</p>
                                        <p>Stock: {product.stock}</p>
                                        <p>Categoría: {product.category}</p>
                                    </div>
                                    <div className="product-actions">
                                        <button 
                                            className="read-more-btn" 
                                            onClick={() => handleReadMore(product.id)}
                                        >
                                            Leer más
                                        </button>
                                        <button className="edit-btn" onClick={() => handleEditProduct(product.id)}>
                                            <FaEdit />
                                        </button>
                                        <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No has registrado ningún producto.</p>
                        )}
                    </div>
                </div>
            ) : (
                <p>Cargando datos del usuario...</p>
            )}
        </div>
    );
}

export default Profile;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Categories from './pages/Categories';
import BestSellers from './pages/BestSellers';
import Offers from './pages/Offers';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import SellProduct from './pages/SellProduct';
import MyPurchases from './pages/MyPurchases';
import History from './pages/History';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import CartModal from './components/CartModal';
import Alert from './components/Alert';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const [cartItems, setCartItems] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [alert, setAlert] = useState({ message: '', type: '' });

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);

    const handleLogin = () => setIsAuthenticated(true);

    const handleLogout = () => {
        showAlert('Has cerrado sesión exitosamente.', 'success');
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleCartClick = () => {
        setIsCartModalOpen(true);
    };

    const handleCloseCartModal = () => {
        setIsCartModalOpen(false);
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const handleAlertClose = () => {
        setAlert({ message: '', type: '' });
    };

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => {
            handleAlertClose();
        }, 3000);
    };

    return (
        <Router>
            <Header 
                isAuthenticated={isAuthenticated} 
                onLogout={handleLogout} 
                cartItems={cartItems} 
                onCartClick={handleCartClick}
                hideCartIcon={false} // Cambiar a true si quieres ocultar el icono del carrito en ciertas vistas
            />
            {alert.message && <Alert message={alert.message} type={alert.type} onClose={handleAlertClose} />}
            <Routes>
                <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
                <Route path="/sell" element={isAuthenticated ? <SellProduct /> : <Navigate to="/" />} />
                <Route path="/my-purchases" element={isAuthenticated ? <MyPurchases /> : <Navigate to="/" />} />
                <Route path="/history" element={isAuthenticated ? <History /> : <Navigate to="/" />} />
                <Route path="/cart" element={isAuthenticated ? <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> : <Navigate to="/" />} />
                <Route path="/product-detail/:productId" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
                <Route path="/edit-product/:productId" element={<EditProduct />} />
            </Routes>
            <Footer />
            <CartModal 
                isOpen={isCartModalOpen} 
                onClose={handleCloseCartModal} 
                cartItems={cartItems} 
                onRemoveFromCart={handleRemoveFromCart}
                isAuthenticated={isAuthenticated}
                showAlert={showAlert}
            />
        </Router>
    );
}

export default App;

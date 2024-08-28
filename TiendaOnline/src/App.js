import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);

    const handleLogin = () => setIsAuthenticated(true);

    const handleLogout = () => {
        alert('Has cerrado sesión exitosamente.');
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <Router>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login onLogin={handleLogin} />} />
                <Route path="/sell" element={isAuthenticated ? <SellProduct /> : <Login onLogin={handleLogin} />} />
                <Route path="/my-purchases" element={isAuthenticated ? <MyPurchases /> : <Login onLogin={handleLogin} />} />
                <Route path="/history" element={isAuthenticated ? <History /> : <Login onLogin={handleLogin} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product-detail/:productId" element={<ProductDetail />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <Footer></Footer>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import MyPurchases from './pages/MyPurchases';
import Sell from './pages/Sell';
import History from './pages/History';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import BestSellers from './pages/BestSellers';
import Offers from './pages/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/my-purchases" element={<MyPurchases />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/history" element={<History />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/offers" element={<Offers />} />
            </Routes>
        </Router>
    );
}

export default App;

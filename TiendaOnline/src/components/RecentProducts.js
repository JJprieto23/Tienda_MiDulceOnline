import React from 'react';
import ProductCard from './ProductCard';
import myImgJet from '../assets/jet.png'
import myImgBonBonBum from '../assets/Bon Bon Bum.png';
import myImgNucita from '../assets/nucita.png';
import myImgBarrilete from '../assets/barrilete.png';
import myImgChao from '../assets/chao.png';
import myImgXtime from '../assets/xtime.png';
import '../styles/RecentProducts.css';
import { useState, useEffect } from "react";
import axios from "axios";

function RecentProducts() {
    const recentProducts = [
        {
            id: 1,
            image: myImgBonBonBum,
            price: 11.00,
            discount: 10,
            stock: 15,
            arrivalDate: '2024-08-28',
            store: 'Dulces Recientes',
        },
        {
            id: 2,
            image: myImgNucita,
            price: 14.50,
            discount: 12,
            stock: 10,
            arrivalDate: '2024-08-30',
            store: 'Nuevos Sabores',
        },
        {
            id: 5,
            image: myImgJet,
            price: 7.90,
            discount: 5,
            stock: 40,
            arrivalDate: '2024-09-06',
            store: 'Dulces Actuales',
        },
        {
            id: 3,
            image: myImgBarrilete,
            price: 9.75,
            discount: 7,
            stock: 25,
            arrivalDate: '2024-09-02',
            store: 'Recien Llegados',
        },
        {
            id: 4,
            image: myImgChao,
            price: 8.99,
            discount: 18,
            stock: 20,
            arrivalDate: '2024-09-04',
            store: 'Dulces del Sur',
        },
        {
            id: 6,
            image: myImgXtime,
            price: 7.90,
            discount: 5,
            stock: 40,
            arrivalDate: '2024-09-06',
            store: 'Dulces Actuales',
        },
        {
            id: 1,
            image: myImgBonBonBum,
            price: 11.00,
            discount: 10,
            stock: 15,
            arrivalDate: '2024-08-28',
            store: 'Dulces Recientes',
        },
        {
            id: 2,
            image: myImgNucita,
            price: 14.50,
            discount: 12,
            stock: 10,
            arrivalDate: '2024-08-30',
            store: 'Nuevos Sabores',
        },
        {
            id: 5,
            image: myImgJet,
            price: 7.90,
            discount: 5,
            stock: 40,
            arrivalDate: '2024-09-06',
            store: 'Dulces Actuales',
        },
        {
            id: 3,
            image: myImgBarrilete,
            price: 9.75,
            discount: 7,
            stock: 25,
            arrivalDate: '2024-09-02',
            store: 'Recien Llegados',
        },
        {
            id: 4,
            image: myImgChao,
            price: 8.99,
            discount: 18,
            stock: 20,
            arrivalDate: '2024-09-04',
            store: 'Dulces del Sur',
        },
        {
            id: 6,
            image: myImgXtime,
            price: 7.90,
            discount: 5,
            stock: 40,
            arrivalDate: '2024-09-06',
            store: 'Dulces Actuales',
        },
    ];

    return (
        <div className="recent-products">
            <h2>Productos Agregados Recientemente</h2>
            <div className="product-list">
                {recentProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        price={product.price}
                        discount={product.discount}
                        stock={product.stock}
                        arrivalDate={product.arrivalDate}
                        store={product.store}
                        onAddToCart={() => console.log(`Añadir ${product.id} al carrito`)}
                        onReadMore={() => console.log(`Leer más sobre ${product.id}`)}
                        onFavorite={() => console.log(`Añadir ${product.id} a favoritos`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentProducts;

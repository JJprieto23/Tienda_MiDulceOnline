import React from 'react';
import ProductCard from './ProductCard';
import myImgJet from '../assets/jet.png'
import myImgBonBonBum from '../assets/Bon Bon Bum.png';
import myImgNucita from '../assets/nucita.png';
import myImgBarrilete from '../assets/barrilete.png';
import myImgChao from '../assets/chao.png';
import myImgXtime from '../assets/xtime.png';
import '../styles/BestSellers.css';

function BestSellers() {
    const products = [
        {
            id: 1,
            image: myImgBonBonBum,
            price: 10.00,
            discount: 15,
            stock: 20,
            arrivalDate: '2024-09-01',
            store: 'Dulces Colombianos',
        },
        {
            id: 2,
            image: myImgNucita,
            price: 12.50,
            discount: 10,
            stock: 15,
            arrivalDate: '2024-09-05',
            store: 'Delicias del País',
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
            price: 8.75,
            discount: 5,
            stock: 30,
            arrivalDate: '2024-09-10',
            store: 'La Tienda Dulce',
        },
        {
            id: 4,
            image: myImgChao,
            price: 9.99,
            discount: 20,
            stock: 25,
            arrivalDate: '2024-09-15',
            store: 'Sabor Tropical',
        },
        {
            id: 6,
            image: myImgXtime,
            price: 7.50,
            discount: 8,
            stock: 50,
            arrivalDate: '2024-09-20',
            store: 'Dulces del Valle',
        }   
    ];

    return (
        <div className="best-sellers">
            <h2>Productos Más Vendidos</h2>
            <div className="product-list">
            {products.map(({ id, image, price, discount, stock, arrivalDate, store }) => (
                <ProductCard
                    key={id}
                    image={image}
                    price={price}
                    discount={discount}
                    stock={stock}
                    arrivalDate={arrivalDate}
                    store={store}
                    onAddToCart={() => console.log(`Añadir ${id} al carrito`)}
                    onReadMore={() => console.log(`Leer más sobre ${id}`)}
                    onFavorite={() => console.log(`Añadir ${id} a favoritos`)}
                />
            ))}
            </div>
        </div>
    );
}

export default BestSellers;

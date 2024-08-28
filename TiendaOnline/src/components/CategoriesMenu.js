import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoriesMenu.css';

function CategoriesMenu() {
    const categories = [
        'Chocolates',
        'Gelatinas',
        'Chicles',
        'Caramelos Duros',
        'Caramelos Blandos',
        'Malvaviscos',
        'Regaliz',
        'Mentas',
        'Galletas',
        'Piruletas',
        'Turrones',
        'Gominolas'
    ];

    return (
        <div className="categories-menu">
            <h3>Categorías</h3>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link to={`/products?category=${encodeURIComponent(category)}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesMenu;

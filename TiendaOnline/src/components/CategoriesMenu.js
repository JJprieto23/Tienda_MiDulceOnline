import React, { useState } from 'react';
import '../styles/CategoriesMenu.css';

function CategoriesMenu({ onCategoryClick }) {
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
    const categories = [
        'chocolates',
        'gelatinas',
        'chicles',
        'caramelos duros',
        'caramelos blandos',
        'malvaviscos',
        'regaliz',
        'mentas',
        'galletas',
        'piruletas',
        'turrones',
        'gominolas'
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Actualiza la categoría seleccionada
        onCategoryClick(category); // Llama a la función pasada por props
    };

    return (
        <div className="categories-menu">
            <h3>Categorías</h3>
            <ul>
                <li>
                    <button
                        className={`category-button ${selectedCategory === '' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('')}
                    >
                        Todos {/* Opción para ver todos los productos */}
                    </button>
                </li>
                {categories.map(category => (
                    <li key={category}>
                        <button
                            className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitaliza la primera letra */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesMenu;

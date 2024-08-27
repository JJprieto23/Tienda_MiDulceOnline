import React from 'react';
import '../styles/Categories.css';
import Chocolates from '../assets/chocolate.png';
import Gelatinas from '../assets/gelatina.png';
import Chicles from '../assets/chicle.png';
import CaramelosDuros from '../assets/caramelo-duro.png';
import CaramelosBlandos from '../assets/caramelo-blando.png';
import Malvaviscos from '../assets/malvavisco.png';
import Regaliz from '../assets/regali.png';
import Mentas from '../assets/menta.png';
import Galletas from '../assets/galleta.png';
import Piruletas from '../assets/piruleta.png';
import Turrones from '../assets/turron.png';
import Gominolas from '../assets/gominola.png';

function Categories() {
    const categories = [
        { id: 1, title: 'Chocolates', image: Chocolates },
        { id: 2, title: 'Gelatinas', image: Gelatinas },
        { id: 3, title: 'Chicles', image: Chicles },
        { id: 4, title: 'Caramelos duros', image: CaramelosDuros },
        { id: 5, title: 'Caramelos blandos', image: CaramelosBlandos },
        { id: 6, title: 'Malvaviscos', image: Malvaviscos },
        { id: 7, title: 'Regaliz', image: Regaliz },
        { id: 8, title: 'Mentas', image: Mentas },
        { id: 9, title: 'Galletas', image: Galletas },
        { id: 10, title: 'Piruletas', image: Piruletas },
        { id: 11, title: 'Turrones', image: Turrones },
        { id: 12, title: 'Gominolas', image: Gominolas },
    ];

    return (
        <div className="categories-section">
            <h2>Categorías de Dulces</h2>
            <div className="categories-list">
                {categories.map(category => (
                    <div key={category.id} className="category-item">
                        <div className="category-image-container">
                            <img src={category.image} alt={category.title} className="category-image" />
                            <div className="category-overlay">
                                <h3>{category.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;

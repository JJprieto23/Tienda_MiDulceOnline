import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const categories = [
        { id: 1, title: 'chocolates', image: Chocolates },
        { id: 2, title: 'gelatinas', image: Gelatinas },
        { id: 3, title: 'chicles', image: Chicles },
        { id: 4, title: 'caramelos duros', image: CaramelosDuros },
        { id: 5, title: 'caramelos blandos', image: CaramelosBlandos },
        { id: 6, title: 'malvaviscos', image: Malvaviscos },
        { id: 7, title: 'regaliz', image: Regaliz },
        { id: 8, title: 'mentas', image: Mentas },
        { id: 9, title: 'galletas', image: Galletas },
        { id: 10, title: 'piruletas', image: Piruletas },
        { id: 11, title: 'turrones', image: Turrones },
        { id: 12, title: 'gominolas', image: Gominolas },
    ];

    // Función para manejar el clic en la categoría
    const handleCategoryClick = (category) => {
        navigate(`/products?category=${category}`);
    };

    return (
        <div id="categorias" className="categories-section">
            <h2>Categorías de Dulces</h2>
            <div className="categories-list">
                {categories.map(category => (
                    <div 
                        key={category.id} 
                        className="category-item"
                        onClick={() => handleCategoryClick(category.title)} // Navegar a la vista de productos
                    >
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

// InfoBoxes.js
import React from 'react';
import InfoBox from './InfoBox';
import { FaSignInAlt, FaTags, FaCreditCard, FaTruck, FaShieldAlt, FaStore, FaQuestionCircle } from 'react-icons/fa';
import '../styles/InfoBoxes.css';

function InfoBoxes() {
    const boxes = [
        { title: 'Ingresar Sesión', icon: FaSignInAlt, description: 'Accede a tu cuenta y empieza a comprar.', buttonText: 'Iniciar Sesión', link: '/login' },
        { title: 'Categorías', icon: FaTags, description: 'Explora las diferentes categorías de productos.', buttonText: 'Ver Categorías', link: '#categorias' },
        { title: 'Medios de pago', icon: FaCreditCard, description: 'Conoce nuestros métodos de pago seguros.', buttonText: 'Ver Medios de Pago', link: '#info-additional' },
        { title: 'Envíos gratis', icon: FaTruck, description: '¡Aprovecha nuestra oferta de envíos gratis en todos los pedidos!', buttonText: 'Más Información', link: '#info-additional' },
        { title: 'Compra segura', icon: FaShieldAlt, description: 'Compra con total seguridad y confianza.', buttonText: 'Más Información', link: '#info-additional' },
        { title: 'Tiendas oficiales', icon: FaStore, description: 'Compra en tiendas verificadas y oficiales.', buttonText: 'Ver Tiendas', link: '#footer' },
        { title: '¿Necesitas ayuda?', icon: FaQuestionCircle, description: 'Estamos aquí para resolver tus dudas.', buttonText: 'Contáctanos', link: '#footer' } // Cambiado para el footer
    ];

    return (
        <div className="info-boxes">
            {boxes.map((box, index) => (
                <InfoBox
                    key={index}
                    title={box.title}
                    icon={box.icon}
                    description={box.description}
                    buttonText={box.buttonText}
                    link={box.link}
                />
            ))}
        </div>
    );
}

export default InfoBoxes;

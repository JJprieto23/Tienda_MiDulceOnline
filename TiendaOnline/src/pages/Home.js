import React from 'react';
import CarouselComponent from '../components/Carousel';
import InfoBoxes from '../components/InfoBoxes';
import BestSellers from '../components/BestSellers';
import RecentProducts from '../components/RecentProducts';
import Categories from '../components/Categories';
import collageImg1 from '../assets/chocolates.png';
import collageImg2 from '../assets/gominolas.png';
import collageImg3 from '../assets/piruletas.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <CarouselComponent />
            <div className="welcome-section">
                <div className="welcome-text">
                    <h2>Bienvenido a Mi Dulce Online</h2>
                    <p>
                        ¡Bienvenido a Mi Dulce Online! Nos alegra tenerte aquí en nuestra tienda en línea dedicada a ofrecerte los dulces más deliciosos y auténticos de Colombia. En nuestra tienda, podrás encontrar una amplia variedad de dulces típicos, desde los clásicos caramelos y chocolates hasta las golosinas más modernas que han capturado los corazones de muchos.
                    </p>
                    <p>
                        En Mi Dulce Online, nos enorgullece ofrecer productos de la más alta calidad, seleccionados cuidadosamente para asegurar que cada bocado sea una experiencia inolvidable. Navega por nuestras categorías para descubrir tus dulces favoritos, explora nuestras ofertas especiales, y encuentra los productos más vendidos que nuestros clientes adoran.
                    </p>
                    <p>
                        Además de nuestra extensa selección de dulces, te ofrecemos un proceso de compra fácil y seguro. Disfruta de la comodidad de recibir tus productos directamente en tu hogar, con la opción de pagar en efectivo o con tarjeta de crédito. Estamos aquí para hacer que tu experiencia de compra sea lo más placentera posible.
                    </p>
                    <p>
                        No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o necesitas ayuda. ¡Estamos aquí para asistirte en cada paso del camino y asegurarnos de que tengas una experiencia dulce y satisfactoria con nosotros!
                    </p>
                    <Link to="#footer" className="contact-btn">Contáctanos</Link>
                </div>
                <div className="welcome-collage">
                    <div className="collage-column">
                        <img src={collageImg1} alt="Dulces 1" className="collage-img" />
                        <img src={collageImg2} alt="Dulces 2" className="collage-img" />
                        <img src={collageImg3} alt="Dulces 3" className="collage-img" />
                    </div>
                    <div className="collage-column">
                        <img src={collageImg1} alt="Dulces 1" className="collage-img" />
                        <img src={collageImg2} alt="Dulces 2" className="collage-img" />
                        <img src={collageImg3} alt="Dulces 3" className="collage-img" />
                    </div>
                </div>
            </div>
            <InfoBoxes />
            <Categories />
            <RecentProducts />
            <BestSellers />
            <section id="info-additional" className="info-additional">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info-box">
                                <i className="fa fa-credit-card fa-3x" aria-hidden="true"></i>
                                <h3>Pago con tarjeta o en efectivo</h3>
                                <p>En nuestra tienda en línea, puedes pagar de manera segura con tarjeta de crédito, tarjeta de débito o en efectivo contra entrega. Aceptamos las principales tarjetas de crédito, así como pagos en efectivo al momento de recibir tu pedido.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-box">
                                <i className="fa fa-shield-alt fa-3x" aria-hidden="true"></i>
                                <h3>Seguridad de productos</h3>
                                <p>Nos aseguramos de que todos nuestros productos sean 100% auténticos y de alta calidad. Implementamos rigurosos controles de calidad y trabajamos solo con proveedores confiables para garantizar que recibas productos seguros y confiables.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-box">
                                <i className="fa fa-truck fa-3x" aria-hidden="true"></i>
                                <h3>Envíos gratis</h3>
                                <p>¡Aprovecha nuestra oferta de envíos gratis en todos los pedidos! No importa el tamaño o el valor de tu compra, el envío será gratuito por el momento de salida de este sitio web. Recibe tus dulces favoritos sin costos adicionales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Home;

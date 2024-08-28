import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import '../styles/Carousel.css';
// Imágenes importadas

import myImgChocolates from "../assets/fondo5.png";
import myImgPiruletas from "../assets/piruletas.png";
import myImgGominolas from "../assets/fondo4.png";

const offers = [
    { id: 1, src: myImgChocolates },
    { id: 2, src: myImgPiruletas },
    { id: 3, src: myImgGominolas }
];

function CarouselComponent() {
    return (
        <Carousel controls>
            {offers.map((offer) => (
                <Carousel.Item key={offer.id}>
                    <img
                        className="d-block w-100 carousel-img"
                        src={offer.src}
                        alt={offer.alt}
                    />
                    <Carousel.Caption>
                        <h3>{offer.alt}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import '../styles/Carousel.css';
// Imágenes importadas

import myImgChocolates from "../assets/chocolates.png";
import myImgPiruletas from "../assets/piruletas.png";
import myImgGominolas from "../assets/gominolas.png";

const offers = [
    { id: 1, src: myImgChocolates, alt: 'chocolates' },
    { id: 2, src: myImgPiruletas, alt: 'piruletas' },
    { id: 3, src: myImgGominolas, alt: 'gominolas' }
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

import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mount1 from '../../images/mount1.jpg'
import mount2 from '../../images/mount2.jpg'
import mount3 from '../../images/mount3.jpg'
import styled from "styled-components";

class CarouselInfo extends Component {
    render() {
        return (
            <div className="container1" >
                <Carousel>
                    <Carousel.Item className="carousel-item" >
                        <img className="d-block w-100" src={mount1} alt="first slide"/>
                        <Carousel.Caption className="carousel-text">
                            <h3 className="carousel-header">Jestesmy najwiekszym biurem podrózy w regionie!</h3>
                            <p className="carousel-text">Juz od ponad 20 lat zorganizujemy wycieczki regionalne w Galicji.
                                Przez ten okres z naszych uslug skorzystalo ponad 20 000 zadowolonych klientow!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item" >
                        <img className="d-block w-100" src={mount2} alt="second slide"/>
                        <Carousel.Caption className="carousel-text">
                            <h3 className="carousel-header">Oferujemy rozne wycieczki na kazdy gust i kieszen:)</h3>
                            <p className="carousel-text">Jesteś miłosnikiem gór i od zawsze marzyłeś wyruszyć w góry i poznać piękno ukrainskich Karpat?
                                A może uwielbiasz zabytkowa architekturę i chcialbys bliżej poznać historię Lwowa? W naszej ofercie kazdy znajdzie cos dla siebie!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item className="carousel-item" >
                        <img className="d-block w-100" src={mount3} alt="third slide"/>
                        <Carousel.Caption className="carousel-text">
                            <h3 className="carousel-header">Nie zwlekaj i zarezerwuj swoja wymarzona wycieczkę juz dzis!</h3>
                            <p className="carousel-text">Pomozemy Ci spełnic swoje marzenie! Wypełnij krótki formularz i zaczynaj pakowac walike:)
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>
        );
    }
}

export default CarouselInfo;
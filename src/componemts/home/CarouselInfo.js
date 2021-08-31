import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron, Button} from 'react-bootstrap'
import mount1 from '../../images/mount1.jpg'
import mount2 from '../../images/mount2.jpg'
import mount3 from '../../images/mount3.jpg'
import lwow4 from '../../images/lwow4.jpg'
import dnieper from '../../images/dnieper.jpg'
import styled from "styled-components";
import { borderRadius } from '@material-ui/system';

class CarouselInfo extends Component {
    render() {
        return (
            
                <Carousel>
                   
                    <Carousel.Item className="carousel-item" >
                        <img className="d-block w-100" src={lwow4} alt="first slide"/>
                        <Carousel.Caption className="carousel-text">
                            <div className="jumbotron">
                            <h3 className="carousel-header" style={{
                                backgroundColor: "white",
                                color: "black",
                                padding: "10px",
                                borderRadius: "5px 5px 0 0"}}>Dowiedz się wiecej o Ukrainie</h3>
                            <Button variant="info">Czytaj</Button>
                                </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item" >
                        <img className="d-block w-100" src={dnieper} alt="second slide"/>
                        <Carousel.Caption className="carousel-text">
                        <div className="jumbotron" style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        
                         }}>
                                <div className="carousel__container" style={{
                                    background: "linear-gradient(90deg, hsla(214, 65%, 85%, 1) 21%, hsla(235, 94%, 79%, 1) 84%)",
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "50px",
                                    borderRadius: "5px",
                                    marginBottom: "10px",
                                    width: "40%",
                                    
                                }}>
                                    <p className="carousel-header" >Podróżowanie w czasie COVID-19:
                                    Aktualne wytyczne
                                    </p>
                                    <Button variant="primary">Czytaj</Button>
                                </div>

                                <div className="carousel__container" style={{
                                    background: "linear-gradient(90deg, hsla(31, 94%, 60%, 1) 0%, hsla(0, 84%, 63%, 1) 84%)",
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "50px",
                                    borderRadius: "5px",
                                    marginBottom: "10px",
                                    width: "40%",
                                    
                                }}>
                                    <p className="carousel-header" >Sprawdż możliwości zakupu ubezpieczenia u naszych partnerów:
                                    </p>
                                    <Button variant="warning">Kup</Button>
                                </div>
                        </div>
                            
                        </Carousel.Caption>
                    </Carousel.Item >
                
                </Carousel>
        );
    }
}

export default CarouselInfo;
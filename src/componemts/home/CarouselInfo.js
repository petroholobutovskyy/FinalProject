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
import lvivbg from '../../images/lvivBG.jpg';
import kyiv from '../../images/kyivBG.jpg'

class CarouselInfo extends Component {
    render() {
        return (
            
                <Carousel>
                   
                    <Carousel.Item className="carousel-item"interval={300000} >
                        <img className="d-block w-100" src={kyiv} alt="first slide"/>
                        <Carousel.Caption className="carousel-text">
                            <div className="jumbotron">
                            <h3 className="carousel-header-primary" style={{
                                }}>Dowiedz się wiecej o Ukrainie</h3>
                            <Button style={{marginBottom: "25%", backgroundColor: "rgba(230, 119, 68, 0.849)"}}
                            className="button__carousel_primary"><a 
                            href="https://edition.cnn.com/travel/article/11-most-beautiful-places-in-ukraine/index.html" 
                            target="_blank"
                            style={{textDecoration: "none", color: "white"}} 
                            >Czytaj</a></Button>
                                </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item" interval={300000} >
                        <img className="d-block w-100" src={lvivbg} alt="second slide"/>
                        <Carousel.Caption className="carousel-text">
                        <div className="jumbotron" style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        
                         }}>
                                <div className="carousel__container" style={{
                                    background: "linear-gradient(90deg, hsla(214, 65%, 85%, 0.6) 21%, hsla(235, 94%, 79%, 0.6) 84%)",
                                    color: "#180586",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    borderRadius: "5px",
                                    marginBottom: "10px",
                                    width: "40%",
                                    minWidth: "150px",
                                    minHeight: "150px",
                                    padding: 0,
                                    textAlign: "center"
                                    
                                }}>
                                    <p className="carousel-header" >Podróżowanie w czasie COVID-19:
                                    Aktualne wytyczne
                                    </p>
                                    <Button variant="primary" className="button__carousel"> <a href="" 
                                    style={{textDecoration: "none", color: "white"}}
                                    >Czytaj</a></Button>
                                </div>

                                <div className="carousel__container" style={{
                                    background: "linear-gradient(90deg, hsla(31, 94%, 60%, 0.5) 0%, hsla(0, 84%, 63%, 0.5) 84%)",
                                    color: "white",
                                    textTransform: "uppercase",
                                    fontWeight: "600",
                                    padding: "50px",
                                    borderRadius: "5px",
                                    marginBottom: "10px",
                                    width: "40%",
                                    minWidth: "150px",
                                    minHeight: "150px",
                                    padding: 0,
                                    textAlign: "center"
                                    
                                }}>
                                    <p className="carousel-header" >Sprawdż możliwości zakupu ubezpieczenia u naszych partnerów:
                                    </p>
                                    <Button variant="secondary" style={{fontWeight: "600"}} className="button__carousel"><a href="" style={{textDecoration: "none", color: "white"}}>Kup </a></Button>
                                </div>
                        </div>
                            
                        </Carousel.Caption>
                    </Carousel.Item >
                
                </Carousel>
        );
    }
}

export default CarouselInfo;
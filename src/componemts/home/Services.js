import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insurance from '../../images/insurance.jpg'
import tourGuide from '../../images/tourGuide.jpg'
import bus from '../../images/bus.jpg'

class Services extends Component {
    render() {
        return (
            <div className="container1">
                <h1 className="services__header">Rezerwujac z nami dostajesz:</h1>
                <div className="service-container">
                    <img src={insurance}/>
                    <div className="service-description">
                        <h4 className="service-header">Ubezpieczenie 24/7</h4>
                        <p className="service__text">Wyruszaj w podróz bez zadnych zmartwien! Wykup pełne ubezpieczenie i ciesz sie beztroskaw podróza w 100%! </p>
                    </div>
                </div>
                <div className="service-container">
                    <div className="service-description">
                        <h4 className="service-header">Doswiadczonych przewodników</h4>
                        <p className="service__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <img src={tourGuide}/>
                </div>
                <div className="service-container">
                    <img src={bus}/>
                    <div className="service-description">
                        <h4 className="service-header">Podróz komfortowymi autobusami</h4>
                        <p className="service__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
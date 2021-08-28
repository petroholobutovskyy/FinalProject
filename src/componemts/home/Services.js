import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insurance from '../../images/insurance.jpg'
import tourGuide from '../../images/tourGuide.jpg'
import bus from '../../images/bus.jpg'

class Services extends Component {
    render() {
        return (
            <div className="container1">
                <section>
                    <h1 className="services__header">Rezerwujac z nami dostajesz:</h1>
                    <div className="service-container">
                        <img src={insurance}/>
                        <header className="service-description">
                            <h4 className="service-header">Ubezpieczenie 24/7</h4>
                            <p className="service__text">Wyruszaj w podróz bez zadnych zmartwien! Wykup pełne ubezpieczenie i ciesz sie beztroskaw podróza w 100%! </p>
                        </header>
                    </div>
                    <div className="service-container">
                        <header className="service-description">
                            <h4 className="service-header">Doswiadczonych przewodników</h4>
                            <p className="service__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </header>
                        <img src={tourGuide}/>
                    </div>
                    <div className="service-container">
                        <img src={bus}/>
                        <header className="service-description">
                            <h4 className="service-header">Podróz komfortowymi autobusami</h4>
                            <p className="service__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </header>
                    </div>
                </section>
            </div>
        );
    }
}

export default Services;
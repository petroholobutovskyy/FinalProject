import React, {Component} from 'react';
import {Image} from 'react-bootstrap'
import carpatians from '../../images/carpatians.jpg'
import  castle from '../../images/castle.jpg'
import ship from '../../images/ship.jpg'
import lwow from '../../images/lwow.jpg'
import huculy from '../../images/hucyly.jpg'

class ExcursionsInfo extends Component {
    render() {
        return (
            <div className="container1">
                <div className="excursion__info-container">
                    <section className="excursion__single-container">
                        <img src={carpatians} className="img-thumbnail "/>
                        <header className="excursion__header-container">
                            <h2 className="excursion__header">Wyprawa w góry</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </header>
                        <div className="excursion-buttons">
                            <a href="/excursions/carpatians" className="more-info-button">Czytaj wiecej</a>
                            <a href="/form-submission" className="single-btn">Rezerwuj</a>
                        </div>
                    </section>
                    <section className="excursion__single-container">
                        <img src={lwow} className="img-thumbnail "/>
                        <header className="excursion__header-container">
                            <h2 className="excursion__header">Poznaj niesamowity Lwów!</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </header>
                        <div className="excursion-buttons">
                            <a href="/excursions/lwow" className="more-info-button">Czytaj wiecej</a>
                            <a href="/form-submission" className="single-btn">Rezerwuj</a>
                        </div>
                    </section>
                    <section className="excursion__single-container castle">
                        <img src={castle} className="img-thumbnail "/>
                        <header className="excursion__header-container">
                            <h2 className="excursion__header">Sredniowieczne zamki Galicji</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </header>
                        <div className="excursion-buttons">
                            <a href="/excursions/castle" className="more-info-button">Czytaj wiecej</a>
                            <a href="/form-submission" className="single-btn">Rezerwuj</a>
                        </div>
                    </section>
                    <section className="excursion__single-container ship">
                        <img src={huculy} className="img-thumbnail"/>
                        <header className="excursion__header-container">
                            <h2 className="excursion__header">Kultura Hucułów</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </header>
                        <div className="excursion-buttons">
                            <a href="/excursions/huculy" className="more-info-button">Czytaj wiecej</a>
                            <a href="/form-submission" className="single-btn">Rezerwuj</a>
                        </div>
                    </section>
                </div>

            </div>
        );
    }
}

export default ExcursionsInfo;
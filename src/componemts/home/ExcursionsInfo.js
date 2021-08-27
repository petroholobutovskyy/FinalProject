import React, {Component} from 'react';
import carpatians from '../../images/carpatians.jpg'
import  castle from '../../images/castle.jpg'
import ship from '../../images/ship.jpg'
import lwow from '../../images/lwow.jpg'

class ExcursionsInfo extends Component {
    render() {
        return (
            <div className="container1">
                <div className="excursion__info-container">
                    <div className="excursion__single-container">
                        <img src={carpatians}/>
                        <div className="excursion__header-container">
                            <h2 className="excursion__header">Wyprawa w góry</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </div>
                        <div className="excursion-buttons">
                            <a href="/Carpatians" className="more-info-button">Czytaj wiecej</a>
                            <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                        </div>
                    </div>
                    <div className="excursion__single-container">
                        <img src={lwow}/>
                        <div className="excursion__header-container">
                            <h2 className="excursion__header">Poznaj niesamowity Lwów!</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </div>
                        <div className="excursion-buttons">
                            <a href="/Lwow" className="more-info-button">Czytaj wiecej</a>
                            <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                        </div>
                    </div>
                    <div className="excursion__single-container castle">
                        <img src={castle}/>
                        <div className="excursion__header-container">
                            <h2 className="excursion__header">Sredniowieczne zamki Galicji</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </div>
                        <div className="excursion-buttons">
                            <a href="/Castle" className="more-info-button">Czytaj wiecej</a>
                            <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                        </div>
                    </div>
                    <div className="excursion__single-container ship">
                        <img src={ship}/>
                        <div className="excursion__header-container">
                            <h2 className="excursion__header">Splyw statkiem rzeka Dnister</h2>
                            <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. </p>
                        </div>
                        <div className="excursion-buttons">
                            <a href="/Ship" className="more-info-button">Czytaj wiecej</a>
                            <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ExcursionsInfo;
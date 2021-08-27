import React, {Component} from 'react';
import Header from "../home/Header";
import HeaderMain from "../home/HeaderMain";
import Footer from "../home/Footer";
import Lwow from "./Lwow";
import carpatians from '../../images/carpatians.jpg'
import castle from '../../images/castle.jpg'
import lwow from '../../images/lwow.jpg'
import ship from '../../images/ship.jpg'

class Excursions extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderMain/>

                <div className=" excursion__section-container">
                    <div className="excursion__section-info">
                        <h4 className="excursion--inner-header">Wyprawa w góry</h4>
                        <div className="floating__image clearfix">
                            <img src={carpatians}/>
                            <p className="excursion__section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="excursion__section-price">
                            <p className="excursion--price-info">Cena: $50</p>
                            <div className="excursion__section-buttons">
                                <a href="/Excursions/Carpatians" className="more-info-button">Czytaj wiecej</a>
                                <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                            </div>
                        </div>
                    </div>
                    <div className="excursion__section-info">
                        <h4 className="excursion--inner-header">Sredniowieczne zamki Galicji</h4>
                        <div className="floating__image clearfix">
                            <img src={castle}/>
                            <p className="excursion__section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="excursion__section-price">
                            <p className="excursion--price-info">Cena: $50</p>
                            <div className="excursion__section-buttons">
                                <a href="/Excursions/Castle" className="more-info-button">Czytaj wiecej</a>
                                <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                            </div>
                        </div>
                    </div>
                    <div className="excursion__section-info">
                        <h4 className="excursion--inner-header">Poznaj niesamowity Lwów!</h4>
                        <div className="floating__image clearfix">
                            <img src={lwow}/>
                            <p className="excursion__section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="excursion__section-price">
                            <p className="excursion--price-info">Cena: $50</p>
                            <div className="excursion__section-buttons">
                                <a href="/Excursions/Lwow" className="more-info-button">Czytaj wiecej</a>
                                <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                            </div>
                        </div>
                    </div>
                    <div className="excursion__section-info">
                        <h4 className="excursion--inner-header">Splyw statkiem rzeka Dnister</h4>
                        <div className="floating__image clearfix">
                            <img src={ship}/>
                            <p className="excursion__section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="excursion__section-price">
                            <p className="excursion--price-info">Cena: $50</p>
                            <div className="excursion__section-buttons">
                                <a href="/Excursions/Ship" className="more-info-button">Czytaj wiecej</a>
                                <a href="/FormSubmission" className="single-btn">Rezerwuj</a>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer/>








                {/*        </div>*/}
                {/*        <div className="excursion__section-info">*/}
                {/*            <img src={ship}/>*/}
                {/*            <div className="excursion__section-text">*/}
                {/*                <h4>Splyw statkiem rzeka Dnister</h4>*/}
                {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
                {/*                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
                {/*                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in*/}
                {/*                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat*/}
                {/*                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                {/*                <div className="excursion__section-price">*/}
                {/*                    <p>Cena: $50</p>*/}
                {/*                    <div className="excursion__section-buttons">*/}
                {/*                        <a href="/Ship" className="more-info-button">Czytaj wiecej</a>*/}
                {/*                        <a href="/FormSubmission" className="single-btn">Rezerwuj</a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    <Footer/>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default Excursions;
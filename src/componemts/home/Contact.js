import React, {Component} from 'react';
import Header from "../home/Header";
import HeaderMain from "../home/HeaderMain";
import Footer from "../home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";

class Contact extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderMain/>
                <h3 className="contact__header-main">Masz pytania? Skontaktuj sie z nami!</h3>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__phone">
                            <FontAwesomeIcon icon={faPhone} className="icon-user" />
                            <p>+38(096) 111 111 11</p>
                        </div>
                        <div className="contact__email">
                            <FontAwesomeIcon icon={faAt} className="icon-user" />
                            <p>wanderLustTravel@wanderlust.com</p>
                        </div>
                        <div className="contact__social-media">
                            <FontAwesomeIcon icon={faFacebook} className="icon-user facebook" />
                            <FontAwesomeIcon icon={faWhatsapp} className="icon-user whatsapp" />
                            <FontAwesomeIcon icon={faYoutube} className="icon-user youtube" />
                        </div>
                    </div>
                    <div className="contact__form-container">
                        <h5>Formularz kontaktowy</h5>
                        <form className="contact__form-inputs">
                            <div>
                                <label for="contact__first-name">Imie</label>
                                <input type="text" id="contact__first-name"/>
                            </div>
                            <div>
                                <label htmlFor="contact__last-name">Nazwisko</label>
                                <input type="text" id="contact__last-name"/>
                            </div>
                            <div>
                                <label for="contact__email">Email</label>
                                <input type="email" id="contact__email"/>
                            </div>
                            <div>
                                <label for id="contact__textarea">Jakie masz pytanie?</label>
                                <textarea id="contact__textarea" cols="24" rows="4" ></textarea>
                            </div>
                        </form>
                    </div>
                </div>


                <Footer/>
            </div>
        );
    }
}

export default Contact;
import React from 'react';
import Header from "../home/Header";
import { Button, Form } from 'react-bootstrap';
import HeaderNav from "./HeaderNav";
import Footer from "../home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";

const Contact =()=> {

    // function formSubmission() {
    //     if(textarea.value.length < 10) {
    //         submitBtn.disabled = false
    //     }
    // }
    
        return (
            <>
                <Header/>
                <HeaderNav/>
                <div className="container1">
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
                                <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon-user facebook" /></a>
                                <a href="https://www.whatsapp.com/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="icon-user whatsapp" /></a>
                                <a href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} className="icon-user youtube" /></a>
                            </div>
                        </div>
                        <div className="contact__form-container">
                            <h5>Formularz kontaktowy</h5>
                            <Form className="contact__form-inputs">
                                <div>
                                    <label for="contact__first-name">Imie*</label>
                                    <input type="text" id="contact__first-name" required/>
                                </div>
                                <div>
                                    <label htmlFor="contact__last-name">Nazwisko*</label>
                                    <input type="text" id="contact__last-name" required/>
                                </div>
                                <div>
                                    <label for="contact__email">Email*</label>
                                    <input type="email" id="contact__email" required/>
                                </div>
                                <div>
                                    <label for id="contact__textarea" >Jakie masz pytanie?*</label>
                                    <textarea id="contact__textarea" cols="24" rows="4"placeholder="wpisz min 10 znaków" required></textarea>
                                </div>
                                <Button type="submit" className="btn btn-primary btn-lg active mt-3 btn__contact" 
                                style={{
                                    marginBottom: "30px",
                                    marginLeft: "50%",
                                    transform: "translateX(-50%)"
                                }}
                                >Wyślij zapytanie</Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    
}

export default Contact;
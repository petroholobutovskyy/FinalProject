import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAward} from "@fortawesome/free-solid-svg-icons";
import {faUserTie} from "@fortawesome/free-solid-svg-icons/faUserTie";
import {faHandHoldingUsd} from "@fortawesome/free-solid-svg-icons/faHandHoldingUsd";

class WhyUs extends Component {
    render() {
        return (
           
                <section className="why-us__container">
                     <div className="container1">
                    <h1 className="why-us__header">Dlaczego my?</h1>
                    <div className="why-us-reasons">
                        <div className="single-reason">
                            <FontAwesomeIcon icon={faAward} className="whu-us-icons" />
                            <h6>Zostismy docenieni<br/> przez naszych klientów<br/> jako najlepsze lokalne<br/> biuro turystyczne. </h6>
                        </div>
                        <div className="single-reason">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="whu-us-icons"/>
                            <h6>Mamy najbardziej konkurencyjne<br/> ceny na rynku.</h6>
                        </div>
                        <div className="single-reason">
                            <FontAwesomeIcon icon={faUserTie} className="whu-us-icons"/>
                            <h6>Dzialamy juz od 20 lat,<br/> co robi nas najbardziej<br/> doswiadczonym biurem w regionie.</h6>
                        </div>
                    </div>
                    </div>
                </section>
           
        );
    }
}

export default WhyUs;
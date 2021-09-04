import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAward} from "@fortawesome/free-solid-svg-icons";
import {faUserTie} from "@fortawesome/free-solid-svg-icons/faUserTie";
import {faHandHoldingUsd} from "@fortawesome/free-solid-svg-icons/faHandHoldingUsd";

class WhyUs extends Component {
    render() {
        return (
           
                 <section style={{backgroundColor: "white"}}>
                
                             <div className="container1">
                                <div className="why-us__container" >
                                 <h1 className="why-us__header">Dlaczego my?</h1>
                             <main className="why-us-reasons">
                                <article className="single-reason">
                                    <FontAwesomeIcon icon={faAward} className="whu-us-icons" />
                                    <p>Zostismy docenieni<br/> przez naszych klientów<br/> jako najlepsze lokalne<br/> biuro turystyczne. </p>
                                </article>
                                <article className="single-reason">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} className="whu-us-icons"/>
                                    <p>Mamy najbardziej konkurencyjne<br/> ceny na rynku.</p>
                                </article>
                                <article className="single-reason">
                                    <FontAwesomeIcon icon={faUserTie} className="whu-us-icons"/>
                                    <p>Dzialamy juz od 20 lat,<br/> co robi nas najbardziej<br/> doswiadczonym biurem w regionie.</p>
                                </article>
                             </main>
                            </div>
                    </div>
                </section>
           
        );
    }
}

export default WhyUs;
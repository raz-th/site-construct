// import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./Style/Despre.css";
import { Reveal } from './Reveal';
import { an_curent, an_inceput, nume_complet } from '../config/site';

const Despre = () => {
    const features = [
        "Materiale de construcție premium",
        "Echipă de profesioniști certificați",
        "Respectăm termenii de livrare",
        // "Garanție extinsă de 10 ani",
        "Consultanță personalizată",
        "Transparență în prețuri"
    ];

    return (
        <section className='despre' id='despre_noi'>
            <div className='despre-container'>
                {/* Left Side: Content */}
                <div className='despre-content'>
                    <Reveal>
                        <p className='subtitle'>DESPRE NOI</p>
                        <h2>De ce să alegi <span>{nume_complet.split(" ")[0]}</span>?</h2>
                        <p className='description'>
                            Cu peste un deceniu de experiență în industria construcțiilor, am livrat
                            proiecte excepționale pentru familii din România. Ne mândrim cu
                            atenția la detalii și angajamentul nostru pentru calitate.
                        </p>

                        <div className='features-grid'>
                            {features.map((item, index) => (
                                <div key={index} className='feature-item'>
                                    <IoCheckmarkCircleOutline className='check-icon' />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* <div className='stats-row'>
                        <div className='stat'>
                            <h3>98%</h3>
                            <p>Clienți Satisfăcuți</p>
                        </div>
                        <div className='stat'>
                            <h3>15</h3>
                            <p>Premii în Industrie</p>
                        </div>
                        <div className='stat'>
                            <h3>50+</h3>
                            <p>Specialiști</p>
                        </div>
                    </div> */}
                </div>

                <div className="bento-wrapper">
                    <Reveal>
                        <div className="bento-grid">
                            <div className="bento-column">
                                <div className="bento-item experience">
                                    <span className="big">{parseInt((an_curent - an_inceput)/10)}0+</span>
                                    <span className="muted">Ani de Experiență</span>
                                </div>

                                <div className="bento-item passion square">
                                    <span className="year">Din {an_inceput}</span>
                                    <span className="title">Construim cu Pasiune</span>
                                </div>
                            </div>


                            <div className="bento-column offset">
                                <div className="bento-item iso square">
                                    <span className="big iso-title">ISO</span>
                                    <span className="muted">Certificări 9001 & 14001</span>
                                </div>

                                <div className="bento-item guarantee">
                                    <span className='title'>Responsabilitate în Producție</span>
                                    <br />
                                    <span className='muted'>Conform normelor tehnice în vigoare</span>
                                    {/* <span className="title">Garanție</span>
                                <span className="muted strong">
                                    Până la 10 ani pentru toate lucrările
                                </span> */}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>


            </div>
        </section>
    );
}

export default Despre;
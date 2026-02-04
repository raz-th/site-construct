import React from 'react';
import './Style/Hero.css';
import { PiMedal } from "react-icons/pi";
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoPeopleSharp } from 'react-icons/io5';
import { Reveal } from './Reveal';

const Hero = () => {
    return (
        <div className='hero' id='acasa'>
            <img src={require("../assets/hero_example.png")} alt="Modern Architecture" />

            <div className='hero_fade'>
                <div className='hero_content'>
                    <Reveal>
                        <div className='badge'>
                            <PiMedal /> Peste 20 de ani de excelență în construcții
                        </div>
                    </Reveal>


                    <Reveal>
                        <h1>
                            Construim <span>Visuri</span>,<br />
                            Livrăm <span>Excelență</span>
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='hero_description'>
                            Transformăm viziunea dumneavoastră în realitate. Case moderne,
                            vile de lux și construcții rezidențiale la cele mai înalte standarde de calitate.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className='hero_actions'>
                            <a href='#proiecte' className='btn-primary'>
                                Descoperă Proiectele <FaArrowRight />
                            </a>
                            <a href='#contact' className='btn-secondary'>
                                Consultanță Gratuită
                            </a>
                        </div>
                    </Reveal>
                </div>

                <div className='hero_stats'>
                    <Reveal width='fit-content' delay={50}>
                        <div className='stat_item'>
                            <span className='stat_value'><HiOutlineNewspaper color='var(--accent-color)' /> 500+</span>
                            <span className='stat_label'>Proiecte Finalizate</span>
                        </div>
                    </Reveal>
                    <Reveal width='fit-content' delay={150}>
                        <div className='stat_item'>
                            <span className='stat_value'><IoPeopleSharp color='var(--accent-color)' /> 350+</span>
                            <span className='stat_label'>Clienți Mulțumiți</span>
                        </div>
                    </Reveal>
                    <Reveal width='fit-content' delay={250}>
                        <div className='stat_item'>
                            <span className='stat_value'><PiMedal color='var(--accent-color)' /> 20+</span>
                            <span className='stat_label'>Ani Experiență</span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default Hero;
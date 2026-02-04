import React from 'react';
import { GoHome, GoBeaker, GoPencil, GoTools, GoShieldCheck } from "react-icons/go";
import { LuRuler, LuWrench } from "react-icons/lu";
import "./Style/Servicii.css"
import { Reveal } from './Reveal';

const Card = ({ title, description, Icon, i }) => {
    return (
        <Reveal delay={i*100+50}>
            <div className='card'>
                <div className='card-icon'>
                    <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Reveal>
    )
}

const servicesData = [
    // { title: "Case Unifamiliale", Icon: GoHome, description: "Construcții rezidențiale personalizate, de la proiect la predare la cheie. Case moderne adaptate nevoilor familiei tale." },
    { title: "Vile de Lux", Icon: GoHome, description: "Vile premium cu finisaje de înaltă calitate, piscine, grădini peisagistice și toate facilitățile moderne." },
    { title: "Proiectare Arhitecturală", Icon: GoPencil, description: "Servicii complete de proiectare cu arhitecți premiați. Transformăm ideile tale în planuri concrete." },
    { title: "Renovări Complete", Icon: LuWrench, description: "Modernizare și renovare completă a locuințelor existente cu materiale premium și tehnologii moderne." },
    // { title: "Consultanță Tehnică", Icon: LuRuler, description: "Expertiză tehnică pentru proiecte de construcții. Evaluări, studii de fezabilitate și supervizare." },
    // { title: "Garanție Extinsă", Icon: GoShieldCheck, description: "Oferim garanție de până la 10 ani pentru lucrările noastre, asigurând liniștea ta pe termen lung." },
];

const Servicii = () => {
    return (
        <section className='servicii' id='servicii'>
            <Reveal>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className='subtitle'>SERVICIILE NOASTRE</p>
                    <h2 className='t'>Soluții Complete de <span>Construcții</span></h2>
                    <p className='description'>De la proiectare până la finisaje, oferim servicii complete pentru casa visurilor tale.</p>
                </div>
            </Reveal>

            <div className="servicii-grid">
                {servicesData.map((service, index) => (
                    <Card i={index} key={index} {...service} />
                ))}
            </div>
        </section>
    );
}

export default Servicii;
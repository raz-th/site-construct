import React from 'react';
import "./Style/Proiecte.css"
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from './Reveal';


const ProjectCard = ({ image, category, title, location, size, delay }) => (
    <Reveal delay={delay}>
        <div className="project-card">
            <div className="project-image-container">
                <img src={image} alt={title} />
                <span className="project-tag">{category}</span>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{location}  •  {size}</p>
            </div>
        </div>
    </Reveal>
);

const Proiecte = () => {
    const projects = [
        {
            image: require("../assets/dummy.png"),
            category: "Casă",
            title: "Exemplu Casă",
            location: "București, Bragadiru",
            size: "450 mp"
        },
        {
            image: require("../assets/dummy.png"),
            category: "Casă",
            title: "Exemplu Casă Modernă",
            location: "București, Pipera",
            size: "320 mp"
        },
        {
            image: require("../assets/dummy.png"),
            category: "Casă",
            title: "Exemplu Casă Clasică",
            location: "București",
            size: "520 mp"
        }
    ];

    return (
        <section className='proiecte' id='proiecte'>
            <div className='proiecte-content'>
                <div className="proiecte-header">
                    <Reveal>
                        <div className="header-text">
                            <p className="subtitle">PORTOFOLIU</p>
                            <h2>Proiecte care <span>Inspiră</span></h2>
                            <p className="description">
                                Fiecare proiect este o poveste de succes. Descoperă o selecție din cele mai recente lucrări finalizate.
                            </p>
                        </div>
                    </Reveal>
                    {/* <button className="btn-view-all">
                        Vezi Toate Proiectele <span><LuArrowUpRight /></span>
                    </button> */}
                </div>

                <div className="proiecte-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} delay={index*120} {...project}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proiecte;
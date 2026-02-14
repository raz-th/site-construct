import React, { useEffect, useState } from 'react';
import "./Style/Proiecte.css"
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from './Reveal';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

// require("../assets/poze_portofoliu/image (1).png")

const cat = ["FINALIZAT", "FINALIZAT", "INTERIOR", "EXTERIOR", "ȘANTIER", "ȘANTIER"]

const ProjectCard = ({ image_num, category = "da", delay, onClick }) => (
    <Reveal delay={delay}>
        <div className="project-card" onClick={() => onClick()}>
            <div className="project-image-container">
                <img src={require(`../assets/poze_portofoliu/image (${image_num}).png`)} alt={`Image ${image_num}`} />
                <span className="project-tag">{cat[image_num - 1] || category}</span>
            </div>
        </div>
    </Reveal>
);

const Proiecte = ({ setshowNav }) => {
    const [selected_image, setSelected_image] = useState(null)
    const projects = Array.from({ length: 6 }, (_, i) => i + 1);

    useEffect(() => {
        setshowNav(selected_image ? false : true)
    }, [selected_image])

    return (
        <section className='proiecte' id='proiecte'>
            {selected_image && (
                <div className='proiecte-preview-image-container' onClick={() => setSelected_image(null)}>
                    <button className='close-btn' onClick={() => setSelected_image(null)}>
                        <MdClose />
                    </button>
                    <button
                        className='next-btn left'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected_image((p) => (p > 1 ? p - 1 : 6));
                        }}
                    >
                        <FaAngleLeft />
                    </button>
                    <span className="project-tag">{cat[selected_image - 1] || "da"}</span>
                    <img
                        src={require(`../assets/poze_portofoliu/image (${selected_image}).png`)}
                        onClick={(e) => e.stopPropagation()}
                    >

                    </img>

                    <button
                        className='next-btn right'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected_image((p) => (p < 6 ? p + 1 : 1));
                        }}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            )}
            <div className='proiecte-content'>
                <div className="proiecte-header">
                    <Reveal>
                        <div className="header-text">
                            <p className="subtitle">PORTOFOLIU</p>
                            <h2>Lucrări <span>Realizate</span></h2>
                            <p className="description">
                                O selecție din proiectele noastre recente – de la case moderne la vile premium și lucrări aflate în execuție.
                            </p>
                        </div>
                    </Reveal>
                    {/* <button className="btn-view-all">
                        Vezi Toate Proiectele <span><LuArrowUpRight /></span>
                    </button> */}
                </div>

                <div className="proiecte-grid">
                    {projects.map((v, index) => (
                        <ProjectCard key={index} delay={index * 120} image_num={v} onClick={() => setSelected_image(v)} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proiecte;
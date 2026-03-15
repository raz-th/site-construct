'use client';
import React, { useEffect, useState } from 'react';
import "./Galerie.css"
import { Reveal } from '../../Components/Reveal';
import { MdClose } from 'react-icons/md';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavProv } from '../NavContext';
import { metadata as allMetadata } from '@/config/site';
export const metadata = allMetadata["/galerie"];
const ProjectCard = ({ image_num, category = "da", delay, onClick }) => (
    <Reveal delay={delay}>
        <div className="project-card" onClick={() => onClick()}>
            <div className="project-image-container">
                <img src={`/poze_galerie/image${image_num}.jpg`} alt=""/>
                {/* <span className="project-tag">{cat[image_num - 1] || category}</span> */}
            </div>
        </div>
    </Reveal>
);


const GaleriePage = () => {
    const [selected_image, setSelected_image] = useState(null)
    const { setshowNav } = useNavProv();
    const projects = Array.from({ length: 19 }, (_, i) => i + 1);

    const toggleScroll = (lock) => {
        if (lock) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    useEffect(()=>{
        setshowNav(false);
    }, [])


    return (
        <div className='galerie_page'>
            {selected_image && (
                <div className='proiecte-preview-image-container' onClick={() => {setSelected_image(null); toggleScroll(false)}}>
                    <button className='close-btn' onClick={() => {setSelected_image(null); toggleScroll(false)}}>
                        <MdClose />
                    </button>
                    <button
                        className='next-btn left'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected_image((p) => (p > 1 ? p - 1 : projects.length));
                        }}
                    >
                        <FaAngleLeft />
                    </button>
                    {/* <span className="project-tag">{cat[selected_image - 1] || "da"}</span> */}
                    <img
                        src={`/poze_galerie/image${selected_image}.jpg`}
                        onClick={(e) => e.stopPropagation()}
                        alt=''
                    >

                    </img>

                    <button
                        className='next-btn right'
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected_image((p) => (p < projects.length ? p + 1 : 1));
                        }}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            )}
            <p className="subtitle">PORTOFOLIU COMPLET</p>
            <h1>Galerie Proiecte</h1>
            <p className="description">O colecție extinsă de lucrări realizate, case finalizate, interioare moderne și proiecte aflate în execuție.</p>
            <div className='galerie-grid'>
                {projects.map((v, index) => (
                    <ProjectCard key={index} delay={index * 120} image_num={v} onClick={() => {setSelected_image(v); toggleScroll(true);}} />
                ))}
            </div>
        </div>
    );
}

export default GaleriePage;

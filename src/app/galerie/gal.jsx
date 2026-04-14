'use client';
import React, { useEffect, useRef, useState } from 'react';
import "./Galerie.css"
import { Reveal } from '../../Components/Reveal';
import { MdClose } from 'react-icons/md';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavProv } from '../NavContext';
import Link from 'next/link';

const ProjectCard = ({ image_num, delay, onClick }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <div className="project-card" onClick={onClick}>
                <div className="project-image-container">
                    {!loaded && <div className="img-skeleton" />}
                    <img
                        ref={imgRef}
                        src={`/poze_galerie/image513/image${image_num}.jpg`}
                        alt=""
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        onError={() => setLoaded(true)}
                        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                    />
                    {loaded && (
                        <div className="zoom-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
    );
};

const GaleriePage = () => {
    const [selected_image, setSelected_image] = useState(null)
    const { setshowNav } = useNavProv();
    const projects = Array.from({ length: 19 }, (_, i) => i + 1);

    const [fading, setFading] = useState(false);

    const navigate = (dir) => {
        setFading(true);
        setTimeout(() => {
            setSelected_image((p) => {
                if (dir === 'next') return p < projects.length ? p + 1 : 1;
                return p > 1 ? p - 1 : projects.length;
            });
            setFading(false);
        }, 180);
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (!selected_image) return;
            if (e.key === 'ArrowRight') navigate('next');
            if (e.key === 'ArrowLeft') navigate('prev');
            if (e.key === 'Escape') { setSelected_image(null); toggleScroll(false); }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selected_image]);


    const toggleScroll = (lock) => {
        if (lock) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        if (selected_image) setshowNav(false);
        else setshowNav(true);
    }, [selected_image])


    return (
        <div className='galerie_page'>
            {selected_image && (
                <div className='proiecte-preview-image-container' onClick={() => { setSelected_image(null); toggleScroll(false) }}>
                    <button className='close-btn' onClick={() => { setSelected_image(null); toggleScroll(false) }}>
                        <MdClose />
                    </button>
                    <button
                        className='next-btn left'
                        onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                    >
                        <FaAngleLeft />
                    </button>
                    {/* <span className="project-tag">{cat[selected_image - 1] || "da"}</span> */}
                    <img
                        src={`/poze_galerie/full_rez/image${selected_image}.jpg`}
                        className={fading ? 'fading' : ''}
                        onClick={(e) => e.stopPropagation()}
                        alt=''
                    />
                    <span className="lightbox-counter">{selected_image} / {projects.length}</span>

                    <button
                        className='next-btn right'
                        onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            )}
            {/* <Link href="/" className="back-home-btn">
                <FaAngleLeft />
                <span>Acasă</span>
            </Link> */}
            <p className="subtitle">PORTOFOLIU COMPLET</p>
            <h1>Galerie Proiecte</h1>
            <p className="description">O colecție extinsă de lucrări realizate, case finalizate, interioare moderne și proiecte aflate în execuție.</p>
            <div className='galerie-grid'>
                {projects.map((v, index) => (
                    <ProjectCard key={index} delay={index * 100} image_num={v} onClick={() => { setSelected_image(v); toggleScroll(true); }} />
                ))}
            </div>
        </div>
    );
}

export default GaleriePage;

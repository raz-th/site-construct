import React, { useEffect, useState } from 'react';
import { FiPhone } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Style/Nav.css"
import { numar_telefon, nume_complet } from '../config/site';

const navigs = {
    "Acasă": "#acasa",
    "Servicii": "#servicii",
    "Proiecte": "#proiecte",
    "Recenzii": "#recenzii",
    "Despre Noi": "#despre_noi",
    "Contact": "#contact"
}


const Nav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [scrollWidth, setScrollWidth] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 50) {
                setIsVisible(true); // Keep visible
                document.querySelector('header').classList.add('glass');
            } else {
                document.querySelector('header').classList.remove('glass');
            }
            if (window.scrollY > lastScrollY) setIsVisible(false);
            else setIsVisible(true);
            setLastScrollY(window.scrollY);
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollWidth(scrolled);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header className={isVisible ? '' : 'nav-hidden'}>
            <div className='header-content'>
                <div className='nav-section'>
                    {/* <div className='logo-nav'><img width={65} src={logo192}/></div> */}
                    <div>
                        <h1 className='nume_header'>{nume_complet.split(' ')[0]}</h1>
                        <p className='nume_sub_header'>{nume_complet.split(' ').map((v, i)=>i>0?v+" ":'')}</p>
                        
                    </div>
                </div>
                <nav className="nav-section">
                    <ul>
                        {Object.keys(navigs).map((key, i) => { return <li key={i}><a href={navigs[key]}>{key}</a></li> })}
                    </ul>
                </nav>
                <div className="nav-section">
                    <a className='a-tel' href={`tel:${numar_telefon}`}><FiPhone color='var(--accent-color)' /> {numar_telefon}</a>
                    <button className='btn-primary'>Solicită Ofertă</button>
                </div>
                <div className="nav-section">
                    {showMobileNav ? <IoClose size={35} onClick={() => setShowMobileNav((v) => !v)} /> : <IoMenu size={35} onClick={() => setShowMobileNav((v) => !v)} />}

                </div>
            </div>
            <nav className={`mobile-nav-menu ${showMobileNav ? "show" : "hide"}`}>
                <ul>
                    {Object.keys(navigs).map((key, i) => { return <li onClick={() => setShowMobileNav(false)} key={i}><a href={navigs[key]}>{key}</a></li> })}
                </ul>
                <a className='a-tel' href={`tel:${numar_telefon}`}><FiPhone color='var(--accent-color)' /> {numar_telefon}</a>
                <button className='btn-primary'>Solicită Ofertă</button>
            </nav>
            <div className='scrollbar-container' style={{background: scrollWidth>0?"#1a1e24":"transparent"}}>
                <div className='scrollbar' style={{ width: `${scrollWidth}%` }} />
            </div>
        </header>
    );
}

export default Nav;

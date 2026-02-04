import React, { useEffect, useState } from 'react';
import { FiPhone } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Style/Nav.css"

const navigs = {
    "Acasă": "#acasa",
    "Servicii": "#servicii",
    "Proiecte": "#proiecte",
    "Recenzii": "#recenzii",
    "Despre Noi": "#despre_noi",
    "Contact": "#contact"
}

const phone = "+40 712 345 678"

const Nav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 50) {
                setIsVisible(true); 
                document.querySelector('header').classList.add('glass');
            } else {
                document.querySelector('header').classList.remove('glass');
                if (window.scrollY > lastScrollY) setIsVisible(false);
                else setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
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
                    <div className='logo-nav'>logo</div>
                    <div>
                        <h1>nume</h1>
                        <p>CONSTRUCȚII PREMIUM</p>
                    </div>
                </div>
                <nav className="nav-section">
                    <ul>
                        {Object.keys(navigs).map((key, i) => { return <li key={i}><a href={navigs[key]}>{key}</a></li> })}
                    </ul>
                </nav>
                <div className="nav-section">
                    <a className='a-tel' href={`tel:${phone}`}><FiPhone color='var(--accent-color)' /> {phone}</a>
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
                <a className='a-tel' href={`tel:${phone}`}><FiPhone color='var(--accent-color)' /> {phone}</a>
                <button className='btn-primary'>Solicită Ofertă</button>
            </nav>
        </header>
    );
}

export default Nav;

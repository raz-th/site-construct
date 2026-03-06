import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Style/Footer.css";
import { an_inceput, nume_complet } from '../config/site';

const logo192 = "/assets/logo192.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Coloana 1: Logo și Info */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="logo-icon"><img width={35} src={logo192} alt=""/></span>
                        <h4>{nume_complet}</h4>
                    </div>
                    <p className="brand-text">
                        Construim case de vis cu pasiune și dedicare din {an_inceput}. 
                        Experiență, calitate și profesionalism la cele mai înalte standarde.
                    </p>
                    <div className="social-links">
                        <a href="/#"><FaFacebookF /></a>
                        {/* <a href="#"><FaInstagram /></a> */}
                        <a href="/#"><FaLinkedinIn /></a>
                        {/* <a href="#"><FaYoutube /></a> */}
                    </div>
                </div>

                {/* Coloana 2: Servicii */}
                <div className="footer-links">
                    <h4>Servicii</h4>
                    <ul>
                        {/* <li><a href="#">Case Unifamiliale</a></li> */}
                        <li><a href="/#">Vile de Lux</a></li>
                        <li><a href="/#">Renovări Complete</a></li>
                        <li><a href="/#">Consultanță Tehnică</a></li>
                    </ul>
                </div>

                {/* Coloana 3: Companie */}
                <div className="footer-links">
                    <h4>Companie</h4>
                    <ul>
                        <li><a href="#despre_noi">Despre Noi</a></li>
                        <li><a href="#proiecte">Proiecte</a></li>
                        <li><a href="#recenzii">Recenzii</a></li>
                        {/* <li><a href="#">Cariere</a></li>
                        <li><a href="#">Blog</a></li> */}
                    </ul>
                </div>

                {/* Coloana 4: Legal */}
                <div className="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/#">Termeni și Condiții</a></li>
                        <li><a href="/#">Politica de Confidențialitate</a></li>
                        <li><a href="/#">Cookies</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-content">
                    <p>© {currentYear} {nume_complet}. Toate drepturile rezervate.</p>
                    <p>Construit cu pasiune în România 🇷🇴</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
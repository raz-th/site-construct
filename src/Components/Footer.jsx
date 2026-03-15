import React from 'react';
import { FaInstagram } from "react-icons/fa";
import "./Style/Footer.css";
import { an_inceput, nume_complet, logo192 } from '../config/site';
import Link from 'next/link';


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
                        {/* <Link href="/#"><FaFacebookF /></Link> */}
                        <Link href="https://www.instagram.com/aurvis_construct/" target="_blank"><FaInstagram /></Link> 
                        {/* <Link href="/#"><FaLinkedinIn /></Link> */}
                        {/* <Link href="#"><FaYoutube /></Link> */}
                    </div>
                </div>

                {/* Coloana 2: Servicii */}
                <div className="footer-links">
                    <h4>Servicii</h4>
                    <ul>
                        {/* <li><Link href="#">Case Unifamiliale</Link> </li> */}
                        <li><Link href="/constructii-case">Constructii Case</Link> </li>
                        <li><Link href="/case-la-rosu">Case la Rosu</Link> </li>
                        <li><Link href="/case-la-cheie">Case la Cheie</Link> </li>
                        <li><Link href="/cat-costa-constructia-unei-case">Cât Costă o Casă?</Link></li>
                    </ul>
                </div>

                {/* Coloana 3: Companie */}
                <div className="footer-links">
                    <h4>Companie</h4>
                    <ul>
                        <li><Link href="/#despre_noi">Despre Noi</Link> </li>
                        <li><Link href="/#proiecte">Proiecte</Link> </li>
                        <li><Link href="/#recenzii">Recenzii</Link> </li>
                        {/* <li><Link href="#">Cariere</Link> </li>
                        <li><Link href="#">Blog</Link> </li> */}
                    </ul>
                </div>

                {/* Coloana 4: Legal */}
                <div className="footer-links">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link href="/termeni-si-conditii">Termeni și Condiții</Link> </li>
                        <li><Link href="/politica-confidentialitate">Politica de Confidențialitate</Link> </li>
                        <li><Link href="/politica-cookies">Cookies</Link> </li>
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
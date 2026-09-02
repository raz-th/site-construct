import React from 'react';
import { FaInstagram } from "react-icons/fa";
import "./Style/Footer.css";
import { an_inceput, nume_complet, logo192 } from '@/config/site';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Coloana 1: Logo, Scurtă descriere și Datele Firmei */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="logo-icon">
                            <img width={35} src={logo192} alt="" />
                        </span>
                        <h4>{nume_complet}</h4>
                    </div>
                    <p className="brand-text">
                        Construim case de vis cu pasiune și dedicare din {an_inceput}.
                        Experiență, calitate și profesionalism la cele mai înalte standarde.
                    </p>
                    
                    {/* Datele oficiale ale firmei */}
                    <div className="company-details" style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        <p><strong>CUI:</strong> 33282412</p>
                        <p><strong>Nr. Reg. Com.:</strong> J52/306/2014</p>
                        <p><strong>Adresă:</strong> Sat Stoenesti, Com. Floresti Stoenesti, Str. Valea Crangului 38 A Et. S CAM. 1 Cod 087078 </p>
                        <p><strong>Email:</strong> aurvis14@gmail.com</p>
                    </div>

                    <div className="social-links" style={{ marginTop: '1rem' }}>
                        <Link href="https://www.instagram.com/aurvis_construct/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>

                {/* Coloana 2: Servicii */}
                <div className="footer-links">
                    <h4>Servicii</h4>
                    <ul>
                        <li><Link href="/constructii-case">Construcții Case</Link></li>
                        <li><Link href="/case-la-rosu">Case la Roșu</Link></li>
                        <li><Link href="/case-la-cheie">Case la Cheie</Link></li>
                        <li><Link href="/cat-costa-constructia-unei-case">Cât Costă o Casă?</Link></li>
                    </ul>
                </div>

                {/* Coloana 3: Companie */}
                <div className="footer-links">
                    <h4>Companie</h4>
                    <ul>
                        <li><Link href="/#despre_noi">Despre Noi</Link></li>
                        <li><Link href="/#proiecte">Proiecte</Link></li>
                        <li><Link href="/#recenzii">Recenzii</Link></li>
                    </ul>
                </div>

                {/* Coloana 4: Protecția Consumatorilor (ANPC - SAL / SOL) */}
                <div className="footer-links key_page_footer_column_anpc">
                    <h4>Protecția Consumatorilor</h4>
                    <div className="key_page_footer_anpc" style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
                        <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer">
                            <img src="https://gomagcdn.ro/themes/fashion/gfx/sal.png" alt="SAL" style={{ height: '40px' }} />
                        </a>
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                            <img src="https://gomagcdn.ro/themes/fashion/gfx/sol.png" alt="SOL" style={{ height: '40px' }} />
                        </a>
                    </div>
                    <p className="key_page_footer_anpc_text" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Platforme oficiale pentru soluționarea alternativă și online a litigiilor.
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-content" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p>© {currentYear} {nume_complet}. Toate drepturile rezervate.</p>
                    <div className="footer-social" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link href="/termeni-si-conditii">Termeni</Link>
                        <Link href="/politica-confidentialitate">Confidențialitate</Link>
                        <Link href="/politica-cookies">Cookies</Link>
                        <a href="#top" aria-label="Înapoi sus">↑ Sus</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
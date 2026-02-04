import React from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import "./Style/Contact.css";
import { Reveal } from './Reveal';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className='contact-container'>
                {/* Partea Stângă: Info */}
                <div className='contact-info'>
                    <Reveal>
                        <p className='subtitle'>CONTACT</p>
                        <h2>Hai să Construim <span>Împreună</span></h2>
                        <p className='description'>
                            Contactează-ne pentru o consultanță. Suntem aici să răspundem la
                            toate întrebările tale și să începem proiectul casei tale de vis.
                        </p>

                        <div className='info-grid'>
                            <div className='info-item'>
                                <div className='icon-box'><IoLocationOutline /></div>
                                <div>
                                    <h4>Adresă</h4>
                                    <p>Strada ceva<br />București, Sector 1</p>
                                </div>
                            </div>
                            <div className='info-item'>
                                <div className='icon-box'><IoCallOutline /></div>
                                <div>
                                    <h4>Telefon</h4>
                                    <p>+40 700 000 000<br />+40 21 000 0000</p>
                                </div>
                            </div>
                            <div className='info-item'>
                                <div className='icon-box'><IoMailOutline /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@gmail.ro</p>
                                </div>
                            </div>
                            <div className='info-item'>
                                <div className='icon-box'><IoTimeOutline /></div>
                                <div>
                                    <h4>Program</h4>
                                    <p>Luni - Vineri: 08:00 - 18:00<br />Sâmbătă: 09:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Partea Dreaptă: Formular */}
                <Reveal>
                    <div className='contact-form-container'>
                        <h3>Solicită o Ofertă</h3>
                        <form className='contact-form'>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Nume Complet</label>
                                    <input type="text" placeholder="Ion Popescu" />
                                </div>
                                <div className='form-group'>
                                    <label>Telefon</label>
                                    <input type="text" placeholder="+40 700 000 000" />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type="email" placeholder="email@exemplu.ro" />
                            </div>
                            <div className='form-group'>
                                <label>Tip Proiect</label>
                                <select>
                                    <option>Selectează tipul proiectului</option>
                                    <option>Casă Unifamilială</option>
                                    <option>Vilă de Lux</option>
                                    <option>Renovare</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Detalii Proiect</label>
                                <textarea placeholder="Descrie pe scurt proiectul tău..."></textarea>
                            </div>
                            <button type="submit" className='btn-submit'>Trimite Mesajul</button>
                        </form>
                        <p className='form-note'>Răspundem în maxim 24 de ore lucrătoare</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;
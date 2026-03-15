// 'use client';
// import { useState } from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import "./Style/Contact.css";
import { Reveal } from './Reveal';
import { adresa, email, numar_telefon, program } from '../config/site';
// import emailjs from '@emailjs/browser';

import ContactUnic from '@/app/contact/Contact_unic';


const Contact = () => {

    return (
        <section className='contact' id='contact'>
            <div className='contact-container'>
                {/* Partea Stângă: Info */}
                <div className='contact-info'>
                    <Reveal>
                        <p className='subtitle'>CONTACT</p>
                        <h2>Hai să construim <span>împreună</span></h2>
                        <p className='description'>
                            Contactează-ne pentru o consultanță. Suntem aici să răspundem la
                            toate întrebările tale și să începem proiectul casei tale de vis.
                        </p>

                        <div className='info-grid'>
                            <div className='info-item'>
                                <div className='icon-box'><IoLocationOutline /></div>
                                <div>
                                    <h4>Adresă</h4>
                                    <p>
                                        {
                                            adresa.map((v, i) => <span key={i}>{v}<br /></span>)
                                        }
                                    </p>
                                    {/* <p>Strada ceva<br />București, Sector 1</p> */}
                                </div>
                            </div>
                            <div className='info-item'>
                                <div className='icon-box'><IoCallOutline /></div>
                                <div>
                                    <h4>Telefon</h4>
                                    <p>{numar_telefon}</p>
                                </div>
                            </div>
                            <div className='info-item'>
                                <div className='icon-box'><IoMailOutline /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>{email}</p>
                                </div>
                            </div>
                            <div className='info-item'>
                                <div className='icon-box'><IoTimeOutline /></div>
                                <div>
                                    <h4>Program</h4>
                                    <p>
                                        {
                                            program.map((v, i) => <span key={i}>{v}<br /></span>)
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Partea Dreaptă: Formular */}
                <ContactUnic />
            </div>
        </section>
    );
}

export default Contact;
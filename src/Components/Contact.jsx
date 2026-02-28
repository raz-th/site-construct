import { useState } from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import "./Style/Contact.css";
import { Reveal } from './Reveal';
import { adresa, email, numar_telefon, program } from '../config/site';
// import emailjs from '@emailjs/browser';
import { sendEmail } from '../sendEmail';

const tipuri_casa = [
    "Casă din lemn",
    "Casă din cărămidă sau BCA (zidărie)",
    "Casă pe structură metalică",
    "Casă din beton"
]

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", projectType: "", details: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        sendEmail(formData).then((s) => console.log(s)).catch((e) => console.error(e));
    };

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
                <Reveal>
                    <div className='contact-form-container'>
                        <h3>Solicită o Ofertă</h3>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Nume Complet</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ion Popescu"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Telefon</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="+40 700 000 000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email@exemplu.ro"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label>Tip Proiect</label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selectează tipul proiectului</option>
                                    {tipuri_casa.map((v, i) => (
                                        <option key={i} value={v}>{v}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Detalii Proiect</label>
                                <textarea
                                    name="details"
                                    placeholder="Descrie pe scurt proiectul tău..."
                                    style={{ resize: 'vertical', maxHeight: 250 }}
                                    value={formData.details}
                                    onChange={handleChange}
                                    required
                                ></textarea>
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
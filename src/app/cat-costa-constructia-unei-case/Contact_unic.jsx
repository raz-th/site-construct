'use client';

import { Reveal } from '@/Components/Reveal';
import { tipuri_casa } from '@/config/site';
import React, { useState } from 'react';

const ContactUnic = () => {
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
        <Reveal width='fit-content'>
            <div className='contact-form-container' id="contact">
                <h3>Solicită o ofertă pentru o casă la roșu</h3>
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
    );
}

export default ContactUnic;

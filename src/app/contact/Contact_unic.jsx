'use client';
import { Reveal } from '@/Components/Reveal';
import { tipuri_casa } from '@/config/site';
import { sendEmail } from '@/sendEmail';
import React, { useEffect, useState } from 'react';
import { useNavProv } from '../NavContext';

const ContactUnic = ({ tip_proiect }) => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", projectType: "", details: "", area: "", buget: "" })
    const { setMessageData } = useNavProv()
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
        sendEmail(formData).then((s) => {
            console.log(s);
            setMessageData({ show: true, message: "Mesajul a fost trimis! Vă vom contacta în maxim 24 de ore.", type: 'success' });
            setFormData({ name: "", phone: "", email: "", projectType: "", details: "", area: "", buget: "" })
        }).catch((e) => { console.error(e); setMessageData({ show: true, message: "A apărut o eroare. Vă rugăm să încercați mai târziu sau să ne contactați telefonic sau printr-un mail.", type: 'error' });});

    };
    useEffect(() => { if (tip_proiect) setFormData((e) => ({ ...e, projectType: tip_proiect })) }, [tip_proiect]);

    return (
        <Reveal width='fit-content'>
            <div className='contact-form-container' id="contact">
                <h3>Solicită o ofertă</h3>
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
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>Suprafață estimată (mp)</label>
                            <input
                                type="number"
                                name="area"
                                placeholder="ex: 150"
                                value={formData.area}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Buget estimat (€)</label>
                            <input
                                type="text"
                                name="buget"
                                placeholder="ex: 100.000"
                                value={formData.buget ? Number(formData.buget.replace(/\./g, '')).toLocaleString('ro-RO') : ''}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\./g, '');
                                    if (/^\d*$/.test(raw)) {
                                        setFormData(prev => ({ ...prev, buget: raw }));
                                    }
                                }}
                                required
                            />
                        </div>
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

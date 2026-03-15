import { Reveal } from '@/Components/Reveal';
import React from 'react';
import { FaArrowLeft, FaPhone } from 'react-icons/fa';
import "./contact.css"
import { email, numar_telefon, program } from '@/config/site';
import { MdEmail } from 'react-icons/md';
import ContactUnic from './Contact_unic';
import { metadata as allMetadata } from '@/config/site';
export const metadata = allMetadata["/contact"];
const CardInfluente = ({ data = metode_contact[0] }) => {
    const Ic = data.icon;
    return (
        <Reveal width='100%'>
            <div className='card_influenta'>
                <div className='contactpage_cardEtapa_i'>
                    <Ic size={25} />
                </div>
                <div className='card_contactpage_case_continut'>
                    <h1>{data.title}</h1>
                    <p>{typeof data.continut === 'object' ? data.continut.map((v, i) => `${v}\n`) : data.continut}</p>
                </div>
            </div>
        </Reveal>
    )
}

const metode_contact = [
    {
        title: "Telefon",
        continut: numar_telefon,
        icon: FaPhone,
    },
    {
        title: "Email",
        continut: email,
        icon: MdEmail,
    },
    {
        title: "Program",
        continut: program,
        icon: FaPhone,
    },
]
const de_ce = [
    "Consultanță gratuită pentru proiectul tău",
    "Ofertă personalizată în maxim 48 de ore",
    "Vizită gratuită la locația proiectului",
    "Răspunsuri la orice întrebări tehnice",
    "Fără obligații sau costuri ascunse"
]

const Page = () => {
    return (
        <div className='serviciu-page'>
            <div className='contactpage_hero_fade'>
                <div className='contactpage_hero_content'>

                    <Reveal><a className='inapoi_hero' href='/'><FaArrowLeft /> Înapoi la pagina principală</a></Reveal>
                    <Reveal>
                        <h1>
                            Contactează-ne
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='contactpage_hero_description'>
                            Suntem aici să răspundem la toate întrebările tale. Solicită o consultanță gratuită sau cere o ofertă personalizată.
                        </p>
                    </Reveal>

                </div>
            </div>
            <section className='contactpage_section1'>
                <div className='contactpage_section_grid3'>
                    {
                        metode_contact.map((v, i) => <CardInfluente key={i} data={v} />)
                    }
                </div>
            </section>
            <section className='contactpage_section2'>
                <div className='contactpage_section_grid2'>
                    <ContactUnic />
                    <Reveal>
                        <div className='deCeCard'>
                            <h2>De ce să ne contactezi?</h2>
                            <ol>
                                {
                                    de_ce.map((v, i) => <li key={i}>{v}</li>)
                                }
                            </ol>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

export default Page;

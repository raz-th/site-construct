import { Reveal } from '@/Components/Reveal';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./case-la-cheie.css"
import ContactUnic from './Contact_unic';
import IntrebariUnic from '../constructii-case/Intrebari_unic';


const Card = ({ title = " ", continut = " " }) => {
    return (
        <Reveal width='fit-content' >
            <div className='card_caselarosu_case '>
                <h1>
                    {title}
                </h1>
                <p>
                    {continut}
                </p>
            </div>
        </Reveal>
    )
}

const CardEtapa = ({ title = " ", continut = " ", i }) => {
    return (
        <Reveal width='100%'>
            <div className='caselarosu_cardEtapa'>
                <div className='caselarosu_cardEtapa_i'>
                    {String(i + 1).padStart(2, '0')}
                </div>
                <h1>{title}</h1>
                <p>{continut}</p>
            </div>
        </Reveal>
    )
}

const intrebari_frec = [
    { question: "Cât durează construcția unei case la cheie?", answer: "Durata medie este de 6–12 luni, în funcție de suprafața construită, complexitatea proiectului și condițiile meteo. La semnarea contractului primiți un calendar detaliat." },
    { question: "Pot personaliza finisajele?", answer: "Da, absolut! Alegeți finisajele din showroom-ul partenerului nostru: pardoseli, gresie, faianță, vopsele, uși, obiecte sanitare. Designerul nostru vă ajută să creați combinația perfectă." },
    { question: "Ce garanție oferă firma?", answer: "În prezent nu oferim garanție pentru lucrări. Execuția construcției se realizează conform proiectului tehnic și cerințelor stabilite împreună cu clientul." },
    { question: "Prețul include amenajarea curții?", answer: "Da, în pachetul standard sunt incluse alei, terasă, gazon și iluminat exterior. Amenajări peisagistice complexe se pot adăuga la un cost suplimentar." },
    { question: "Pot vizita șantierul în timpul construcției?", answer: "Desigur. Aveți acces permanent la șantier și primiți rapoarte foto săptămânale cu stadiul lucrărilor." },
]


const ce_include = [
    {
        title: "Fundație și structură",
        continut: "Fundație din beton armat, structură completă de rezistență, zidărie și acoperiș — baza solidă a locuinței."
    },
    {
        title: "Instalații complete",
        continut: "Instalații electrice, sanitare, de încălzire și ventilație, toate executate conform normativelor și certificate."
    },
    {
        title: "Tencuieli și glet",
        continut: "Tencuieli interioare și exterioare, glet și amorsaj, pregătite pentru finisajul final ales de dumneavoastră."
    },
    {
        title: "Pardoseli complete",
        continut: "Gresie, parchet laminat sau stratificat, montate profesionist în toate încăperile locuinței."
    },
    {
        title: "Băi complete",
        continut: "Gresie, faianță, obiecte sanitare, robinete și accesorii — băi complet funcționale și estetice."
    },
    {
        title: "Uși și tâmplărie",
        continut: "Uși interioare, uși exterioare, ferestre cu geam termopan și praguri — totul montat și reglat."
    }
]

const avantaje = [
    // "Proiect arhitectural inclus în preț",
    "Casă gata de locuit — vă mutați imediat",
    "Un singur interlocutor pentru tot proiectul",
    "Preț fix stabilit de la început, fără costuri ascunse",
    "Cost total predictibil — buget controlat",
    "Management complet al proiectului",
]


const etape = [
    {
        title: 'Analiza proiectului & planificare',
        continut: 'Analizăm proiectul furnizat de client, stabilim etapele de lucru, materialele necesare și organizăm execuția construcției pentru o desfășurare eficientă a lucrărilor.',
    },
    {
        title: 'Construcția structurii',
        continut: 'Fundație, pereți, planșee, acoperiș — structura completă de rezistență a casei.',
    },
    {
        title: 'Instalațiile',
        continut: 'Trasee electrice, sanitare, termice și de ventilație, testate și certificate.',
    },
    {
        title: 'Finisajele',
        continut: 'Tencuieli, pardoseli, zugrăveli, montaj uși, obiecte sanitare și echipamente.',
    }
]

const Page = () => {
    return (
        <div className='serviciu-page'>
            <div className='caselarosu_hero_fade'>
                <div className='caselarosu_hero_content'>
                    {/* <Reveal>
                        <div className='badge'>
                          <PiMedal /> Peste {parseInt((an_curent - an_inceput) / 10)}0 de ani de excelență în construcții
                        </div>
                      </Reveal> */}

                    <Reveal><a className='inapoi_hero' href='/'><FaArrowLeft /> Înapoi la pagina principală</a></Reveal>
                    <Reveal>
                        <h1>
                            Construcții Case la Cheie
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='caselarosu_hero_description'>
                            O casă la cheie este o locuință complet finisată și gata de locuit. De la fundație la mobilier, de la instalații la grădină — primiți cheile și vă mutați fără niciun efort suplimentar.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className='caselarosu_hero_actions'>
                            <a href='#contact' className='btn-primary'>
                                Solicită Ofertă Gratuită <FaArrowRight />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
            <section className='caselarosu_section1'>
                <Reveal delay={0}>
                    <p className='introDes'>
                       Casa la cheie reprezintă cea mai comodă soluție pentru cei care doresc o locuință nouă fără a se implica în gestionarea mai multor contracte și furnizori. Noi ne ocupăm de absolut tot: proiect, autorizații, construcție, instalații, finisaje și amenajare exterioară.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <p className='introDes'>
                        Cu un preț fix stabilit de la început și un singur interlocutor pe tot parcursul proiectului, aveți certitudinea că bugetul și termenele vor fi respectate. Vă implicați doar în alegerea finisajelor din showroom-ul nostru partener.
                    </p>
                </Reveal>
            </section>
            <section className='caselarosu_section2'>
                <div className="caselarosu_sectionheader">
                    <Reveal>
                        <div className="caselarosu_sectionheader-text">
                            <p className="subtitle">Ce Include</p>
                            <h2>Ce include o casă la cheie</h2>
                        </div>
                    </Reveal>
                </div>
                <div className='caselarosu_section_grid'>
                    {
                        ce_include.map((v, i) => {
                            return (
                                <Card key={i} title={v.title} continut={v.continut} />
                            )
                        })
                    }
                </div>
            </section>
        
            <section className='caselarosu_section1'>
                <div className="caselarosu_sectionheader">
                    <Reveal>
                        <div className="caselarosu_sectionheader-text">
                            <p className="subtitle">Etapele Construcției</p>
                            <h2>Cum construim casa la cheie</h2>
                        </div>
                    </Reveal>
                </div>

                <Reveal>
                    <div className='caselarosu_section_grid2'>
                        {
                            etape.map((v, i) => (
                                <CardEtapa
                                    key={i}
                                    i={i}
                                    title={v.title}
                                    continut={v.continut}
                                    isLast={i === etape.length - 1}
                                />
                            ))
                        }
                    </div>
                </Reveal>
            </section>
            <section className='caselarosu_section2'>
                <div className="caselarosu_sectionheader">
                    <Reveal>
                        <div className="caselarosu_sectionheader-text">
                            <p className="subtitle">Preț Orientativ</p>
                            <h2>Investiția dumneavoastră</h2>
                        </div>
                    </Reveal>
                </div>
                <Reveal width='fit-content' >
                    <div className='card_caselarosu_case_pret'>
                        <h1>
                            700 – 1200 €/mp
                        </h1>
                        <p>
                            *Prețul variază în funcție de complexitatea proiectului, materiale și suprafață.
                        </p>
                    </div>
                </Reveal>
            </section>
            <section className='caselarosu_section3'>
                <div className='contact_content'>
                    <Reveal width='fit-content'>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <p className="subtitle">AVANTAJE</p>
                                <h2>Avantajele unei case la cheie</h2>
                            </div>
                            <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20, fontSize: 20 }} >
                                {
                                    avantaje.map((v, i) => <li style={{ display: 'flex', alignItems: 'center', gap: 10 }} key={i}><IoMdCheckmarkCircleOutline size={20} color='var(--accent-color)' /><p>{v}</p></li>)
                                }
                            </ol>
                        </div>
                    </Reveal>
                    <ContactUnic />
                </div>
            </section>
            <section className='caselarosu_section4'>
                <div className="caselarosu_sectionheader">
                    <Reveal>
                        <div className="caselarosu_sectionheader-text">
                            <p className="subtitle">Întrebări Frecvente</p>
                            <h2>Ai <span>Întrebări?</span></h2>
                        </div>
                    </Reveal>
                </div>
                <IntrebariUnic intrebari={intrebari_frec} />
            </section>
        </div>
    );
}

export default Page;

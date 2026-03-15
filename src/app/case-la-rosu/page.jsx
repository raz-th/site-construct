import { Reveal } from '@/Components/Reveal';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./case-la-rosu.css"
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
    { question: "Cât durează construcția unei case la roșu?", answer: "În medie, o casă la roșu se construiește în 3–5 luni, în funcție de suprafață, complexitate și condițiile meteorologice." },
    { question: "Ce materiale sunt folosite?", answer: "Folosim beton C25/30 pentru fundație și structură, BCA de 30cm sau cărămidă pentru zidărie, lemn tratat pentru șarpantă și învelitoare la alegerea clientului." },
    { question: "Pot continua cu altă firmă finisajele?", answer: "Da, absolut. Casa la roșu este o structură completă pe care orice firmă specializată o poate finisa. Oferim cartea construcției cu toate detaliile tehnice necesare." },
    { question: "Ce garanție oferă firma?", answer: "În prezent nu oferim garanție pentru lucrări. Execuția construcției se realizează conform proiectului tehnic și cerințelor stabilite împreună cu clientul." },
]


const ce_include = [
    {
        title: "Fundația Completă",
        continut: "Fundație din beton armat C25/30 dimensionată conform studiului geotehnic, cu hidroizolație și drenaj perimetral."
    },
    {
        title: "Structura de Rezistență",
        continut: "Stâlpi, grinzi și centuri din beton armat, dimensionate de inginer structurist pentru siguranță maximă."
    },
    {
        title: "Zidăria Exterioară",
        continut: "Pereți din BCA de 30cm sau cărămidă, cu armare în centuri și buiandrugi la golurile de ferestre și uși."
    },
    {
        title: "Planșee Beton Armat",
        continut: "Plăci peste parter/etaj din beton armat turnat monolit sau prefabricat, conform proiectului structural."
    },
    {
        title: "Acoperișul Complet",
        continut: "Șarpantă din lemn tratat, învelitoare la alegere (țiglă, tablă), hidroizolație, jgheaburi și burlane."
    },
    {
        title: "Scară Interioară",
        continut: "Scară din beton armat pentru casele cu etaj sau mansardă, conformă cu proiectul de arhitectură."
    }
]

const avantaje = [
    // "Proiect arhitectural inclus în preț",
    "Cost inițial mai mic - plătești doar structura",
    "Flexibilitate totală la alegerea finisajelor",
    "Control asupra bugetului - finisezi în ritmul tău",
    "Poți continua cu altă firmă pentru finisaje",
    "Beton de înaltă rezistență (C25/30 minim)",
    "Fier beton certificat și trasabil",
    "Hidroizolație fundație inclusă",
]

const ce_nu_include = [
    "Instalații electrice",
    "Instalații sanitare",
    "Instalații de încălzire",
    "Tencuieli interioare și exterioare",
    "Glet și vopsitorii",
    "Pardoseli (gresie, parchet)",
    "Gresie și faianță în băi și bucătărie",
    "Uși interioare",
    "Amenajări exterioare"
];

const etape = [
    {
        title: 'Fundația',
        continut: 'Săpătură, armare, cofrare și turnare fundație cu beton C25/30 și hidroizolație.',
    },
    {
        title: 'Structura',
        continut: 'Stâlpi, grinzi, centuri din beton armat - scheletul de rezistență al casei.',
    },
    {
        title: 'Zidăria',
        continut: 'Ridicare pereți exteriori și interiori din BCA sau cărămidă, cu armări în centuri.',
    },
    {
        title: 'Acoperișul',
        continut: 'Montare șarpantă, învelitoare, astereală, hidroizolație și sistem pluvial.',
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
                            Construcții Case la Roșu
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='caselarosu_hero_description'>
                            Construcția la roșu reprezintă structura completă a casei - de la fundație până la acoperiș. Este soluția ideală pentru cei care doresc o fundație solidă și flexibilitate totală la finisaje.
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
                        O casă la roșu reprezintă structura de rezistență a locuinței, complet finalizată și pregătită pentru etapa de finisare. Aceasta include fundația, pereții structurali, planșeele, acoperișul și, în funcție de contract, tâmplăria exterioară.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <p className='introDes'>
                        Alegerea construcției la roșu este o opțiune populară în România deoarece oferă un echilibru excelent între cost și control. Puteți finaliza finisajele în ritmul propriu, cu bugetul disponibil, sau puteți apela la altă firmă pentru lucrările interioare.
                    </p>
                </Reveal>
            </section>
            <section className='caselarosu_section2'>
                <div className="caselarosu_sectionheader">
                    <Reveal>
                        <div className="caselarosu_sectionheader-text">
                            <p className="subtitle">Ce Include</p>
                            <h2>Ce include construcția la roșu</h2>
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
                            <p className="subtitle_important">Important</p>
                            <h2>Ce <span className='important'>NU</span> include</h2>
                        </div>
                    </Reveal>
                </div>
                <Reveal>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ol className='caselarosu_section_grid3'>
                            {
                                ce_nu_include.map((v, i) => (<li key={i}><IoMdCloseCircleOutline color='var(--alert-color)' size={30} /><p>{v}</p></li>))
                            }
                        </ol>
                    </div>
                </Reveal>

            </section>
            <section className='caselarosu_section1'>
                <div className="caselarosu_sectionheader">
                    <Reveal>
                        <div className="caselarosu_sectionheader-text">
                            <p className="subtitle">Etapele Construcției</p>
                            <h2>Cum construim casa la roșu</h2>
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
                            300 – 450 €/mp
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
                                <h2>Avantajele construcției la roșu</h2>
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
                            <h2>Ai <span>întrebări?</span></h2>
                        </div>
                    </Reveal>
                </div>
                <IntrebariUnic intrebari={intrebari_frec} />
            </section>
        </div>
    );
}

export default Page;

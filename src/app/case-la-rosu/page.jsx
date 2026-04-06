import { Reveal } from '@/Components/Reveal';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoMdCloseCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./case-la-rosu.css"
import ContactUnic from '../contact/Contact_unic';
import IntrebariUnic from '../constructii-case/Intrebari_unic';
import { tipuri_casa } from '@/config/site';
import { metadata as allMetadata } from '@/config/config';

export const metadata = allMetadata["/case-la-rosu"];

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
    {
        question: "Ce materiale sunt folosite?",
        answer: "Materialele folosite sunt stabilite conform proiectului tehnic și cerințelor fiecărei construcții. Echipa noastră respectă specificațiile proiectantului și utilizează materiale conforme standardelor de calitate, pentru o execuție sigură și durabilă."
    },
    // { question: "Pot continua cu altă firmă finisajele?", answer: "Da, absolut. Casa la roșu este o structură completă pe care orice firmă specializată o poate finisa. Oferim cartea construcției cu toate detaliile tehnice necesare." },
    { question: "Ce garanție oferă firma?", answer: "În prezent nu oferim garanție pentru lucrări. Execuția construcției se realizează conform proiectului tehnic și cerințelor stabilite împreună cu clientul." },
]


const ce_include = [
    {
        title: "Fundația Completă",
        continut: "Fundația realizată conform proiectului tehnic, cu hidroizolație și sistem de drenaj perimetral."
    },
    {
        title: "Structura de Rezistență",
        continut: "Stâlpi, grinzi și centuri dimensionate conform studiului structural, pentru siguranță și durabilitate."
    },
    {
        title: "Zidăria Exterioară",
        continut: "Pereți realizați conform proiectului, cu întăriri la golurile pentru ferestre și uși, respectând standardele de rezistență."
    },
    {
        title: "Planșee",
        continut: "Plăci peste parter/etaj realizate conform proiectului structural, pentru stabilitate și durabilitate."
    },
    {
        title: "Acoperiș",
        continut: "Șarpanta este realizată conform proiectului, iar învelitoarea se montează sau se recomandă în funcție de soluția aleasă. Jgheaburile și burlanele sunt incluse conform necesității construcției."
    },
    {
        title: "Scară Interioară",
        continut: "Scară interioară realizată conform proiectului de arhitectură, adaptată configurației locuinței."
    }
]

const avantaje = [
    "Cost inițial mai mic - plătești doar structura",
    "Flexibilitate la alegerea finisajelor",
    "Control asupra bugetului - finisezi în ritmul tău",
    "Materiale și execuție conform proiectului și standardelor de calitate",
    "Hidroizolație fundație inclusă"
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
        continut: 'Săpătură, armare, cofrare și turnarea fundației conform proiectului, cu hidroizolație și drenaj perimetral.',
    },
    {
        title: 'Structura',
        continut: 'Stâlpi, grinzi și centuri dimensionate conform proiectului structural, pentru rezistență și siguranță.',
    },
    {
        title: 'Zidăria',
        continut: 'Ridicarea pereților exteriori și interiori conform proiectului, cu întăriri la golurile pentru ferestre și uși.',
    },
    {
        title: 'Acoperișul',
        continut: 'Montarea șarpantei conform proiectului; învelitoarea se montează în funcție de soluția aleasă, cu jgheaburi și burlane conform necesității.',
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

                    <Reveal delay={100}><a className='inapoi_hero' href='/'><FaArrowLeft /> Înapoi la pagina principală</a></Reveal>
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
                        Construcția unei case la roșu reprezintă etapa de bază a locuinței, în care sunt realizate toate elementele structurale esențiale. Aceasta include <b>fundația, structura de rezistență, pereții, planșeele și acoperișul</b>, oferind o bază solidă și sigură pentru continuarea lucrărilor.
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <p className='introDes'>
                        Este una dintre cele mai apreciate opțiuni de construcție, deoarece oferă un echilibru foarte bun între <b>investiție, control și flexibilitate</b>. Cu ajutorul echipei noastre, fiecare etapă este executată cu atenție, profesionalism și respectarea standardelor de calitate, astfel încât beneficiarul să aibă siguranța unei lucrări bine realizate încă de la început.
                    </p>
                </Reveal>
                <Reveal delay={200}>
                    <p className='introDes'>
                        Este soluția ideală pentru cei care își doresc o construcție bine executată, cu posibilitatea de a personaliza ulterior fiecare detaliu.
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
                    <ContactUnic tip_proiect={tipuri_casa[2]} />
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

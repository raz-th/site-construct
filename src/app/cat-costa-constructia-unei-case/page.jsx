import { Reveal } from '@/Components/Reveal';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline, IoMdTrendingUp } from "react-icons/io";
import { LuRuler, LuHammer } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import "./cat_costa.css"
import IntrebariUnic from '../constructii-case/Intrebari_unic';
import { an_curent } from '@/config/site';
import { metadata as allMetadata } from '@/config/site';

export const metadata = allMetadata["/cat-costa-constructia-unei-case"];

const CardServicii = ({ data = servicii[0] }) => {
    return (
        <Reveal width='100%' >
            <div className='card_catcosta_case '>
                <h1>
                    {data.title}
                </h1>
                <h2 className='card_catcosta_case_pret'>
                    {data.pret}
                </h2>
                <ol>
                    {
                        data.lista.map((v, i) => <li key={i}><IoMdCheckmarkCircleOutline color='var(--accent-color)' />{v}</li>)
                    }
                </ol>
                <p className='card_catcosta_case_msj'>*{data.mesaj}</p>
                <a className='btn-primary' href={data.href}>Detalii {data.title.toLowerCase()}</a>
            </div>
        </Reveal>
    )
}

const CardInfluente = ({ data = ce_influenteaza[0] }) => {
    const Ic = data.icon;
    return (
        <Reveal width='100%'>
            <div className='card_influenta'>
                <div className='catcosta_cardEtapa_i'>
                    <Ic size={25} />
                </div>
                <div className='card_catcosta_case_continut'>
                    <h1>{data.title}</h1>
                    <p>{data.continut}</p>
                </div>
            </div>
        </Reveal>
    )
}

const CardEtapa = ({ title = " ", continut = " ", i }) => {
    return (
        <Reveal width='100%'>
            <div className='catcosta_cardEtapa'>
                <div className='catcosta_cardEtapa_i'>
                    {String(i + 1).padStart(2, '0')}
                </div>
                <h1>{title}</h1>
                <p>{continut}</p>
            </div>
        </Reveal>
    )
}



const intrebari_frec = [
    { question: "Ce costuri suplimentare trebuie să iau în calcul?", answer: "Pe lângă construcția propriu-zisă, trebuie să bugetați: proiectul arhitectural, autorizația de construire, amenajarea exterioară și o rezervă de 10% pentru neprevăzute." },
    { question: "Ce este mai avantajos: casă la roșu sau la cheie?", answer: "Casa la roșu este avantajoasă dacă aveți buget limitat acum și doriți să finisați treptat. Casa la cheie oferă un preț total mai bun (economii la pachet) și eliminați riscul de a locui într-o casă nefinisată. Recomandăm casa la cheie pentru un raport calitate-preț optimal." },
    { question: "Prețurile includ TVA?", answer: "Prețurile orientative prezentate includ TVA de 21%. La semnarea contractului veți primi un deviz detaliat cu toate costurile, inclusiv TVA-ul." },
    { question: "Costul terenului este inclus?", answer: "Nu, prețurile noastre se referă strict la construcția casei. Costul terenului, taxele notariale și eventualele lucrări de infrastructură (drum de acces, utilități la lot) sunt separate." },
]


const servicii = [
    {
        title: "Casă la roșu",
        pret: "300 – 450 €/mp",
        lista: [
            "Fundație din beton armat",
            "Structură de rezistență",
            "Zidărie exterioară",
            "Acoperiș complet"
        ],
        mesaj: "Nu include instalații și finisaje",
        href: "/case-la-rosu"
    },
    {
        title: "Casă la cheie",
        pret: "700 – 1.200 €/mp",
        lista: [
            "Tot ce include casa la roșu",
            "Instalații electrice și sanitare",
            "Finisaje interioare complete",
            "Casă gata de locuit"
        ],
        mesaj: "Preț complet, fără costuri adiționale",
        href: "/case-la-cheie"
    },
]

const ce_influenteaza = [
    {
        title: "Suprafața construită",
        continut: "Cu cât suprafața este mai mare, cu atât costul pe metru pătrat poate scădea datorită economiilor de scară. O casă de 150 mp va avea un cost/mp mai mic decât una de 80 mp.",
        icon: LuRuler,
    },
    {
        title: "Tipul construcției",
        continut: "O casă cu un nivel costă mai puțin per mp decât una cu etaj sau mansardă, dar ocupă mai mult teren. Alegerea depinde de suprafața lotului și buget.",
        icon: FiHome,
    },
    {
        title: "Materialele folosite",
        continut: "Diferența între materiale standard și cele premium poate fi semnificativă. BCA-ul este mai ieftin decât cărămida, iar finisajele de lux cresc considerabil costul total.",
        icon: LuHammer,
    },
    {
        title: "Complexitatea proiectului",
        continut: "Formele arhitecturale complexe, acoperișurile cu mai multe ape, ferestrele mari sau subsolurile adaugă costuri suplimentare față de un proiect simplu.",
        icon: IoMdTrendingUp,
    }
]





const Page = () => {
    return (
        <div className='serviciu-page'>
            <div className='catcosta_hero_fade'>
                <div className='catcosta_hero_content'>
                    {/* <Reveal>
                        <div className='badge'>
                          <PiMedal /> Peste {parseInt((an_curent - an_inceput) / 10)}0 de ani de excelență în construcții
                        </div>
                      </Reveal> */}

                    <Reveal><a className='inapoi_hero' href='/'><FaArrowLeft /> Înapoi la pagina principală</a></Reveal>
                    <Reveal>
                        <h1>
                            Cât Costă Construcția unei Case în {an_curent}
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='catcosta_hero_description'>
                            Ghid complet de prețuri pentru construcția unei case. Află costurile reale, factorii care influențează prețul și cum să-ți planifici bugetul.
                        </p>
                    </Reveal>

                </div>
            </div>
            <section className='catcosta_section1'>
                <div className="catcosta_sectionheader2">
                    <Reveal>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className="catcosta_sectionheader-text2">
                                <p className="subtitle">Prețuri Orientative</p>
                                <h2>Cât costă să-ți <span>construiești casa</span>?</h2>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={0}>
                    <p className='introDes'>
                        Costul construcției unei case depinde de mai mulți factori: suprafața construită, tipul de construcție (la roșu sau la cheie), materialele utilizate, complexitatea proiectului arhitectural și zona geografică. În acest ghid vă prezentăm prețuri orientative actualizate pentru {an_curent}.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <p className='introDes'>
                        Este important să înțelegeți că prețurile variază semnificativ de la un proiect la altul. Cel mai bun mod de a afla costul exact este să solicitați o ofertă personalizată, bazată pe proiectul dumneavoastră specific.
                    </p>
                </Reveal>
            </section>
            <section className='catcosta_section2'>
                <div className="catcosta_sectionheader">
                    <Reveal>
                        <div className="catcosta_sectionheader-text">
                            <p className="subtitle">Tipuri de Construcții</p>
                            <h2>Prețuri pe <span>tipuri de servicii</span></h2>
                        </div>
                    </Reveal>
                </div>
                <div className='catcosta_section_grid'>
                    {
                        servicii.map((v, i) => {
                            return (
                                <CardServicii key={i} data={v} />
                            )
                        })
                    }
                </div>
            </section>
            <section className='catcosta_section1'>
                <div className="catcosta_sectionheader">
                    <Reveal>
                        <div className="catcosta_sectionheader-text">
                            <p className="subtitle">Factori de Preț</p>
                            <h2>Ce influențează <span>costul construcției</span>?</h2>
                        </div>
                    </Reveal>
                </div>

                <Reveal width='100%'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='catcosta_section_grid3'>
                            {
                                ce_influenteaza.map((v, i) => (
                                    <CardInfluente
                                        key={i}
                                        data={v}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </Reveal>
            </section>


            <section className='catcosta_section4'>
                <div className="catcosta_sectionheader">
                    <Reveal>
                        <div className="catcosta_sectionheader-text">
                            <p className="subtitle">Întrebări Frecvente</p>
                            <h2>Întrebări despre <span>costuri</span></h2>
                        </div>
                    </Reveal>
                </div>
                <IntrebariUnic intrebari={intrebari_frec} />
            </section>
            <section className='catcosta_section2'>
                <div className="catcosta_sectionheader">
                    <Reveal>
                        <div className="catcosta_sectionheader-text">
                            <p className="subtitle">Întrebări Frecvente</p>
                            <h2>Vrei să afli prețul <span>exact</span>?</h2>
                        </div>
                        <p>Solicită o ofertă personalizată gratuită. Analizăm proiectul tău și îți oferim un deviz detaliat în maxim 48 de ore.</p>
                    </Reveal>
                </div>
                <div >
                    <Reveal>
                        <a className='btn-primary' href='/contact'>Solicită Ofertă Gratuită <FaArrowRight/></a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

export default Page;

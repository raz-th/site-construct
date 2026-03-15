// import Link from 'next/link';
import './constructii-case.css';
import { Reveal } from '@/Components/Reveal';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { an_curent, an_inceput } from '@/config/site';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ContactUnic from '../contact/Contact_unic';
import IntrebariUnic from './Intrebari_unic';
import { metadata as allMetadata } from '@/config/site';

export const metadata = allMetadata["/constructii-case"];


const Card = ({ title = " ", continut = " ", link }) => {
  return (
    <Reveal width='fit-content'>
      <div className='card_const_case '>
        <h1>
          {title}
        </h1>
        <p>
          {continut}
        </p>
        {link && (<a href={link || "/"}>Află mai multe <FaArrowRight /></a>)}
      </div>
    </Reveal>
  )
}

const CardEtapa = ({ title = " ", continut = " ", i }) => {
  return (
    <Reveal width='fit-content' >
      <div className='cardEtapa'>
        <div className='cardEtapa_i'>
          {i + 1}
        </div>
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

const servicii = [
  {
    title: "Construcții case La roșu",
    continut: "Structura completă a casei - fundație, pereți, planșee și acoperiș - la cel mai bun raport calitate-preț.",
    link: "/case-la-rosu"
  },
  {
    title: "Construcții case la cheie",
    continut: "Casă complet finisată și gata de locuit, de la fundație până la mobilier, într-un singur contract.",
    link: "/case-la-cheie"
  }
];

const dece = [
  {
    title: `Experiență de ${parseInt((an_curent - an_inceput) / 10)}0+ ani`,
    continut: "Peste 40 de proiecte finalizate cu succes. Cunoaștem fiecare etapă a construcției și anticipăm provocările înainte să apară.",
  },
  {
    title: "Echipă calificată",
    continut: "Meșterii noștri sunt certificați și au experiență în construcții rezidențiale moderne. Fiecare specialist lucrează în domeniul său de expertiză.",
  },
  {
    title: "Materiale de calitate",
    continut: "Colaborăm doar cu furnizori de materiale de construcții certificate. Folosim beton de înaltă rezistență, cărămidă premium și izolații de ultimă generație.",
  },
  {
    title: "Respectarea termenelor",
    continut: "Planificăm fiecare etapă cu precizie și respectăm termenele asumate. Primiți rapoarte săptămânale de progres.",
  },
  {
    title: "Transparență totală",
    continut: "Costuri clare de la început, fără surprize. Aveți acces permanent la șantier și comunicare constantă cu managerul de proiect.",
  },
]

const etape = [
  {
    title: 'Consultanță & analiză proiect',
    des: 'Discutăm cerințele clientului și analizăm proiectul furnizat pentru a planifica corect execuția lucrărilor.'
  },
  {
    title: 'Pregătire teren',
    des: 'Decopertare, săpătură, nivelare și pregătirea amplasamentului pentru turnarea fundației.'
  },
  {
    title: 'Fundația',
    des: 'Armare, cofrare și turnare fundație din beton armat C25/30, conform studiului geotehnic.'
  },
  {
    title: 'Structura & zidăria',
    des: 'Ridicare pereți, stâlpi, grinzi, planșee - structura de rezistență completă a casei.'
  },
  {
    title: 'Acoperișul',
    des: 'Montare șarpantă din lemn tratat, învelitoare, hidroizolație, jgheaburi și burlane.'
  },
  {
    title: 'Instalațiile',
    des: 'Instalații electrice, sanitare, termice și de ventilație conform normativelor în vigoare.'
  },
  {
    title: 'Finisajele',
    des: 'Tencuieli, pardoseli, gresie, faianță, vopsitorii decorative și tâmplărie interioară.'
  },
  {
    title: 'Predarea cheilor',
    des: 'Verificări finale, recepție, curățenie profesională și predarea casei finalizate.'
  }
]

const avantaje = [
  // "Proiect arhitectural inclus în preț",
  "Materiale de construcție certificate și trasabile",
  "Izolație termică și fonică la standarde europene",
  "Instalații electrice și sanitare cu certificat de garanție",
  "Sisteme de încălzire eficiente energetic",
  "Finisaje interioare și exterioare la alegere",
]

const intrebari_frec = [
  { question: "Cât costă construcția unei case?", answer: "Prețul variază în funcție de tipul construcției: casa la roșu costă între 300-450 €/mp, iar casa la cheie între 700-1200 €/mp. Prețul final depinde de complexitatea proiectului, materialele alese și suprafața construită." },
  { question: "Cât durează construcția unei case?", answer: "O casă la roșu se construiește în 3-5 luni, iar o casă la cheie în 6-12 luni, în funcție de complexitate și condițiile meteo. Oferim un calendar detaliat de execuție la semnarea contractului." },
  { question: "Ce include construcția la roșu?", answer: "Construcția la roșu include fundația, structura de rezistență (stâlpi, grinzi, planșee), zidăria exterioară și acoperișul. Nu include instalații, finisaje interioare sau amenajări exterioare." },
  { question: "Ce materiale folosiți?", answer: "Folosim materiale certificate de la furnizori de încredere: beton C25/30 minim, BCA sau cărămidă premium, fier beton certificat, lemn tratat pentru șarpantă și izolații de ultimă generație." },
  { question: "Oferiți garanție pentru lucrări?", answer: "În prezent nu oferim garanție formală pentru lucrări. Ne concentrăm însă pe realizarea construcțiilor cu atenție la detalii și utilizarea unor materiale de calitate, pentru a asigura durabilitatea și siguranța fiecărui proiect." },
  { question: "Oferiți și servicii de proiectare?", answer: "Nu oferim servicii de proiectare. Lucrăm pe baza proiectului furnizat de client sau realizat de arhitectul ales de acesta, iar echipa noastră se ocupă de execuția construcției conform planurilor tehnice." },
]

export default function ConstructiiCasePage() {
  return (
    <div className="serviciu-page">

      <div className='const_hero_fade'>
        <div className='const_hero_content'>
          {/* <Reveal>
            <div className='badge'>
              <PiMedal /> Peste {parseInt((an_curent - an_inceput) / 10)}0 de ani de excelență în construcții
            </div>
          </Reveal> */}

          <Reveal><a className='inapoi_hero' href='/'><FaArrowLeft /> Înapoi la pagina principală</a></Reveal>
          <Reveal>
            <h1>
              Construcții Case - Servicii Profesionale de Construire Case
            </h1>
          </Reveal>

          <Reveal>
            <p className='const_hero_description'>
              Construim case de la zero, cu materiale premium și echipe de specialiști. Cu o experiență de
              peste {parseInt((an_curent - an_inceput) / 10)}0 ani în domeniul construcțiilor rezidențiale, suntem partenerul de încredere pentru casa visurilor dumneavoastră.
            </p>
          </Reveal>

          <Reveal>
            <div className='const_hero_actions'>
              <a href='#contact' className='btn-primary'>
                Solicită ofertă gratuită <FaArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <section className='const_section1'>
        <Reveal delay={0}>
          <p className='introDes'>
            Firma noastră oferă servicii complete de construcții case în toată zona de vest a României. Cu o echipă numeroasă de profesioniști calificați
            construim case rezidențiale, de la vile moderne la case tradiționale. Fiecare proiect beneficiază de atenția noastră la detalii, materiale de cea mai
            înaltă calitate și un management de proiect riguros.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className='introDes'>
            Construim o gamă variată de locuințe: case cu un nivel, case cu etaj, case cu mansardă și vile. Lucrăm atât în mediul urban, cât și în zonele rurale,
            adaptându-ne la specificul fiecărui teren și la cerințele urbanistice locale.{/*  Zonele în care activăm includ Timișoara, Arad, Oradea și localitățile limitrofe. */}
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className='introDes'>
            Indiferent dacă doriți o construcție la roșu pe care să o finisați în ritmul propriu sau o casă la cheie gata de mutat, vă putem oferi soluția optimă,
            adaptată bugetului și nevoilor familiei dumneavoastră.
          </p>
        </Reveal>
      </section>
      <section className='const_section2'>
        <div className="const_sectionheader">
          <Reveal>
            <div className="const_sectionheader-text">
              <p className="subtitle">SERVICII</p>
              <h2>Serviciile <span>noastre</span></h2>
            </div>
          </Reveal>
        </div>
        <div className='const_section_grid'>
          {
            servicii.map((v, i) => {
              return (
                <Card key={i} title={v.title} continut={v.continut} link={v.link} />
              )
            })
          }
        </div>
      </section>
      <section className='const_section2'>
        <div className="const_sectionheader">
          <Reveal>
            <div className="const_sectionheader-text">
              <p className="subtitle">De Ce Noi</p>
              <h2>De ce să alegi firma noastră</h2>
            </div>
          </Reveal>
        </div>
        <div className='const_section_grid2'>
          {
            dece.map((v, i) => {
              return (
                <Card i={i} key={i} title={v.title} continut={v.continut} link={v.link} />
              )
            })
          }
        </div>
      </section>
      <section className='const_section1'>
        <div className="const_sectionheader">
          <Reveal>
            <div className="const_sectionheader-text">
              <p className="subtitle">Etapele Construcției</p>
              <h2>Etapele construcției unei case</h2>
            </div>
          </Reveal>
        </div>
        <div className='const_section_grid3'>
          {
            etape.map((v, i) => {
              return (
                <CardEtapa i={i} key={i} title={v.title} continut={v.des} />
              )
            })
          }
        </div>
      </section>
      <section className='const_section3'>
        <div className='contact_content'>
          <Reveal width='fit-content'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p className="subtitle">AVANTAJE</p>
                <h2>Beneficiile <span>colaborării</span></h2>
              </div>
              <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20, fontSize: 20 }} >
                {
                  avantaje.map((v, i) => <li style={{ display: 'flex', alignItems: 'center', gap: 10 }} key={i}><IoMdCheckmarkCircleOutline size={20} color='var(--accent-color)' />{v}</li>)
                }
              </ol>
            </div>
          </Reveal>
          <ContactUnic />
        </div>
      </section>
      <section className='const_section2'>
        <div className="const_sectionheader">
          <Reveal>
            <div className="const_sectionheader-text">
              <p className="subtitle">Întrebări frecvente</p>
              <h2>Ai <span>întrebări?</span></h2>
            </div>
          </Reveal>
        </div>
        <IntrebariUnic intrebari={intrebari_frec} />
      </section>
    </div>
  );
}
import { GoHome } from "react-icons/go";
// import { LuRuler, LuWrench } from "react-icons/lu";
import "./Style/Servicii.css"
import { Reveal } from './Reveal';
import { FaArrowRight } from 'react-icons/fa';
// import { useRouter } from "next/router";


const dummyImg = "/assets/dummy.png"


const Card = ({ title, description, Icon, i, image, href }) => {
    // const nav = useRouter();
    return (
        <Reveal>
            <div className='card' >
                <img src={image || dummyImg.src} alt="" />
                <div className='card_content'>
                    <div style={{display: "flex", flexDirection: "column", gap: "1.2rem"}}>
                        <div className='card-icon'>
                            <Icon size={24} />
                        </div>
                        <h3>{title}</h3>
                        <p style={{marginBottom: 20}}>{description}</p>
                    </div>
                    <a href={href}>Află mai multe <FaArrowRight /></a>
                </div>

            </div>
        </Reveal>
    )
}

const servicesData = [
    {
        title: "Case Moderne",
        image: "/assets/IMG-1.jpg",
        Icon: GoHome,
        description: "Vile premium cu finisaje de înaltă calitate, piscine, grădini peisagistice și toate facilitățile moderne.",
        href: "/constructii-case"
    },
    {
        title: "Case la Cheie",
        image: "/assets/IMG-2.jpg",
        Icon: GoHome,
        description: "Locuințe eficiente și elegante, optimizate pentru confort zilnic, bugete echilibrate și funcționalitate pe termen lung.",
        href: "/case-la-cheie"
    },
    {
        title: "Case la Roșu",
        image: "/assets/IMG-3.jpg",
        Icon: GoHome,
        description: "Construim structura completă a casei – fundație, zidărie și acoperiș – pregătită pentru finisajele dorite de tine. O soluție flexibilă și eficientă pentru a-ți personaliza locuința după propriul stil și buget.",
        href: "/case-la-rosu"
    },
];

const Servicii = () => {
    return (
        <section className='servicii' id='servicii'>
            <Reveal width='fit-content'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className='subtitle'>SERVICIILE NOASTRE</p>
                    <h2 className='t'>Soluții Complete de <span>Construcții</span></h2>
                    <p className='description'>De la proiectare până la finisaje, oferim servicii complete pentru casa visurilor tale. Lucrăm cu arhitecți premiați și echipe experimentate pentru a livra rezultate premium.</p>
                </div>
            </Reveal>

            <div className="servicii-grid">
                {servicesData.map((service, index) => (
                    <Card i={index} key={index} {...service} />
                ))}
            </div>
        </section>
    );
}

export default Servicii;
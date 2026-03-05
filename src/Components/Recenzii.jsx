
import "./Style/Recenzii.css"
import { Reveal } from './Reveal';

const Card = ({ data, i }) => {
    const { descriere } = data;
    // if (window.innerWidth <= 765) {
    //     return (
    //         <div className="recenzie-card">
    //             <div className="rating">
    //                 <label />
    //                 <label />
    //                 <label />
    //                 <label />
    //                 <label />
    //             </div>
    //             <div className="recenzie-info">
    //                 <h3>„{descriere}”</h3>
    //                 {/* <p>{location}  •  {size}</p> */}
    //             </div>
    //             {/* <div className='recenzie-profil'>
    //                 <div className='recenzie-pfp' >
    //                     {nume[0]}
    //                 </div>
    //                 <div>
    //                     <h3>{nume}</h3>
    //                     <p>{localitate}</p>
    //                 </div>
    //             </div> */}
    //         </div>
    //     )
    // }
    return (
        <Reveal delay={i * 100 + 50}>
            <div className="recenzie-card">
                <div className="rating">
                    <label />
                    <label />
                    <label />
                    <label />
                    <label />
                </div>
                <div className="recenzie-info">
                    <h3>„{descriere}”</h3>
                    {/* <p>{location}  •  {size}</p> */}
                </div>
                {/* <div className='recenzie-profil'>
                    <div className='recenzie-pfp' >
                        {nume[0]}
                    </div>
                    <div>
                        <h3>{nume}</h3>
                        <p>{localitate}</p>
                    </div>
                </div> */}
            </div>
        </Reveal>
    )
}

const lista_cu_recenzii = [
    {
        stele: 5,
        descriere: "Am colaborat pentru construcția casei la cheie și totul a decurs peste așteptări. Echipa serioasă, termene respectate și atenție la detalii. Recomand cu încredere.",
        nume: "Popescu Andrei",
        localitate: "Bucuresti"
    },
    {
        stele: 5,
        descriere: "Profesioniști de la proiectare până la finisaje. Comunicarea a fost foarte bună pe tot parcursul lucrării, iar rezultatul final arată exact cum ne-am dorit.",
        nume: "Ionescu Maria",
        localitate: "Bucuresti"
    },
    {
        stele: 5,
        descriere: "Am construit o vilă cu ei și experiența a fost una foarte bună. Au venit cu sugestii utile pe parcurs și au respectat bugetul stabilit inițial.",
        nume: "Dumitru Alexandru",
        localitate: "Bucuresti"
    },
    {
        stele: 5,
        descriere: "Seriozitate și transparență de la început până la final. Ne-au ținut la curent cu fiecare etapă și rezultatul final arată impecabil.",
        nume: "Marinescu David",
        localitate: "Bucuresti"
    }
]
const Recenzii = () => {
    return (
        <div className='recenzii' id='recenzii'>
            <div className='recenzii-content'>
                <div className="recenzii-header">
                    <Reveal>
                        <div className="header-text">
                            <p className="subtitle">RECENZII</p>
                            <h2>Ce spun <span>Clienții</span> Noștri</h2>
                            <p className="description">
                                Satisfacția clienților noștri este cea mai mare recompensă. Iată câteva din experiențele lor.
                            </p>
                        </div>
                    </Reveal>
                    {/* <button className="btn-view-all">
                                    Vezi Toate Proiectele <span><LuArrowUpRight /></span>
                                </button> */}
                </div>

                <div className="recenzii-grid">
                    {/* {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))} */}
                    {
                        lista_cu_recenzii.map((p, i) => (<Card i={i} data={p} key={i} />))
                    }
                </div>
            </div>
        </div>
    );
}

export default Recenzii;

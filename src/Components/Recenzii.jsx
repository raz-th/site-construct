import React from 'react';
import "./Style/Recenzii.css"
import { Reveal } from './Reveal';

const Card = ({ data, i }) => {
    const { descriere, nume, localitate } = data;
    if (window.innerWidth <= 765) {
        return (
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
                <div className='recenzie-profil'>
                    <div className='recenzie-pfp' >
                        {nume[0]}
                    </div>
                    <div>
                        <h3>{nume}</h3>
                        <p>{localitate}</p>
                    </div>
                </div>
            </div>
        )
    }
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
                <div className='recenzie-profil'>
                    <div className='recenzie-pfp' >
                        {nume[0]}
                    </div>
                    <div>
                        <h3>{nume}</h3>
                        <p>{localitate}</p>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}

const lista_cu_recenzii = [
    {
        stele: 5,
        descriere: "Cupidatat deserunt ex nisi enim aute veniam officia tempor eiusmod laboris elit ipsum nisi. Et ut nulla eu duis id. Tempor aute quis ea tempor eiusmod amet ad excepteur mollit labore sunt adipisicing. Amet culpa cupidatat commodo in id do consequat sunt ea.",
        nume: "Popescu Andrei",
        localitate: "Bucuresti"
    },
    {
        stele: 5,
        descriere: "Cupidatat deserunt ex nisi enim aute veniam officia tempor eiusmod laboris elit ipsum nisi. Et ut nulla eu duis id. Tempor aute quis ea tempor eiusmod amet ad excepteur mollit labore sunt adipisicing. Amet culpa cupidatat commodo in id do consequat sunt ea.",
        nume: "Ionescu Maria",
        localitate: "Bucuresti"
    },
    {
        stele: 5,
        descriere: "Cupidatat deserunt ex nisi enim aute veniam officia tempor eiusmod laboris elit ipsum nisi. Et ut nulla eu duis id. Tempor aute quis ea tempor eiusmod amet ad excepteur mollit labore sunt adipisicing. Amet culpa cupidatat commodo in id do consequat sunt ea.",
        nume: "Dumitru Alexandru",
        localitate: "Bucuresti"
    },
    {
        stele: 5,
        descriere: "Cupidatat deserunt ex nisi enim aute veniam officia tempor eiusmod laboris elit ipsum nisi. Et ut nulla eu duis id. Tempor aute quis ea tempor eiusmod amet ad excepteur mollit labore sunt adipisicing. Amet culpa cupidatat commodo in id do consequat sunt ea.",
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

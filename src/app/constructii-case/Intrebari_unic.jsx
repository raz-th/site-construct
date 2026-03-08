'use client';

import { Reveal } from '@/Components/Reveal';
import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Card = ({ intrebare, raspuns, eDeschis, onClick }) => {
    return (
        <button className='card_intrebare' onClick={() => onClick()}>
            <Reveal>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: 'center', gap: "1rem" }}>
                        <FaRegQuestionCircle size={25} color='var(--accent-color)' />
                        <h2 style={{textAlign: 'start'}}>{intrebare}</h2>
                    </div>
                    <FaAngleDown style={{ transition: '.3s ease', transform: eDeschis ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateRows: eDeschis ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease'
                }}>
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{ paddingTop: '1rem', textAlign: 'start', color: "#707070", fontSize: 17 }}>{raspuns}</p>
                    </div>
                </div>
            </Reveal>
        </button>
    )
}

const IntrebariUnic = ({ intrebari = [] }) => {
    const [iiDeschis, setiiDeschis] = useState(null);
    return (
        <div className='const_section_intrebari'>
            {intrebari.map((v, i) => <Card intrebare={v.question} raspuns={v.answer} key={i} eDeschis={iiDeschis === i} onClick={() => setiiDeschis((e) => e === i ? null : i)} />)}
        </div>
    );
}

export default IntrebariUnic;

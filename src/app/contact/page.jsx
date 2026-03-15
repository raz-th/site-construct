import { Reveal } from '@/Components/Reveal';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import "./contact.css"

const Page = () => {
    return (
        <div className='serviciu-page'>
            <div className='catcosta_hero_fade'>
                <div className='catcosta_hero_content'>

                    <Reveal><a className='inapoi_hero' href='/'><FaArrowLeft /> Înapoi la pagina principală</a></Reveal>
                    <Reveal>
                        <h1>
                            Contactează-ne
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='catcosta_hero_description'>
                            Suntem aici să răspundem la toate întrebările tale. Solicită o consultanță gratuită sau cere o ofertă personalizată.
                        </p>
                    </Reveal>

                </div>
            </div>
        </div>
    );
}

export default Page;

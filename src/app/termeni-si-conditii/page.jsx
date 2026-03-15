import Link from 'next/link';
import './legal.css';
import { email, numar_telefon } from '@/config/site';
import { metadata as allMetadata } from '@/config/site';
export const metadata = allMetadata["/termeni-si-conditii"];

export default function TermeniPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <p className="legal-subtitle">INFORMAȚII LEGALE</p>
        <h1>Termeni și <span>Condiții</span></h1>
        <p className="legal-date">Ultima actualizare: martie 2026</p>
      </div>

      <div className="legal-container">

        <section className="legal-section">
          <h2>1. Introducere</h2>
          <p>
            Bine ați venit pe site-ul AURVIS CONSTRUCT DESIGN. Următorii termeni și condiții de utilizare
            se aplică utilizării de către dumneavoastră a site-ului nostru, inclusiv orice conținut,
            caracteristici, elemente, funcționalitate și servicii oferite pe sau prin intermediul site-ului.
            Vă rugăm să citiți aceste condiții cu atenție înainte să utilizați site-ul.
          </p>
          <h2>2. Informații despre companie</h2>
          <p>
            Site-ul <strong>constructii-casa.ro</strong> este deținut și operat de{' '}
            <strong>AURVIS CONSTRUCT DESIGN</strong>.
          </p>
          <h2>3. Limitarea răspunderii</h2>
          <p>AURVIS CONSTRUCT DESIGN nu va acorda nicio garanție referitoare la:</p>
          <ul>
            <li>Evitarea utilizării anevoioase sau întreruperii în utilizare a site-ului</li>
            <li>Neafectarea în sens negativ a altor sisteme prin utilizarea site-ului</li>
            <li>Inexistența pe site a virușilor sau alte componente care ar putea dăuna utilizatorilor</li>
          </ul>
          <p>
            AURVIS CONSTRUCT DESIGN nu poate fi responsabilă pentru niciun fel de daune directe
            sau indirecte produse prin utilizarea site-ului.
          </p>
          <h2>4. Marcă și drept de autor</h2>
          <p>
            Dreptul de autor pentru toate informațiile existente pe acest site este deținut de
            AURVIS CONSTRUCT DESIGN. Niciun material de pe acest site nu poate fi reprodus parțial,
            integral sau modificat fără acordul expres al companiei. Toate drepturile sunt rezervate.
          </p>
          <p>
            Este strict interzisă folosirea acestui site în scopul distrugerii sau alterării lui,
            a conținutului sau a securității acestuia ori pentru discreditarea AURVIS CONSTRUCT DESIGN.
          </p>
          <h2>5. Scopul site-ului</h2>
          <p>
            Site-ul are ca scop prezentarea serviciilor de construcții oferite de AURVIS CONSTRUCT DESIGN
            și facilitarea contactului cu potențialii clienți. Orice persoană care dorește să solicite
            un serviciu este rugată să ne contacteze prin mijloacele de contact prezente pe site,
            pentru a se informa asupra disponibilității și condițiilor contractuale.
          </p>
          <h2>6. Confidențialitate și date personale</h2>
          <p>
            Protecția datelor dumneavoastră personale este o preocupare majoră a AURVIS CONSTRUCT DESIGN.
            Toate datele colectate sunt procesate conform prevederilor GDPR și legislației române în vigoare.
          </p>
          <p>
            Conform Regulamentului UE 2016/679 (GDPR), aveți dreptul de acces, rectificare, ștergere
            și opoziție față de prelucrarea datelor. Pentru detalii complete, consultați{' '}
            <Link className='a-tel' href="/politica-confidentialitate">Politica de Confidențialitate</Link>.
          </p>
          <h2>7. Responsabilitățile utilizatorului</h2>
          <p>Ca utilizator al site-ului, aveți obligația:</p>
          <ul>
            <li>Să furnizați date adevărate, exacte și complete în formularul de contact</li>
            <li>Să nu utilizați site-ul în scopuri ilegale sau dăunătoare</li>
            <li>Să nu transmiteți materiale care conțin viruși sau programe malițioase</li>
            <li>Să nu publicați conținut care contravine normelor legale în vigoare</li>
          </ul>
          <h2>8. Modificări</h2>
          <p>
            Ne rezervăm dreptul de a modifica periodic acești termeni fără notificare prealabilă.
            Continuarea utilizării site-ului după modificări reprezintă acceptarea acestora.
          </p>
          <h2>9. Contact</h2>
          <p>
            Ne puteți contacta oricând prin{' '}
            <Link className='a-tel' href="/#contact">formularul de contact</Link>,
            la numărul <a className='a-tel' href={`tel:${numar_telefon}`}>{numar_telefon}</a>{' '}
            sau pe email la <a className='a-tel' href={`mailto:${email}`}>{email}</a>.
          </p>
          <p>Data: martie 2026</p>
        </section>


        {/* <div className="legal-links">
          <Link href="/politica-confidentialitate">Politica de Confidențialitate</Link>
          <Link href="/politica-cookies">Politica Cookies</Link>
          <Link href="/">Înapoi Acasă</Link>
        </div> */}
      </div>
    </div>
  );
}
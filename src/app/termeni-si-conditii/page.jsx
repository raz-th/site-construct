import Link from 'next/link';
import './legal.css';
import { email, numar_telefon } from '@/config/site';
import { metadata as allMetadata } from '@/config/config';
export const metadata = allMetadata["/termeni-si-conditii"];

export default function TermeniPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <p className="legal-subtitle">INFORMAȚII LEGALE</p>
        <h1>Termeni și <span>Condiții</span></h1>
        <p className="legal-date">Ultima actualizare: Aprilie 2026</p>
      </div>

      <div className="legal-container">

        <section className="legal-section">
          <h2>1. Despre noi</h2>
          <p>
            Bine ați venit pe site-ul <b><span>AURVIS CONSTRUCT DESIGN</span></b>. Următorii termeni și condiții de utilizare
            se aplică utilizării de către dumneavoastră a site-ului nostru, inclusiv orice conținut,
            caracteristici, elemente, funcționalitate și servicii oferite pe sau prin intermediul site-ului.
            Vă rugăm să citiți aceste condiții cu atenție înainte să utilizați site-ul.
          </p>
          <h2>2. Informații și Prețuri</h2>
          <p>
            Toate informațiile prezentate pe acest site (descrieri, fotografii, prețuri orientative) au scop informativ. Deoarece fiecare proiect de construcție este unic, <span>ofertele finale și termenele de execuție se stabilesc exclusiv prin contract scris</span>, în urma analizei proiectului tehnic de execuție (P.T.H.).
          </p>
          <h2>3. Drepturi de autor</h2>
          <p>Suntem mândri de munca noastră. Fotografiile cu șantierele și proiectele realizate, precum și textele de pe acest site, aparțin <b><span>AURVIS CONSTRUCT DESIGN</span></b>.</p>
          <ul>
            <li>Puteți folosi informațiile pentru uz personal (alegerea unei soluții de construcție).</li>
            <li>Este strict interzisă copierea pozelor sau a textelor pentru a fi folosite pe alte site-uri sau în scopuri comerciale fără acordul nostru scris.</li>
          </ul>
          <h2>4. Limitarea răspunderii</h2>
          <p>
            Deși facem eforturi constante ca site-ul să fie funcțional și corect actualizat, nu putem garanta că acesta va fi în permanență fără erori tehnice. Nu ne asumăm responsabilitatea pentru eventuale probleme cauzate de browserul dumneavoastră sau de conexiunea la internet.
          </p>
          <h2>5. Utilizarea formularului de contact</h2>
          <p>
            Prin completarea formularului de ofertă, vă angajați să furnizați date reale. Ne rezervăm dreptul de a nu răspunde solicitărilor care par false, incomplete sau care conțin un limbaj inadecvat.
          </p>
        </section>


        <div className="legal-links" style={{ marginTop: '50px', display: 'flex', gap: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link href="/politica-confidentialitate" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Politica de confidențialitate</Link>
          <Link href="/" style={{ textDecoration: 'underline' }}>Înapoi la Prima Pagină</Link>
        </div>
      </div>
    </div>
  );
}
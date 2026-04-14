import Link from 'next/link';
import '../termeni-si-conditii/legal.css';
import { metadata as allMetadata } from '@/config/config';
import { FakeNav } from '@/Components/Nav';

export const metadata = allMetadata["/politica-confidentialitate"];

export default function ConfidentialitatePage() {
  return (
    <>
      <FakeNav />
      <div className="legal-page">
        <div className="legal-hero">
          <p className="legal-subtitle">PROTECȚIA DATELOR</p>
          <h1>Politica de <span>confidențialitate</span></h1>
          <p className="legal-date">Ultima actualizare: Aprilie 2026</p>
        </div>

        <div className="legal-container">
          <section className="legal-section">
            <p className="legal-intro">
              La <strong><span>AURVIS CONSTRUCT DESIGN</span></strong>, știm cât de importantă este discreția atunci când pornești la drum pentru a-ți construi o casă. Nu colectăm date de dragul de a le avea și tratăm informațiile tale cu aceeași seriozitate cu care abordăm fiecare șantier.
            </p>

            <h2>1. Ce date colectăm și de ce?</h2>
            <p>
              În momentul în care folosești formularul nostru de contact sau ne apelezi telefonic, ne oferi acces la câteva informații esențiale pentru a-ți putea oferi un răspuns relevant:
            </p>
            <ul>
              <li><strong>Numele tău:</strong> Pentru a știi cui ne adresăm în comunicarea noastră.</li>
              <li><strong>Telefon și Email:</strong> Canalele prin care îți transmitem oferta de preț sau te contactăm pentru detalii tehnice.</li>
              <li><strong>Detalii proiect (Suprafață, Buget, Locație):</strong> Informații vitale pentru a-ți oferi o estimare de cost cât mai apropiată de realitate.</li>
            </ul>

            <h2>2. Transparență totală: Unde stau datele tale?</h2>
            <p>
              Datele trimise prin formular ajung direct în căsuța noastră de email securizată. Nu folosim baze de date externe complexe și nu „vindem” listele noastre de contacte către firme de marketing. Accesul la aceste informații îl are doar echipa noastră care se ocupă direct de ofertare și execuție.
            </p>

            <h2>3. Cât timp păstrăm informațiile?</h2>
            <p>
              Dacă solicitarea ta se transformă într-o colaborare, vom păstra datele pe toată durata contractului (și după, conform obligațiilor legale). Dacă doar ai cerut o ofertă și nu am început lucrul, păstrăm datele tale maxim <strong>24 de luni</strong>, în cazul în care decizi să revii asupra proiectului mai târziu.
            </p>

            <h2>4. Drepturile tale (GDPR)</h2>
            <p>
              Vrem să ai control total asupra informațiilor tale. Ne poți scrie oricând la <strong>aurvis14@gmail.com</strong> pentru:
            </p>
            <ul>
              <li><strong>Acces:</strong> Să vezi ce date avem stocate.</li>
              <li><strong>Rectificare:</strong> Să corectăm un număr de telefon sau un nume.</li>
              <li><strong>Ștergere (Dreptul de a fi uitat):</strong> Vom șterge orice urmă a discuției noastre din sistemele noastre digitale în maxim <strong>7 zile</strong> de la cerere.</li>
            </ul>

            <h2>5. Dreptul de a te adresa autorităților</h2>
            <p>
              Dacă simți că prelucrarea datelor tale nu a fost făcută corect, ai dreptul de a depune o plângere la Autoritatea Națională de Supraveghere (ANSPDCP):{' '}
              <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                www.dataprotection.ro
              </a>
            </p>

            <div className="legal-contact-box" style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #cc0000' }}>
              <h3>Ai întrebări?</h3>
              <p>Suntem aici să îți răspundem la orice nelămurire legată de datele tale sau de proiectul tău de construcție:</p>
              <p><strong>Telefon:</strong> +40 730 535 939</p>
              <p><strong>Email:</strong> aurvis14@gmail.com</p>
            </div>
          </section>

          <div className="legal-links" style={{ marginTop: '50px', display: 'flex', gap: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <Link href="/termeni-si-conditii" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Termeni și Condiții</Link>
            <Link href="/" style={{ textDecoration: 'underline' }}>Înapoi la Prima Pagină</Link>
          </div>
        </div>
      </div>
    </>
  );
}
import Link from 'next/link';
import '../termeni-si-conditii/legal.css';

export const metadata = {
  title: "Politica de Confidențialitate | AURVIS CONSTRUCT DESIGN",
  description: "Informare privind prelucrarea datelor cu caracter personal pe site-ul AURVIS CONSTRUCT DESIGN, conform GDPR.",
};

export default function ConfidentialitiatePage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <p className="legal-subtitle">INFORMAȚII LEGALE</p>
        <h1>Politica de <span>Confidențialitate</span></h1>
        <p className="legal-date">Ultima actualizare: martie 2026</p>
      </div>

      <div className="legal-container">

        <section className="legal-section">
          <h2>Informare privind prelucrarea datelor cu caracter personal</h2>
          <p>
            În ceea ce privește datele dumneavoastră personale, aveți posibilitatea de a exercita
            oricare dintre drepturile de mai jos, prin intermediul unui email trimis la adresa de
            contact a companiei. <strong>AURVIS CONSTRUCT DESIGN</strong> va da curs cererii
            dumneavoastră în decurs de cel mult <strong>7 zile</strong>.
          </p>
          <p>
            Datele colectate prin formularul de contact (nume, email, telefon, mesaj) sunt folosite
            exclusiv pentru a răspunde solicitărilor dumneavoastră privind serviciile de construcții
            oferite de AURVIS CONSTRUCT DESIGN, cu sediul în Giurgiu, România.
          </p>
          <h2>a. Dreptul de acces la datele cu caracter personal</h2>
          <p>
            Aveți dreptul de a obține din partea AURVIS CONSTRUCT DESIGN o confirmare a faptului că
            datele personale sunt sau nu prelucrate, scopul prelucrării și perioada pentru care
            se prelucrează.
          </p>
          <h2>b. Dreptul la rectificare</h2>
          <p>
            Aveți dreptul de a cere rectificarea datelor inexacte care vă privesc. Dacă unele
            date despre dumneavoastră sunt incorecte, vă rugăm să ne informați cât mai curând posibil.
          </p>
          <h2>c. Dreptul de a șterge datele prelucrate</h2>
          <p>
            Aveți dreptul de a solicita ștergerea datelor personale care vă privesc.
            AURVIS CONSTRUCT DESIGN are obligația de a șterge datele personale dacă:
          </p>
          <ul>
            <li>Datele au fost folosite în alt scop decât cel pentru care au fost colectate sau nu mai sunt necesare scopului inițial</li>
            <li>A fost retras consimțământul pe baza căruia au fost prelucrate</li>
            <li>Datele cu caracter personal au fost prelucrate ilegal</li>
            <li>Vă opuneți prelucrării și nu există motive de prevalență a intereselor operatorului</li>
            <li>Datele trebuie șterse conform obligațiilor dreptului Uniunii Europene sau intern</li>
          </ul>
          <h2>d. Dreptul de a solicita restricționarea prelucrării</h2>
          <p>
            Aveți dreptul de a obține restricționarea prelucrării datelor cu caracter personal
            în următoarele cazuri:
          </p>
          <ul>
            <li>Când se contestă exactitatea datelor, pentru perioada necesară verificării acestora</li>
            <li>Când prelucrarea este ilegală, iar dumneavoastră nu solicitați ștergerea datelor</li>
            <li>Când vă exercitați dreptul la opoziție</li>
          </ul>
          <h2>e. Dreptul de portabilitate a datelor</h2>
          <p>
            Reprezintă dreptul de a primi datele cu caracter personal care vă privesc și pe care
            ni le-ați furnizat, în structura utilizată de noi în mod curent. Totodată, aveți
            posibilitatea de a transmite aceste date altui operator, putând cere transmiterea
            directă de la noi către celălalt operator, dacă este posibil din punct de vedere tehnic.
          </p>
          <h2>f. Dreptul la opoziție</h2>
          <p>
            Reprezintă dreptul dumneavoastră de a vă opune oricând, în mod gratuit, unei astfel
            de prelucrări, inclusiv creării de profiluri, motivat de situația particulară în care
            vă aflați. De asemenea, vă puteți opune în orice moment prelucrării datelor în
            scopuri de marketing direct.
          </p>
          <h2>g. Dreptul de a vă adresa Autorității de Supraveghere</h2>
          <p>
            În cazul în care apreciați că prelucrarea datelor dumneavoastră cu caracter personal
            încalcă Regulamentul UE 2016/679 (GDPR), aveți dreptul de a depune o plângere la
            Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal:{' '}
            <a href="http://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
              www.dataprotection.ro
            </a>
          </p>
          <p>Data: martie 2026</p>
        </section>

        {/* <div className="legal-links">
          <Link href="/termeni-si-conditii">Termeni și Condiții</Link>
          <Link href="/politica-cookies">Politica Cookies</Link>
          <Link href="/">Înapoi Acasă</Link>
        </div> */}
      </div>
    </div>
  );
}
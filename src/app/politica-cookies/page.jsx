import Link from 'next/link';
import '../termeni-si-conditii/legal.css';

export const metadata = {
  title: "Politica Cookies | AURVIS CONSTRUCT DESIGN",
  description: "Informații despre utilizarea modulelor cookie pe site-ul AURVIS CONSTRUCT DESIGN.",
};

export default function CookiesPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <p className="legal-subtitle">INFORMAȚII LEGALE</p>
        <h1>Politica <span>Cookies</span></h1>
        <p className="legal-date">Ultima actualizare: martie 2026</p>
      </div>

      <div className="legal-container">

        <section className="legal-section">
          <p>
            Vă informăm că site-ul <strong>constructii-casa.ro</strong> folosește module cookie
            pentru a oferi servicii mai bune utilizatorilor și vizitatorilor săi.
          </p>
        </section>

        <section className="legal-section">
          <h2>Definiția modulelor cookie</h2>
          <p>
            Cookie-urile sunt fișiere create de site-urile web accesate, care stochează informații
            de navigare. Această tehnologie de stocare automată a datelor este foarte răspândită
            și se folosește pentru a colecta informații precum tipul de browser și sistemul de
            operare, pagina sursă, denumirea domeniului din care vizitatorul s-a conectat la
            site-ul curent, cu scopul de a preîntâmpina nevoile utilizatorilor și de a înțelege
            cum aceștia folosesc pagina web.
          </p>
          <p>
            Cookie-urile ne ajută să adaptăm conținutul website-ului în funcție de preferințele
            dumneavoastră, îmbunătățind astfel calitatea serviciilor noastre.
          </p>
          <h2>Rolul modulelor cookie</h2>
          <p>
            Folosim cookie-uri pentru a vă oferi un site web ușor de utilizat, sigur și eficient.
            Stocarea de cookies pe dispozitivul dumneavoastră ne oferă o modalitate convenabilă
            pentru a personaliza sau a îmbunătăți experiența dumneavoastră pe site-ul nostru
            și pentru a face următoarea vizită mai plăcută.
          </p>
          <p>
            Cookie-urile tehnice sunt strict necesare pentru ca site-ul nostru să funcționeze
            corect — acestea se folosesc, de exemplu, pentru a reține câmpurile pe care le
            completați într-un formular. Dacă veți continua să folosiți site-ul nostru,
            sunteți de acord cu acestea.
          </p>
          <h2>Informații accesate cu ajutorul modulelor cookie</h2>
          <p>
            Modulele cookie sunt păstrate în memoria browser-ului și conțin informații precum:
            numele serverului de la care modulul cookie a fost trimis, durata de păstrare a
            modulului cookie și o valoare — de regulă, un număr unic generat aleatoriu.
            Fișierele cookie <strong>nu permit identificarea dumneavoastră personală</strong>.
          </p>
          <h2>Cookie-uri folosite de site-ul nostru</h2>
          <p><strong>Cookie-uri tehnice necesare, setate de website:</strong></p>
          <ul>
            <li><strong>cookies-accepted</strong> — reține preferința dumneavoastră privind acceptarea cookie-urilor</li>
            <li>Cookie-uri de sesiune necesare funcționării corecte a paginilor — șterse automat la închiderea browserului</li>
          </ul>
          <p>
            Site-ul <strong>nu folosește</strong> cookie-uri de tracking, publicitate sau
            analiză (ex: Google Analytics, Facebook Pixel).
          </p>
          <h2>Gestionarea modulelor cookie</h2>
          <p>
            Toate browserele moderne oferă posibilitatea de a schimba setările cookie-urilor.
            Acestea se găsesc de regulă în "opțiuni" sau în meniul de "preferințe" al browserului.
            Puteți în orice moment modifica setările dumneavoastră cookie sau să fiți alertați
            atunci când cookie-urile sunt trimise către dispozitivul dumneavoastră.
          </p>
          <p>Aflați cum, accesând una dintre legăturile de mai jos:</p>
          <ul>
            <li>
              <a href="https://support.mozilla.org/ro/kb/activarea-si-dezactivarea-cookie-urilor" target="_blank" rel="noopener noreferrer">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.google.com/accounts/answer/61416?hl=ro" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/ro-ro/microsoft-edge" target="_blank" rel="noopener noreferrer">
                Microsoft Edge
              </a>
            </li>
          </ul>
          <h2>Refuz utilizare cookie</h2>
          <p>
            Nu este necesar să acceptați cookie-urile pentru a folosi site-ul nostru, cu toate
            că există posibilitatea să nu aveți acces la toate funcțiile disponibile.
            Puteți modifica setările oricând în funcție de browserul dumneavoastră.
          </p>

          <h2>Actualizări</h2>
          <p>
            Site-ul <strong>constructii-casa.ro</strong> este proprietatea AURVIS CONSTRUCT DESIGN.
            Ne rezervăm dreptul de a face orice completări sau modificări acestei politici.
          </p>
          <p>Data: martie 2026</p>
        </section>


        {/* <div className="legal-links">
          <Link href="/termeni-si-conditii">Termeni și Condiții</Link>
          <Link href="/politica-confidentialitate">Politica de Confidențialitate</Link>
          <Link href="/">Înapoi Acasă</Link>
        </div> */}
      </div>
    </div>
  );
}
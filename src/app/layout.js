// src/app/layout.jsx
import "./globals.css";
import { NavProvider } from './NavContext';
import Nav from '../Components/Nav';


export const metadata = {
  title: "Construcții Case și Vile București | AURVIS CONSTRUCT DESIGN",
  description: "Construim case moderne, vile de lux și locuințe premium. Servicii complete de la proiectare până la finisaje. Contactează-ne pentru ofertă!",
  keywords: "constructii case, firma constructii case, constructii vile, constructii rezidentiale, case moderne, vile lux",
  robots: "index, follow",
  openGraph: {
    title: "Construcții Case și Vile | AURVIS CONSTRUCT DESIGN",
    description: "Firmă de construcții case și vile. Construim case moderne, vile de lux și locuințe premium.",
    url: "https://constructii-casa.ro",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <NavProvider>
          <Nav />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
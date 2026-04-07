// src/app/layout.jsx
import "./globals.css";
import { NavProvider } from './NavContext';
import Nav from '@/Components/Nav';
import Footer from "@/Components/Footer";
import CookieBanner from "@/Components/CookieBanner";
import { Success } from "@/Components/Messages";



export const metadata = {
  title: "Construcții Case București și Ilfov | Case la Roșu și la Cheie | AURVIS CONSTRUCT DESIGN",
  description:
    "Firmă de construcții case în București și Ilfov. Realizăm case la roșu și case la cheie, cu execuție conform proiectului și atenție la calitate. Solicitați o ofertă personalizată!",
  keywords:
    "construcții case București, construcții case Ilfov, firmă construcții București, firmă construcții Ilfov, case la roșu București, case la cheie București, constructor case București, construcții rezidențiale",
  robots: "index, follow",
  openGraph: {
    title: "Construcții Case București și Ilfov | AURVIS CONSTRUCT DESIGN",
    description:
      "Executăm construcții case la roșu și la cheie în București și Ilfov, conform proiectului și standardelor de calitate.",
    url: "https://constructii-casa.ro",
    type: "website",
  },
};
export const runtime = 'edge';

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <NavProvider>
          <Nav />
          <CookieBanner/>
          <Success/>
          {children}
        </NavProvider>
        <Footer/>
      </body>
    </html>
  );
}
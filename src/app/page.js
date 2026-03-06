import Contact from '../Components/Contact';
import Despre from '../Components/Despre';
// import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Proiecte from '../Components/Proiecte';
import Recenzii from '../Components/Recenzii';
import Servicii from '../Components/Servicii';

export default function HomePage() {
  return (
    <main className="App">
      <Hero/>
      <Servicii/>
      <Proiecte/>
      <Recenzii/>
      <Despre/>
      <Contact/>
      {/* <Footer/> */}
    </main>
  );
}
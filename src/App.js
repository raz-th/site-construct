import { useState } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Despre from './Components/Despre';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Proiecte from './Components/Proiecte';
import Recenzii from './Components/Recenzii';
import Servicii from './Components/Servicii';

function App() {
  const [showNav, setshowNav] = useState(true);
  return (
    <>
      {showNav&&(<Nav />)}
      <main className="App">
        <Hero/>
        <Servicii/>
        <Proiecte setshowNav={setshowNav}/>
        <Recenzii/>
        <Despre/>
        <Contact/>
        <Footer/>
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
      </main>
    </>

  );
}

export default App;

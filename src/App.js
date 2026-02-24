import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home_page';
import GaleriePage from './Pages/Galerie_page';
import ScrollToTop from './Components/ScrollToTop';

const NoPage = () => {
  return <h1>eroare 404</h1>
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
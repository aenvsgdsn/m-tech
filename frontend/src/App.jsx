import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Marketing365 from './pages/Marketing365';
import Community from './pages/Community';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/programs"     element={<Programs />} />
          <Route path="/services"     element={<Services />} />
          <Route path="/marketing365" element={<Marketing365 />} />
          <Route path="/community"    element={<Community />} />
          <Route path="/explore"      element={<Explore />} />
          <Route path="/careers"      element={<Careers />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/faq"          element={<FAQ />} />
          <Route path="*"             element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

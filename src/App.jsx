import { useState } from 'react';

import Hero from "./components/hero";
import WhyUs from "./components/whyus";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Trusted from "./components/trusted"
import ScanModal from "./components/scanmodal";

import PentestDesc from './components/pentestdesc.jsx';
import Services from './components/services.jsx';
import ScanCap from './components/scancapabilities.jsx'

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <Navbar onRequestScan={() => setFormOpen(true)} />
      <Hero onGetScan={() => setFormOpen(true)} />
      <PentestDesc />
      <WhyUs />
      
      <Services />
      <ScanCap />
      <Trusted onRequestScan={() => setFormOpen(true)}/>
      <Footer />
      <ScanModal isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}

export default App;
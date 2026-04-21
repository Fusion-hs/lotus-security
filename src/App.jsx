import { useState } from 'react';

import Hero from "./components/hero";
import Services from "./components/services";
import Process from "./components/process";
import WhyUs from "./components/whyus";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Trusted from "./components/trusted"
import ScanModal from "./components/scanmodal";


function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      <Navbar onRequestScan={() => setFormOpen(true)} />
      <Hero onGetScan={() => setFormOpen(true)} />
      <Services />
      <Process />
      <WhyUs />
      <Trusted onRequestScan={() => setFormOpen(true)}/>
      <Footer />
      <ScanModal isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}

export default App;
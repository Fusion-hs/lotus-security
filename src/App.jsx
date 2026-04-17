import Hero from "./components/hero";
import Services from "./components/services";
import Process from "./components/process";
import WhyUs from "./components/whyus";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Trusted from "./components/trusted"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Trusted />
      <Footer />
    </div>
  );
}

export default App;
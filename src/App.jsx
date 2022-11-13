import "./App.css";
import CTA from "./components/CTA/CTA";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Footer from "./container/Footer/Footer";
import Gallery from "./container/Gallery/Gallery";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Gallery />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;

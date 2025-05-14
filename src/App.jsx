import "./App.css";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Aboutus />
      <Plans />
      <Footer />
    </>
  );
}

export default App;

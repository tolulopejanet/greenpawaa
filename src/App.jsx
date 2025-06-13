import { Routes, Route } from "react-router-dom";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
// import BlogSection from "./routes/Blog";
import Aboutus from "./routes/Aboutus";
import Showcase from "./routes/Showcase";
import Blog from "./routes/Blog";
import CommunityPage from "./routes/Community";
import ContactUs from "./routes/Contact";
import Products from "./routes/Products"
import PawaaPlatform from "./routes/PawaaPlatform";
import Paymentplan from "./routes/Paymentplan"
import Partnership from "./routes/Partnership";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Plans />
    </>
  );
}
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/pawaaplatform" element={<PawaaPlatform />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment-plan" element={<Paymentplan />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

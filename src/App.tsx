import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/index";
import AboutUs from "./pages/about us";
import Services from "./pages/services";
import Contact from "./pages/contact";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="servics" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

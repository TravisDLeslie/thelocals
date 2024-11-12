import React from "react";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component
import Footer from "./components/Footer"; // Import the Footer component
import Home from "./components/HomePage";
import AreasPage from "./pages/AreasPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import FAQ from "./pages/FaqPage";
import ServicesPage from "./pages/ServicesPage";
import FAQPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header /> {/* Header includes both Navbar and AnnouncementBar */}

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about-us" element={<AboutPage />} />


            {/* Add other routes here */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

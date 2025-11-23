import React from "react";
import Hero from "./Hero";
import FeaturedSection from "./Featured";
import Services from "../components/Services";
import Process from "./Process";
import AddOns from "./AddOns";
import WhyTheLocals from "./WhyTheLocals";
import FeaturedStyled from "./FeaturedStyled";
import Reviews from "./Reviews";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";

const Homepage = () => {
  return (
    <main className="overflow-x-hidden">
      <section id="hero">
        <Hero />
      </section>
      <section id="featured">
        <FeaturedSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="addons">
        <AddOns />
      </section>
      <section id="why-the-locals">
        <WhyTheLocals />
      </section>
      <section id="featured-styled">
        <FeaturedStyled />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="faqs">
        <FAQ />
      </section>
    </main>
  );
};

export default Homepage;

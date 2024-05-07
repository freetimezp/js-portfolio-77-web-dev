import React from 'react';
import './app.scss';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <section id="services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>

      <section>
        <Portfolio />
      </section>

      <section id="about">5</section>

      <section id="contact">6</section>
    </div>
  );
};

export default App;

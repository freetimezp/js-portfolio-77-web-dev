import React from 'react';
import './app.scss';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';


const App = () => {
  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <section id="services">3</section>
      <section id="portfolio">4</section>
      <section id="about">5</section>
      <section id="contact">6</section>
    </div>
  );
};

export default App;

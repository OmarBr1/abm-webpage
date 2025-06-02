import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import beeImg from "../assets/bee.png" 
import './Hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="accueil" className="hero-section">
      <div className="hero-bg"></div>

      <div className="hero-circle1"></div>
      <div className="hero-circle2"></div>
      <div className="hero-circle3"></div>

      <div className="hero-container">
        <div className="hero-left">
          <h1 className={`hero-heading ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            L'Excellence <span className="hero-title-primary">Apicole</span> <br />
            Au
            Service de l'Innovation
          </h1>
          <p className={`hero-subtext ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ABM BeeVenom, c'est bien plus qu'une entreprise d'apiculture. C'est la nouvelle signature de l'innovation apicole en Algérie.
          </p>
          <div className={`hero-buttons ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#services" className="hero-btn-primary">Découvrir nos Services</a>
            <a href="#contact" className="hero-btn-outline">Contactez-nous</a>
          </div>
        </div>

        <div className={`hero-image-wrapper ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="hero-svg-bg"></div>
          <div className="hero-svg-bg-inner"></div>
          <div className="hero-logo-container">
            {/* Replace the below block with an <img> if adding image */}
              <img src={beeImg} alt="" />
            <div className="hero-logo-text" style={{margin:"2px"}} >
              <div className="text-dark">ABM</div>
              <div className="hero-logo-primary">BeeVenom</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <p className="hero-scroll-text">Découvrez notre univers</p>
        <ChevronDown size={24} className="hero-bounce" />
      </div>
    </section>
  );
};

export default Hero;

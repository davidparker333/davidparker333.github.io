import "../../styles/hero/Hero.scss";
import memoji from "../../assets/memoji_laptop.jpeg";
import Socials from "./Social";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="ultra-hero-text">Hi, I'm David 👋</div>
        <div className="sub-text">
          A Full Stack Developer based in Portland, ME. I make things on the web
          with Vue.js, React, Flask, Django, and other cool frameworks.
          Constantly learning.
        </div>
        <Socials />
      </div>
      <div className="hero-image">
        <img src={memoji} alt="Memoji of a guy with a laptop (me, it's me)" />
      </div>
    </div>
  );
}

export default Hero;

import "../../styles/hero/Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import memoji from "../../assets/memoji_laptop.jpeg";

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
        <div className="socials">
          <a
            href="https://github.com/davidparker333"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/davidparker333/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="mailto:davidparker333@gmail.com" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={memoji} alt="Memoji of a guy with a laptop (me, it's me)" />
      </div>
    </div>
  );
}

export default Hero;

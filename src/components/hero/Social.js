import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Social() {
  return (
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
  );
}

export default Social;

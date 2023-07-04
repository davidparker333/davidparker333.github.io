import "../../styles/contact/Contact.scss";
import "../../styles/hero/Social.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import Socials from "../hero/Social";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero-text">Contact</div>
      <div className="contact-sub-text">
        Want to discuss a project, or just say hi? My inbox is open.
      </div>
      <div className="contact-place">
        <FontAwesomeIcon className="map-icon" icon={faMapPin} />
        Portland, Maine
      </div>
      <Socials />
    </div>
  );
}

export default Contact;

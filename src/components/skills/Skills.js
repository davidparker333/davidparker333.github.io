import "../../styles/skills/Skills.scss";
import {
  faVuejs,
  faReact,
  faSass,
  faAws,
  faJsSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@mui/material";
import djangoLogo from "../../assets/django.svg";
import flaskLogo from "../../assets/flask-logo.png";

function Skill(logo, name, isImage = false) {
  const image = isImage ? (
    <img className="skill-image" src={logo} alt="logo" />
  ) : (
    <FontAwesomeIcon icon={logo} />
  );
  return (
    <Card className="skill-logo">
      <CardContent className="skills-card">
        {image}
        <span className="skill-name">{name}</span>
      </CardContent>
    </Card>
  );
}

function Skills() {
  const logos = [
    faJsSquare,
    faPython,
    faVuejs,
    faReact,
    faSass,
    faDatabase,
    faAws,
  ];

  const names = [
    "JavaScript",
    "Python",
    "Vue.js",
    "React",
    "Sass",
    "MySQL",
    "AWS",
  ];

  return (
    <div className="skills">
      <div className="skills-hero-text">What I Do</div>
      <div className="skills-sub-text">
        Full Stack Developer who loves to explore new things
      </div>
      <div className="skills-list">
        {logos.map((l, i) => Skill(l, names[i]))}
        {/* No FA logos for these :( */}
        {Skill(djangoLogo, "Django", true)}
        {Skill(flaskLogo, "", true)}
      </div>
      <div className="skills-text">
        <div className="skill-bullet">
          Develop highly-interactive user interfaces for web applications
        </div>
        <div className="skill-bullet">
          Build performant backends that make things run
        </div>
        <div className="skill-bullet">
          Integrate with third party services and infrastructure
        </div>
      </div>
    </div>
  );
}

export default Skills;

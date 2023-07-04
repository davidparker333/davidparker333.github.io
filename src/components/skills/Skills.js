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
import { styled } from "@mui/material/styles";
import { Card, CardContent } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import djangoLogo from "../../assets/django.svg";
import flaskLogo from "../../assets/flask-logo.png";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  // Some style customizations to the MUI progress bar
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: "#4257aa",
  },
}));

function Skill(logo, name, isImage = false) {
  const image = isImage ? (
    <img className="skill-image" src={logo} alt="logo" />
  ) : (
    <FontAwesomeIcon icon={logo} />
  );
  return (
    <Card className="skill-logo" key={name}>
      <CardContent className="skills-card">
        {image}
        <span className="skill-name">{name}</span>
      </CardContent>
    </Card>
  );
}

function Proficiency(name, value) {
  return (
    <div className="proficiency-wrapper">
      <div className="proficiency-name">{name}</div>
      <div className="proficiency-bar" key={value}>
        <BorderLinearProgress variant="determinate" value={value} />
      </div>
    </div>
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

  const proficiencies = {
    Frontend: 90,
    Backend: 85,
    Programming: 65,
    "Work Ethic": 95,
  };

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
      <div className="skill-proficiency">
        {Object.keys(proficiencies).map((p) =>
          Proficiency(p, proficiencies[p])
        )}
      </div>
    </div>
  );
}

export default Skills;

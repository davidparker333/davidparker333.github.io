import { Card, CardContent } from "@mui/material";
import "../../styles/experience/Experience.scss";
import CMLogo from "../../assets/critical-mention-logo.png";
import FSLogo from "../../assets/fivestars-logo.png";

function CardHeader(experienceObj) {
  return (
    <div className="experience-header">
      {experienceObj.company}
      <div className="experience-logo">
        <img src={experienceObj.logo} alt="company logo" />
      </div>
    </div>
  );
}

function ExperienceCard(experienceObj) {
  return (
    <Card className="experience-card">
      <CardContent>
        {CardHeader(experienceObj)}
        <div className="experience-card-text">
          <div className="experience-card-title">{experienceObj.title}</div>
          <div className="experience-card-date">{experienceObj.date}</div>
          <div className="experience-card-desc">{experienceObj.desc}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function Experience() {
  const experience = [
    {
      company: "Critical Mention",
      logo: CMLogo,
      title: "Team Lead",
      date: "2022 - Present",
      desc:
        "Led a team of engineers, and took the helm during several large product transformation projects. " +
        "Provided technical leadership, designed systems, mentored team members, and managed project timelines",
    },
    {
      company: "Critical Mention",
      logo: CMLogo,
      date: "2021 - 2022",
      title: "Full Stack Developer",
      desc:
        "Developed for and maintained an existing web app across a diverse range of technologies. " +
        "Built several large new features and continuously migrated the project from an outdated JS framework to Vue.js",
    },
    {
      company: "Fivestars",
      logo: FSLogo,
      date: "2019 - 2021",
      title: "Team Lead",
      desc:
        "Led a team of salespeople across the Northeast. Drove individual and team performance in a brand new market. " +
        "Helped introduce new technologies, facilitate user feedback, and grow the footprint",
    },
  ];

  return (
    <div className="experience">
      <div className="experience-hero-text">Experience</div>
      <div className="experience-cards">
        {experience.map((e) => ExperienceCard(e))}
      </div>
    </div>
  );
}

export default Experience;

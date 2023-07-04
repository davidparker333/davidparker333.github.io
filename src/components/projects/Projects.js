import RepoCard from "react-repo-card";
import "../../styles/projects/Projects.scss";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

function Projects() {
  const dark = useTheme().palette.mode === "dark";

  const repos = [
    "davidparker333.github.io",
    "Revenue-Plus-Plus-FrontEnd",
    "Revenue-Plus-Plus-BackEnd",
    "Track-It",
  ];

  return (
    <div className="projects">
      <div className="projects-hero-text">Projects</div>
      <div className="project-list">
        {repos.map((r) => (
          <div className="project">
            <RepoCard dark={dark} username="davidparker333" repository={r} />
          </div>
        ))}
      </div>
      <div className="more-projects">
        <a
          href="https://github.com/davidparker333"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outlined">See More</Button>
        </a>
      </div>
    </div>
  );
}

export default Projects;

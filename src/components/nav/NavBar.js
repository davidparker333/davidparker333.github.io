import { useState } from "react";
import { SwipeableDrawer, IconButton, Switch } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../../styles/nav/NavBar.scss";
import NavItem from "./NavItem";

function NavBar(props) {
  const [open, setOpen] = useState(false);

  const handleToggleNav = () => {
    setOpen(!open);
  };

  const themeToggleLabel = { inputProps: { "aria-label": "Dark Mode Toggle" } };

  const items = ["Skills", "Experience", "Projects", "Contact"];

  return (
    <div className="navBar">
      <div className="theme-toggle">
        <FontAwesomeIcon icon={faSun} className="light-mode-toggle" />
        <Switch
          {...themeToggleLabel}
          checked={props.theme.palette.mode === "dark"}
          onChange={props.handleToggleTheme}
        />
        <FontAwesomeIcon icon={faMoon} className="dark-mode-toggle" />
      </div>
      <div className="navDrawer">
        <IconButton onClick={handleToggleNav}>
          <FontAwesomeIcon icon={faBars} className="drawer" />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={handleToggleNav}
          onOpen={handleToggleNav}
        >
          {items.map((i) => (
            <NavItem name={i} closeNav={handleToggleNav} key={i} />
          ))}
        </SwipeableDrawer>
      </div>
    </div>
  );
}

export default NavBar;

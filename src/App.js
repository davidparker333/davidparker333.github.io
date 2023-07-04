import "./styles/App.scss";
import { Container } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, createContext, useContext, useMemo } from "react";
import Reveal from "react-reveal/Reveal";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container className={`app ${theme.palette.mode}`} maxWidth="lg">
      <NavBar handleToggleTheme={colorMode.toggleColorMode} theme={theme} />
      <Hero />
      <Skills />
      <Reveal bottom>
        <Experience />
        <Projects />
        <Contact />
      </Reveal>
      <Footer />
    </Container>
  );
}

export default function AppWrapper() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div
          className="wrapper"
          style={{ backgroundColor: theme.palette.background.default }}
        >
          <App />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

import "./styles/App.scss";
import { Container } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, createContext, useContext, useMemo } from "react";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container className={`app ${theme.palette.mode}`} maxWidth="lg">
      <NavBar handleToggleTheme={colorMode.toggleColorMode} theme={theme} />
      <Hero />
      <Skills />
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
          style={{ "background-color": theme.palette.background.default }}
        >
          <App />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

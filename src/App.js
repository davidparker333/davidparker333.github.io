import "./styles/App.scss";
import { Container, Box } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, createContext, useContext, useMemo } from "react";
import NavBar from "./components/nav/NavBar";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container className={`app ${theme.palette.mode}`} maxWidth="lg">
      <NavBar handleToggleTheme={colorMode.toggleColorMode} theme={theme} />
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
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "background.default",
          }}
        >
          <App />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

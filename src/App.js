import React from "react";
import { getDesignTokens } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/index";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => getDesignTokens(mode), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {mode}
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;


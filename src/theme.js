import { amber, red, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

let mode = "";

export const getDesignTokens = (curMode) => {
  console.log("diff: ", mode, curMode);
  mode = curMode
  return createTheme({
    palette: {
      curMode,
      ...(curMode === "light"
        ? {
            // palette values for light curMode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark curMode
            primary: red,
            divider: red[700],
            background: {
              default: red[900],
              paper: red[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });
};


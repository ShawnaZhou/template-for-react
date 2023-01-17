import React from "react";
import { Button } from "@mui/material";
import { ColorModeContext } from "../../App";
const Home = () => {
  const themeContext = React.useContext(ColorModeContext);

  return (
    <div>
      <Button onClick={() => themeContext.toggleColorMode()}>Mode</Button>
    </div>
  );
};

export default Home;


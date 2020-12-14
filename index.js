import React, { useState } from "react";
import { render } from "react-dom";
import MakeshiftDrawer from "./MakeshiftDrawer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const topGridStyle = {
  minHeight: "100px",
  backgroundColor: "green",
  marginBottom: "10px"
};
const midGridStyle = {
  minHeight: "100px",
  backgroundColor: "orange",
  marginBottom: "10px"
};
const botGridStyle = {
  minHeight: "100px",
  backgroundColor: "blue",
  marginBottom: "10px"
};

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Grid container direction="row" style={topGridStyle} />
      <Grid container direction="row" style={midGridStyle}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={toggle}>
            Toggle
          </Button>
          <MakeshiftDrawer open={isOpen} />
        </Grid>
      </Grid>
      <Grid container direction="row" style={botGridStyle} />
    </div>
  );
}

render(<App />, document.getElementById("root"));

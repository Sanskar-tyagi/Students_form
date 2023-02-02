import React from "react";
import { Grid, Button } from "@material-ui/core/";
import Form from "./Form";
import Background from "../images/bg-intro-desktop.png";
import BackgroundMobile from "../images/bg-intro-mobile.png";
import "../styles/App.scss";

function App() {
  return (
    <div>
      <Grid container direction="row" className="content">
        <Grid item md={6} xs={12} className="text-col">
          <h1>Learn to code by watching others</h1>
          <h3>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </h3>
        </Grid>
        <Grid item md={6} xs={12} className="form-col">
          <Grid container className="head-form">
            <h4>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </h4>
          </Grid>
          <Form />
        </Grid>
      </Grid>

      <img src={Background} alt="background" className="background" />
    </div>
  );
}

export default App;

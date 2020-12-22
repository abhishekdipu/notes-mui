import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import PermanentDrawer from "./permanent/PermanentDrawer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const DrawerForApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PermanentDrawer />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default DrawerForApp;

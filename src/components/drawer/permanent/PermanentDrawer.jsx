import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DraftsIcon from "@material-ui/icons/Drafts";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";

import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "200px",
  },
});

const PermanentDrawer = (props) => {
  const { history } = props;

  const classes = useStyles();

  const itemsList = [
    { text: "Home", icon: <HomeIcon />, onClick: () => history.push("/") },
    {
      text: "AboutUs",
      icon: <InfoIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Contact",
      icon: <ContactsIcon />,
      onClick: () => history.push("/contact"),
    },
    { text: "feedback", icon: <DraftsIcon /> },
  ];

  return (
    <Drawer className={classes.drawer} variant="permanent" anchor="left">
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;

          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(PermanentDrawer);

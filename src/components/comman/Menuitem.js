import React from "react";
import { ListItemText, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const Menuitem = ({ name, setComponent }) => {
  const classes = useStyles();
  return (
    <ListItem button onClick={() => setComponent(name)}>
      <ListItemText
        disableTypography
        className={classes.SideBarFont}
        primary={name}
      />
    </ListItem>
  );
};
export default Menuitem;

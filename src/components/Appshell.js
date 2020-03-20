import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: "auto"
  }
}));
export default function Appshell() {
  const classes = useStyles();
  const [state, setState]=useState({toggle:false})
  console.log('currentState:', state)
  function handleDrawerToggle() {
    console.log('clicked!')
    return setState({toggle:true})
  }
  function closeDrawer(){
    return setState({toggle:false})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <IconButton
          className={classes.menuButton}
          color="inherit"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer open={state.toggle} onClose={closeDrawer}>
        <MenuItem onClick={closeDrawer} > Home</MenuItem>
      </Drawer>
    </div>
  );
}

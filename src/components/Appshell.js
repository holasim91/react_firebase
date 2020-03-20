import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
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
export default function Appshell(props) {
  const classes = useStyles();
  const [state, setState] = useState({ toggle: false });
  function handleDrawerToggle() {
    return setState({ toggle: true });
  }
  function closeDrawer() {
    return setState({ toggle: false });
  }

  return (
    <div>
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
          <MenuItem onClick={closeDrawer}>
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={closeDrawer}>
            <Link component={RouterLink} to="/texts">
              Text
            </Link>
          </MenuItem>
          <MenuItem onClick={closeDrawer}>
            <Link component={RouterLink} to="/words">
              Word
            </Link>
          </MenuItem>
        </Drawer>
      </div>

      <div id="contents" style={{ margin: "auto", marginTop: "20px" }}>
        {React.cloneElement(props.children)}
      </div>
    </div>
  );
}

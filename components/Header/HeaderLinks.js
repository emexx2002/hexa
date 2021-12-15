/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"        
          className={classes.navLink}
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#about"
          color="transparent"        
          className={classes.navLink}
        >
         About
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="#roadmap"
          color="transparent"
          className={classes.navLink}
        >
          Roadmap
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#token"
          color="transparent"
          className={classes.navLink}
        >
          Tokenomics and Allocation
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/faq"
          color="transparent"
         
          className={classes.navLink}
        >
           F.A.Q
        </Button>
      </ListItem>
       <ListItem className={classes.listItem}>
        <Button
          href="/whitePaper"
          color="transparent"
          className={classes.navLink}
        >
           WhitePaper
        </Button>
      </ListItem>
       
      
    </List>
  );
}

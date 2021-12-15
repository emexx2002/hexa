/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{backgroundColor:"#050510", }}>
      <div className={classes.container}>
       
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button  href="https://twitter.com/BlueOrbtwit" color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Twitter
          </Button>
          <Button  href="http://t.me/BlueOrbOfficial" color="telegram">
            <i className={classes.socials + " fab fa-telegram"} />
           Telegram
          </Button>
          
        </div>
      </div>
    </div>
  );
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Chart from "components/Chart.js";
import Chart2 from "components/Chart2.js";
import Chart3 from "components/Chart3.js";
import Timeline from "components/Timeline.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
// sections for this page


import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

function home(props) {
   const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
     <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
       <Parallax image="/img/back.jpg">
        <div className="main">
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
            <div className={classes.brand}>
                <h1 className={classes.title} style={{fontSize:"7.8vh"}}>Hexa Gaming</h1>
                <h4 >
                Project with crazy potential projections, reflections on every transaction, and insane gaming experiences, Hexa is taking over the GameFi arena of the BSC space. Hold tokens and get reflections, play games to win and get jobs on the core team – there is literally no excuse 
                for not winning here
                </h4>
                
            </div>
            </GridItem>
          </GridContainer>
            
            
        </div>
        
        </div>
      </Parallax>
      
      <SectionDownload   />
      <Footer/>
    </div>
  )
}

export default home

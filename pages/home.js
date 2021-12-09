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
import Chart2 from "components/Chart2.tsx";
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
      <div className={classNames(classes.main)} style={{backgroundColor:"#050510", paddingTop:"65px", color:"white"}}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <img src="img/block.png" style={{width:"70%", height:"auto"}} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                
                <div className={classes.container} style={{paddingTop:"45px"}}>
                  <div className="animate__animated animate__bounce">
                  <h1 className={classes.title} style={{ fontSize:"6.5vh"}}>
                    About Hexa 
                    </h1>
                    <p>
                    Hexa is a new competitor in the GameFi space, built around gaming, with aims to better enhance the synergy between gaming and cryptocurrency.
                    </p>
                    <h4>Here is what we offer</h4>
                    - Online gaming facilities, fitted with play-to-earn functionalities.<br/>
                    - Telegram group gaming contests.<br/>
                    - Worldwide Xbox and Play Station gaming contests.<br/>
                    - An NFT marketplace.<br/>
                    - Establishment of arcades accepting crypto payments.<br/>
                    - Launchpad for gaming projects


                  </div>
 
                    
  
                    

                </div>
              </GridItem>
              
            </GridContainer>
            
            
        </div>
                <div className={classes.container} id="token" style={{paddingTop:"50px"}}>
          <h2 style={{fontWeight:"bold", textAlign:"center"}}>Tokenomics And Allocation</h2>
        <GridContainer justify="center" style={{paddingTop:30, paddingBottom:30}}>
              <GridItem xs={12} sm={12} md={4}>
                <h3 style={{fontWeight:"bold", textAlign:"center"}}>Token Distribution</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
              <h3 style={{fontWeight:"bold", textAlign:"center"}}>presale fund allocation</h3>
              <Chart/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
              <h3 style={{fontWeight:"bold", textAlign:"center"}}>Hexanomics</h3>
              
              </GridItem>
              
            </GridContainer>
        </div>
        <div style={{width:"100%", marginTop:'20px'}}>
        <div id="roadmap" className={classes.container} style={{paddingTop:"50px"}} >
          <h2 style={{fontWeight:"bold", textAlign:"center"}}>Roadmap</h2>
          <h4 style={{textAlign:"center"}}>This timeline details our development goals.</h4>
        <Timeline />
        </div>

        </div>
      </div>
      
      <SectionDownload   />
      <Footer/>
    </div>
  )
}

export default home

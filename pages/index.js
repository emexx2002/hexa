import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll';
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Chart from "components/Chart";
import Chart2 from "components/Chart2.js";
import Chart3 from "components/Chart3.js";
import Timeline from "components/Timeline.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
// sections for this page


import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

function index(props) {
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
                <h1 className={classes.title} style={{fontSize:"7.8vh"}}>Blue Orb Gaming</h1>
                <h4 >
                Project with crazy potential projections, reflections on every transaction, and insane gaming experiences, Blue Orb is taking over the GameFi arena of the BSC space. Hold tokens and get reflections, play games to win and get jobs on the core team – there is literally no excuse 
                for not winning here
                </h4>
                
            </div>
            </GridItem>
          </GridContainer>
            
            
        </div>
        
        </div>
      </Parallax>
      <div className={classNames(classes.main)} style={{backgroundColor:"#050510", paddingTop:"65px", color:"white"}}>
          <div  id="about" className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <img src="img/block.png" style={{width:"70%", height:"auto"}} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                
                <div className={classes.container} style={{paddingTop:"45px"}}>
                  <div className="animate__animated animate__bounce">
                  <h1 className={classes.title} style={{ fontSize:"6.5vh"}}>
                    About Blue Orb 
                    </h1>
                    <p>
                    Blue Orb is a new challenger in the GameFi BSc space,  with aims to better enhance the present synergy between gaming and cryptocurrency.
                    </p>
                    <h4>Blue Orb brings the following to the table;</h4>
                    - Online gaming facilities, fitted with play-to-earn functionalities.<br/>
                    - Telegram group gaming contests.<br/>
                    - Worldwide Xbox and Play Station gaming contests.<br/>
                    - An NFT marketplace.<br/>
                    - Slippage-free DEX<br/>
                    - Establishment of arcades accepting crypto payments.<br/>
                    - Launchpad for gaming projects.<br/>
                    - Game-dev-pad for game developers to build games in the Blue Orb ecosystem.


                  </div>
 
                    
  
                    

                </div>
              </GridItem>
              
            </GridContainer>
            
            
        </div>
        <div className={classes.container} id="token" style={{paddingTop:"50px"}}>
          <h2 style={{fontWeight:"bold", textAlign:"center"}}>The Blue Orb Economy</h2>
        <GridContainer justify="center" style={{paddingTop:30, paddingBottom:30}}>
              
              <GridItem xs={12} sm={12} md={6}>
              <h3 style={{fontWeight:"bold", textAlign:"center"}}>presale fund allocation</h3>
              <img src="img/chart2.png" style={{width:"95%", height:"auto"}}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
              <h3 style={{fontWeight:"bold", textAlign:"center"}}>Blue Orb nomics</h3>
              <img src="img/chart3.png" style={{width:"97%", height:"auto"}}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3 style={{fontWeight:"bold", textAlign:"center"}}>Token Distribution</h3>
                <img src="img/chart1.png" style={{width:"95%", height:"auto"}}/>
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

export default index

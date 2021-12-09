import React from 'react';
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
import Sidebar from "components/Sidebar"
// sections for this page


import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);



export default function introduction(props) {
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
          height: 200,
          color: "white",
        }}
        {...rest}
      />
       <Parallax image="/img/back.jpg" style={{ height:"20vw"}}>
        <div className="main">
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
            
            </GridItem>
          </GridContainer>
            
            
        </div>
        
        </div>
      </Parallax>
        <div className={classNames(classes.main)} style={{backgroundColor:"#050510", paddingTop:"65px", color:"white"}}>
          <div className={classes.container} style={{display:"flex"}}>
              <div className="scon">
              <Sidebar />

              </div>
                 
              <div className={classes.container}>
                 <h2 style={{fontWeight:"bold",}}>INTRODUCTION </h2>

                    <h4> Hexa is a new challenger in the GameFi BSC space, offering;</h4>

                    <p>- Online gaming facilities, fitted with play-to-earn functionalities.<br/>

                    - Telegram group gaming contests.<br/>

                    - Worldwide Xbox and Play Station gaming contests.<br/>

                    - A custom NFT store.<br/>

                    - A slippage-free DEX.<br/>

                    - Establishment of arcades and partnering with arcades that accept crypto payments.<br/>

                    - A launchpad for gaming projects.<br/>

                    - A game-dev-pad for game developers to build games in the Hexa ecosystem.<br/><br/>


                    We aim to take playing games, investments and adoption of crypto currency to a much better place.

                    People want to make money, people want to have fun, at Hexa, we're bringing both, and on one plate!

                    Gaming has honestly, never been easier and financially tempting as it is now, we plan on capitalizing on that for the benefit of all community members from anywhere and at any time.

                    Hexa tokens, held and traded with, by community members, in personal wallets and on our gaming app will ensure a healthy growth rate and pave a stable path for our project.</p>
                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a></a>
                      <a href="/whitePaper/how-it-works">How it works</a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

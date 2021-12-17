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



export default function blueorbnomics(props) {
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
                 <h2 style={{fontWeight:"bold",}}>Tokenomics</h2>
                     
                     <h3 style={{fontWeight:"bold",}}>Token Distribution</h3>
                     <p>
                         - Airdrop 10% (10,000,000ORB)<br/>
                         - Private sale 0.3% (300,000ORB)<br/>
                         - Consultation 1.7% (17,000,000ORB)<br/>
                         - Presale 30% (30,000,000ORB)<br/>
                         - Blue Orb Ecosystem development 10% (10,000,000ORB)<br/>
                         - CEX listing 20% (20,000,000ORB)<br/>
                         - Marketing Wallet 3% (3,000,000ORB)<br/>
                         - DEX liquidity pool 25% (25,000,000ORB)
                     </p>
                
                    <h3 style={{fontWeight:"bold",}}>Transaction Fees </h3>
                    <h4>The purchase, sale and transfer of Blue Orb tokens has a 12% fee, with the following distribution:</h4>
                        <p>
                        - 4% fee goes to feeds the pancakeswap Liquidity Pool.<br/>
                        - 3% fee is sent to Blue Orb token holders in the form of Blue Orb reflections,<br/>
                        - 5% fee is sent to the Blue Orb Staking Pool, after converting to CAKE or any other staking pool native tokens.<br/>
                                                    
                        </p>
                    <h3 style={{fontWeight:"bold",}}>Staking Pool Reward Distribution </h3>
                    <h4>Each Staking Pool harvest is allocated to the following partitions:
                        35% of rewards are sent according to the following priorities:</h4>
                        <p>
                        - 5% of rewards are sent to token holders, in the form of Blue Orb reflections.<br/>
                        - 10% of rewards are sent for the needs of the development and marketing of the project.<br/>
                        - 20% of the reward is reinvested in the Staking Pool.<br/>
                                                    
                        </p>
                        <h3 style={{fontWeight:"bold",}}>Gaming Proceeds </h3>
                    <h4>Proceeds generated from fees to enter the gaming contests, partnership deals with arcades and revenue from our own arcade establishments shall be distributed in the following manner:</h4>
                        <p>
                        - 20% of rewards are sent to token holders, in the form of Blue Orb reflections<br/>
                        - 60% of rewards are sent for the needs of the development and marketing of the project.<br/>
                        - 20% of the reward is reinvested in the Staking Pool.<br/>
                                                    
                        </p>
                    

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/our-economy">Our Economy</a>
                      <a href="/whitePaper/ico">ICO</a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

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



export default function ico(props) {
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
                 <h2 style={{fontWeight:"bold",}}>ICO</h2>
                 <p> 
                     Avaibility of funds, drives any good project as far as it can possibly go hence the need 
                     for we, the Blue orb core team, to include an initial coin offering.
                 </p>
                 <h4>Our ICO will hold in two rounds </h4>
                 <p>
                     1. The private sale <br/>
                     2. The public Sale
                 </p>
                  
                 <h3 style={{fontWeight:"bold",}}>The Private Sale</h3>
                 <p>We'll host a private sale with 0.3% of the total  value of the token for early community members.
                    The hardcap for this ICO round is 15BNB, members who purchase at the private sale, get their Blue orb Token
                    at a 20% discount, meaning that upon our listing on pancakeswap, they'll automatically be on a 20% profit, this is an
                    incentive provided to early comminity members.
                 </p>
                 <h3>The Public Sale</h3>
                 <p>
                     This ICO round is where the big stuff happens, it'll only be availaible to whitelisted wallets for the first  30 
                     minutes after the start, but if the hardcap isn't filled by then (which we highly doubt), then we'll
                     proceed to make the presale accessible to public wallets, either way, we strongly recommend that all the investors who wish token
                     buy at the presale get whitelisted.
                     A hardcap of 1,500BNB will be generated from the ICO

                 </p>

                <h3 style={{fontWeight:"bold",}}>1,500BNB, Why that much?, and What for?</h3>
                <p>
                Don't be alarmed, 1,500BNB isn't anything close to the biggest hardcaps we've seen over the past few weeks and months, if anything, it's on the average.
                We're a big project, with a lot of things to spend on, please see the presale fund distribution details for better clarity.
                </p>

               <h3 style={{fontWeight:"bold",}}> Why is only a third of the presale funds going into the liquidity pool? </h3>
                <p>Very valid question, you see, the thing is, Blue orb isn't built mainly for trading on DEXes, it's a gaming token, meant to serve as currency in our ecosystem, a 500BNB LP is actually great at the start, the rest of the funds have much needed use in areas like marketing, product development and partnerships.</p>
                
                
                    

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/hexanomis">Hexanomics</a>
                      <a href="/whitePaper/liquidity-pool">Liquidity Pool</a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

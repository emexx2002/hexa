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



export default function liquiditypool(props) {
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
                 <h2 style={{fontWeight:"bold",}}>LIQUIDITY POOL</h2>
                 <p> 
                 The liquidity pool, a function of utmost importance in the ecosystem, this allows investors to buy or sell Blue Orb tokens with speed and convenience. 
                 </p>
                  
                 <h3 style={{fontWeight:"bold",}}>Where's the liquidity coming from? </h3>
                 <p>Prior to the launch of the Blue Orb token, initial liquidity will be established on the PancakeSwap v2 platform, 
                     the most popular automated market maker DEX on the Binance Smart Chain which, since its launch in 2020, 
                     has no major complaints about the operation of the platform.
                     PancakeSwap has undergone an extensive audit of its business and operations by the cyber security firm CertiK and has been found to be secure. 
                     PancakeSwap has also integrated CertiK into its platform to offer the following levels of security: Security Oracle, CertiK Shield, DeepSEA and The CertiK Virtual Machine.In order to reduce the impact of the PancakeSwap platform on the Blue Orb project, 
                     in the future it is planned to distribute liquidity to more decentralized exchanges that meet the liquidity security requirements.
                 </p>
                 <h3>Initial Liquidity Lock Period </h3>
                 <p>
                 The last year we have witnessed the unpopular migration of PancakeSwap v1 to v2,
                 with many projects trapped in the old version because they could not transfer liquidity to the new version, 
                 due to too long liquidity lock period, which left an extremely negative impact on many high-potential projects, to the extent that many have ceased to function. 
                 We, at Blue Orb, intend to minimize the above scenario, after the Blue Orb launch, the Blue Orb / BNB liquidity pool will be locked for a period of 730 days (2 years) from the launch date, which is a sufficient period for investors, 
                 who like and who believe in this unique concept, to gain confidence in the project.

                 </p>

                <h3 style={{fontWeight:"bold",}}>More liquidity?</h3>
                <p>
                Of course!!, Other investors who get shares of liquidity pools will pour in, growing our liquidity pools on Pancakeswap and other decentralized exchanges we plan on getting listed on.</p>

              
                
                    

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/ico">ICO</a>
                      <a href="/whitePaper/partnership">Partnerships</a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

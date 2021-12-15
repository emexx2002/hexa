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



export default function gamingecosystem(props) {
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
                 <h2 style={{fontWeight:"bold",}}>THE Blue orb GAMING ECOSYSTEM </h2>
                 <p>For more efficient project management, 
                     we have precisely divided the Blue orb project into bits, basically,
                      members of a larger ecosystem, in which each part has its clear role and which together, through local software communications and tools, form one highly functional unit, supervised by team Blue orb. Over time, as the project progresses, problems that may exist will be found and fixed, actively monitoring each part separately, improving existing solutions as well as developing new and innovative solutions.
                    </p>

                    <h4>Gaming is what we're about;</h4>

                   
                    <h3 style={{fontWeight:"bold",}}>Our ecosystem comprises;</h3>
                    <p>
                    - Community<br/>
                    - Blue orb token<br/>
                    - NFT store<br/>
                    - Slippage-free DEX<br/>
                    - Gaming<br/>
                    - Partnerships<br/>
                        
                    </p>
                    

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/how-it-works">How Blue orb Works</a>
                      <a href="/whitePaper/our-economy">Our Economy</a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

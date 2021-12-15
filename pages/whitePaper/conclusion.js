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



export default function conclusion(props) {
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
                 <h2 style={{fontWeight:"bold",}}>CONCLUSION</h2>
                 <p> 
                 Our project is really unlike anything the crypto space has ever seen. Right from our exquisite token economy, developed by a very experienced, energetic, and transparent team, 
                 to our functional utilities and strategic partnerships. </p><br/>
                                    
                 <p>
                 Telegram gaming, followed by NFT-rewarding games and contests in the near future, as well as crazy marketing models, supported by organic funds, generated from our loving community, 
                 as.well as revenue from usage of our services.
                 </p>
                 <p>A Staking Pool (still in the developmental stage) will also enable additional passive income for people who have given a chance and believe in this outstanding concept.</p>

                
                    

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/partnerships">partnerships</a>
                      <a href="/whitePaper/disclaimer">Disclaimer</a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

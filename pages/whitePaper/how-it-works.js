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



export default function howitworks(props) {
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
                 <h2 style={{fontWeight:"bold",}}>HOW Blue Orb WORKS </h2>

                    <h4>Gaming is what we're about;</h4>

                    <p>The whole point of the Blue Orb Project, is to further build of the already solid relationship between 
                        crypto currency and gaming. Gaming contests, partnerships with arcades and actual arcade establishments 
                        are some of the aims of Blue Orb.
                    </p>
                    <h3 style={{fontWeight:"bold",}}>Gaming Contests </h3>
                    <p>Games on telegram group chats have probably never been this pumped, imagine getting a chance to win hundreds of dollars in BNB and Blue Orb every month 
                       -for playing telegram group games!-.<br/> 
                       We, at Blue Orb, also plan to organize periodic, virtual Xbox and PlayStation contests -on a freaking worldwide level!!-

                        
                    </p>
                    <h3 style={{fontWeight:"bold",}}>Blue Orb Games  </h3>
                    <p>Our development team, comprised of blockchain developers and game creators, 
                        are working on Blue Orb Community owned P2E games,basically creating premium DApps for the upmost gaming experience. <br/><br/>
                    Developers outside the official dev. team will also have the chance to create games of their own, and monetize them! (of course, 10% of earnings will be remitted to Blue Orb).
                        
                    </p>

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/introduction">Introduction</a>
                      <a href="/whitePaper/gaming-ecosystem" style={{textAlign:"right"}}>The Blue Orb Gaming Ecosystem</a>
                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

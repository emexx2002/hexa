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
                 <h2 style={{fontWeight:"bold",}}>DISCLAIMER</h2>
                 <p> 
                    The information provided in this white paper and website, does not recommend participation in token presale and is not investment advice,
                    financial advice, trading advice, or any other sort of advice, and you should not treat any of the white paper’s content as such.
                 </p><br/>
                 <p> 
                 By participating in this presale, or any future Blue Orb token transaction, the investor should accept the security risks and potential financial losses, 
                 and Blue Orb Gaming cannot be held responsible. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
                 </p><br/>
                 <p> 
                 If you reside in a location where blockchain or gaming over the Internet is illegal, please do not click on anything related to these activities on this project. 
                 You must be legal age to click on any gaming related items. Minimum age varies from region to region.
                 </p><br/>
                                    
                 <p>
                 Recognizing that the laws and regulations involving online gaming are different everywhere, 
                 players are advised to check with the laws that exist within their own jurisdiction or region to ascertain the legality of the activities which are covered. No other rights are transferred to the token holders. The Blue Orb Gaming’s sole responsibility is to distribute the Blue Orb tokens under the conditions set out in the white paper.
                 </p>
                
                
                    

                    <div style={{display:"flex" , justifyContent:"space-between", marginTop:"30px"}}>
                      <a href="/whitePaper/conclusion">Conclusion</a>
                      <a></a>

                    </div>
                                  
              </div>
          </div>
        </div> 
        <Footer/>
    
    </div>
  );
}

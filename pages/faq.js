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
import Chart from "components/Chart.js";
import Chart2 from "components/Chart2.js";
import Chart3 from "components/Chart3.js";
import Timeline from "components/Timeline.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import Collapsible from "../components/Collapsible.tsx"
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
          <div className={classes.container}>
              <h2 style={{fontWeight: "bold"}}>F.A.Q</h2>
                <Collapsible  header="How and where do I trade?">
                Upon launch, Pancakeswap will be our preferred swap location. Hopefully, other exchanges will be added in the future.
                Hit this <a href="https://docs.pancakeswap.finance/get-started/connection-guide">link</a>  for a concise tutorial on how to use Pancakeswap.
                </Collapsible>
                <Collapsible  header="What are the taxes on transactions?">
                Every buy/sell has a 12% transaction tax.
                4% goes to automatically feed the liquidity pool.
                3% goes to Blue Orb reflections to all Blue Orb holders.
                5% goes to the marketing and development wallet.
                </Collapsible>
            
                <Collapsible  header="Is the contract audited?">
                We submitted our smart contract to Techrate for auditing, we await results, you all will be notified as soon as they're in.
                </Collapsible>
            
                <Collapsible  header="Is there a presale?">
               We intend to hold our presale on PinkSale, on the 29th of December 2021,with a 750BNB softcap,and 1,500BNB hardcap,at a price 10% less than the launchprice.
               Minimum purchase is 0.075BNB, and the maximum is purchase is 2BNB.  

                </Collapsible>
                <Collapsible  header="Marketing plans?">
               <li> Banner ads across multiple high traffic sites.</li>
               <li> AMAs with different crypto project promotion groups.</li>
               <li> Listings on top quality Telegram channels.</li>
               <li>Crypto voting sites.</li>
               <li> And a lot more.</li>

                </Collapsible>
                <Collapsible  header="Coin Gecko and CMC listings?">
                As soon as we launch, we'll apply to be listed on Coin Gecko and Coin Market Cap.
                </Collapsible>
                <Collapsible  header="Cannot find your question here?">
                Join our community on <a href="http://t.me/BlueOrbOfficial">Telegram</a> , feel free to ask every question you have.
                </Collapsible>
               
            
            
            
            
          </div>
        </div> 
        <Footer/>
    
      
     
    </div>
  )
}

export default index

import React from 'react';
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll';
// @material-ui/icons
// core components




export default function Sidebar() {
   
  return (
    <div className="sidebar" style={{width:"100%"}} >
    <h3 style={{fontWeight:"bold", }}>Whitepaper</h3>
        <ul className="doc-nav-list">
            <li ><a href="/whitePaper/introduction" aria-current="page">Introduction</a></li>
            <li ><a href="/whitePaper/how-it-works">How Hexa Works</a></li>
            <li ><a href="/whitePaper/gaming-ecosystem">The Blue Orb Gaming Ecosystem</a></li>
            <li ><a href="/whitePaper/our-economy">Our Economy</a></li>
            <li ><a href="/whitePaper/blueorb-nomics">Blue Orb nomics</a></li>
            <li ><a href="/whitePaper/ico">ICO</a></li>
            <li ><a href="/whitePaper/liquidity-pool">Liquidity Pool</a></li>
            <li ><a href="/whitePaper/partnership">Partnerships</a></li>
            <li ><a href="/whitePaper/conclusion">Conclusion</a></li>
            <li ><a href="/whitePaper/disclaimer">Disclaimer</a></li>
        </ul>
        
    </div>
  );
}

import React from 'react';


export default function Timeline() {
  return (
    <div className="container">
    <div className="timeline">
      <ul>
        <li>
          <div className="timeline-content">
            <h3 className="date">Phase 1</h3>
            <h1>Beginings</h1>
            <p>First team meeting, and plan drafting.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3 className="date">Phase 2</h3>
            <h1>Emergence</h1>
            <p>Establishment of our telegram group and publishing of our first website.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3 className="date">Phase 3</h3>
            <h1>Getting The Community Involved</h1>
            <p>Finalizing of plans and commencement of the Blue Orb airdrop.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3 className="date">Phase 4</h3>
            <h1>The Big Stuff</h1>
            <p>Commencement of our ICO. With the Pancakeswap launch 24 hours later.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3 className="date">Phase 5</h3>
            <h1>Hitting The Market</h1>
            <p>Launching on Pancakeswap 24 hours after the public presale.</p>
          </div>
        </li>
        <li>
          <div className="timeline-content">
            <h3 className="date">Phase 6</h3>
            <h1>The Future</h1>
            <p>The future begins from that "provide liquidity" transaction, join us, it can really only get better.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  );
}

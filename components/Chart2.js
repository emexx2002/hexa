import React from 'react';
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

//ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ['Locked Liquidity 33.3% (500BNB)', 'Partnership and endorsment 11.7% (175BNB)', 'Product Development 50% (750BNB)', 'Marketing campaigns 5% (75BNB)', ],
  datasets: [
    {
      label: '# of Votes',
      data: [33.3, 11.7, 50, 5,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart2() {
  return <Doughnut data={data} />;
}

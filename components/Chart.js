import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

 

export default function Chart() {
const data = {
  labels: ['Airdrop 10%', 'Private sale 0.3%', 'Presale 30%', 'Blue orb Ecosystem development 10% ',' CEX listing 20% ', 'Marketing wallet 3% ','DEX liquidity pool 25% '],
  datasets: [
    {
      label: 'Token Distribution',
      data: [10, 0.3, 30, 10, 20, 3, 25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 190, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 205, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        
      ],
      borderWidth: 1,
    },
  ], 
};
  return (<Doughnut data={data} />);
}

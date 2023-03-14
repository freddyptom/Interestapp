import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js/auto';
ChartJS.register(ArcElement, Legend);

function Loanchart(props) {
  return (
    <Pie
    options={{
     width: "400",
     height: "400"
    }}
    data={{
        labels: ['emi','totalAmount','totalInterest','tenure'],
        datasets: [{
                  data:[props.emi,props.totalAmt,props.totalCredAmt,props.lTenure],
                  backgroundColor:['black','green','red','blue']
        }]
    }}
 />
  )
}

export default Loanchart
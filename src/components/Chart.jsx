import React from 'react';
import { PieChart, Pie, Tooltip } from "recharts";

const Chart = () => {
  const data = [
    {name: "Facebook", value: 2000000000},
    {name: "Instagram", value: 1500000000},
    {name: "Twitter", value: 1000000000},
    {name: "Telegram", value: 500000000},
  ];

  return (
    <div>
      <h3>Social Media Users</h3>
      <div className="chart-container">
        <ul className="chart-legend">
          <li>Facebook <small>2000000000</small> </li>
          <li>Instagram <small>1500000000</small></li>
          <li>Twitter <small>1000000000</small></li>
          <li>Telegram <small>500000000</small></li>
        </ul>
        <PieChart className="pieChart" width={360} height={360}>
          <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#018888"
              label={data}
          />
          <Tooltip />
        </PieChart>

      </div>
    </div>
  )
};


export default Chart;
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const GraphCurrency = ({ name, one, two, three, four, five }) => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["5d", "72h", "48h", "24h", "Today"],
      datasets: [
        {
          label: "5 days evolution",
          data: [one, two, three, four, five],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <figure>
      <p>
        {name}
        <div className="chart" style={{ width: "25%", height: "22vh" }}>
          <Line
            data={chartData}
            options={{
              responsive: true,
            }}
          />
        </div>
      </p>
    </figure>
  );
};
export default GraphCurrency;

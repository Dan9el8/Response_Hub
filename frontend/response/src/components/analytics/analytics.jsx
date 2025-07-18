import React from 'react';
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line
} from 'recharts';
import './analytics.css';

const vehicleData = [
  { name: 'Motorcycles', value: 120 },
  { name: 'Buses', value: 80 },
  { name: 'Private Cars', value: 95 },
  { name: 'Trucks', value: 60 }
];

const routeData = [
  { route: 'Nairobi–Mombasa', accidents: 110 },
  { route: 'Kisumu–Busia', accidents: 95 },
  { route: 'Nakuru–Eldoret', accidents: 80 },
  { route: 'Thika Road', accidents: 70 }
];

const seasonalData = [
  { season: 'Jan-Mar', incidents: 45 },
  { season: 'Apr-Jun', incidents: 75 },
  { season: 'Jul-Sep', incidents: 120 },
  { season: 'Oct-Dec', incidents: 150 }
];

const blackspotsData = [
  { name: 'Salgaa', value: 60 },
  { name: 'Mlolongo', value: 45 },
  { name: 'Kikopey', value: 35 },
  { name: 'Sachangwan', value: 30 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h1>Response Hub Analytics Dashboard</h1>

      <div className="charts-grid">

        {/* Pie Chart: Vehicle Type */}
        <div className="chart-box pie-section">
          <h2>Vehicle Types with Highest Accidents</h2>
          <div className="pie-container">
            <PieChart width={200} height={200}>
              <Pie
                data={vehicleData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {vehicleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="pie-legend">
              {vehicleData.map((entry, index) => (
                <div key={index} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <span className="legend-label">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart: High Risk Routes */}
        <div className="chart-box">
          <h2>Routes with Highest Accidents</h2>
          <BarChart width={300} height={250} data={routeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="route" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="accidents" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Line Chart: Seasonal Trends */}
        <div className="chart-box">
          <h2>Seasonal Accident Trends</h2>
          <LineChart width={300} height={250} data={seasonalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="season" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="incidents" stroke="#FF8042" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Pie Chart: Blackspot Areas */}
        <div className="chart-box pie-section">
          <h2>Top Blackspot Areas</h2>
          <div className="pie-container">
            <PieChart width={200} height={200}>
              <Pie
                data={blackspotsData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {blackspotsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="pie-legend">
              {blackspotsData.map((entry, index) => (
                <div key={index} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <span className="legend-label">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;

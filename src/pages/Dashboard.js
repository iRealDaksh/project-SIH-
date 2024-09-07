// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [capacityData, setCapacityData] = useState([]);
  const [routeData, setRouteData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      // Replace with your API calls
      const capacityResponse = await fetch('/api/capacity');
      const capacityData = await capacityResponse.json();
      setCapacityData(capacityData);

      const routeResponse = await fetch('/api/route-efficiency');
      const routeData = await routeResponse.json();
      setRouteData(routeData);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>TeleTrack Dashboard</h2>
      <div className="charts">
        <div className="chart">
          <h3>Capacity Utilization</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={capacityData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="chart">
          <h3>Route Efficiency Over Time</h3>
          <LineChart
            width={500}
            height={300}
            data={routeData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="efficiency" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

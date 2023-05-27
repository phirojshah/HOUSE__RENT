import React from "react";
import { Statistic, Typography, Space, Card } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  HouseOutlined,
  PlaceOutlined,
  } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import SideMenu from "../../SideMenu";
import "./Styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <div>
      <SideMenu />
      <Typography.Title className="dashboard" level={3}>
        Dashboard{" "}
      </Typography.Title>
      <Space direction="horizontal" className="statistics">
        <DashboardCard
          icon={
            <GroupIcon
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Users"}
          value={1234}
        />
        <DashboardCard
          icon={
            <HouseOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Available Rooms"}
          value={14}
        />
        <DashboardCard
          icon={
            <PlaceOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Places"}
          value={3}
        />
        <DashboardChart />
      </Space>
    </div>
  );
}

function DashboardChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "  Users vs Rooms",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    barThickness: 10,
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "users",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Available Rooms",
        data: labels.map(() => Math.random() * 25),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Card style={{ width: 500, height: 300 }}>
      <Bar options={options} data={data} />;
    </Card>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
export default Dashboard;

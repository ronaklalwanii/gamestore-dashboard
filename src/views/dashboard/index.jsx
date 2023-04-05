import React from "react";

// Custom Components
import PlayTime from "./PlayTime";
import Leaderboard from "./Leaderboard";
import GameplayData from "./GameplayData";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div>
          <PlayTime />
          <Leaderboard />
        </div>
        <GameplayData />
      </div>
    </>
  );
};

export default Dashboard;

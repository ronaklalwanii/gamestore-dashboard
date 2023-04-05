import React from "react";

// Data
import gameData from "@/db/gameData";

const DashboardHeader = () => {
  return (
    <div className="card bg-gray-950 rounded-md mt-8">
      <div className="card-body">
        <h2 className="card-title mb-8">Playing Time</h2>

        <ul>
          {gameData.map((game) => (
            <li
              key={game.title}
              className="p-4 flex items-center justify-between bg-gray-800 rounded-md mb-4 cursor-pointer hover:-translate-y-2 transition-transform ease-in-out"
            >
              <div className="flex items-center">
                <img
                  src={game.img}
                  alt={game.title}
                  className="max-w-[72px] max-h-[38px] mr-4 rounded-md"
                />
                <h6>{game.title}</h6>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">Played</p>
                <h6>{game.hours} hours</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardHeader;

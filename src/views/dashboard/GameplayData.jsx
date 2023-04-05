import React, { useState } from "react";

// Data
import gameData from "@/db/gameData";

const GameplayData = () => {
  const [gameId, setGameId] = useState("csgo");

  const { xp, achieved, completion, totalAchievements, achievements } =
    gameData.find((g) => g.id === gameId);

  return (
    <div className="card bg-gray-950 rounded-md mt-8">
      <div className="card-body">
        <h2 className="card-title mb-8">Gameplay Data</h2>
        <div className="flex items-center justify-between">
          <select
            value={gameId}
            className="select w-full max-w-xs"
            onChange={(e) => setGameId(e.target.value)}
          >
            <option value="csgo">Counter Strike GO</option>
            <option value="rdr2">Red Dead Redemption 2</option>
            <option value="bf5">Battlefield V</option>
            <option value="batman">Batman Arkham Knight</option>
          </select>
          <div>
            <div className="text-sm text-slate-400">XP Earned</div>
            <div className="flex items-center mt-2">
              <img
                alt="stars"
                src="/images/icons/star.png"
                className="w-[24px] h-[24px]"
              />
              <p className="ml-2 text-2xl">{xp}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Progress</span>
            <span className="text-slate-400 text-sm">
              Achievements |
              <span className="text-white">
                {achieved}/{totalAchievements}
              </span>
            </span>
          </div>
          <progress
            max="100"
            value={completion}
            className="progress progress-primary"
          />
          <p className="text-right text-sm text-slate-400">{completion}%</p>
        </div>
        <h6 className="text-xl mb-4">Achievements</h6>
        {achievements.map((ac) => (
          <div key={ac.title} className="flex items-center mb-4">
            <div className="avatar cursor-pointer mr-4">
              <div className="w-[38px] h-[38px]">
                <img src={ac.img} alt={ac.title} className="rounded-md" />
              </div>
            </div>
            <div>
              <h6>{ac.title}</h6>

              <div className="text-sm text-slate-400">{ac.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameplayData;

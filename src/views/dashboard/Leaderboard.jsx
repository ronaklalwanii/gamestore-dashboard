import React from "react";

// Icons
import { BoltIcon } from "@heroicons/react/24/outline";

// Data
import friendsList from "@/db/friendsList";

const Leaderboard = () => {
  return (
    <div className="card bg-gray-950 rounded-md mt-4">
      <div className="card-body">
        <h2 className="card-title mb-8">Leaderboard</h2>
        <div className="flex flex-wrap gap-4">
          {friendsList.slice(0, 3).map((friend) => {
            return (
              <div
                key={friend.name}
                className="flex items-center min-w-[30%] p-4 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
              >
                <div className="avatar cursor-pointer mr-4">
                  <div className="w-[38px] h-[38px] rounded-full">
                    <img src={friend.avatar} alt={friend.name} />
                  </div>
                </div>
                <div>
                  <h6>{friend.name}</h6>
                  <div className="flex items-center">
                    <BoltIcon className="w-[14px] h-[14px] mr-1" />
                    <p className="text-sm">{friend.xp}XP</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

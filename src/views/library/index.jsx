import React from "react";

// Icons
import { PlayIcon } from "@heroicons/react/24/outline";

// Data
import gameData from "@/db/gameData";

const Library = () => {
  return (
    <div>
      <h2 className="card-title mb-8">Ready To Play</h2>
      <div className="flex items-center flex-wrap gap-8">
        {gameData.map((game) => (
          <div className="cursor-pointer max-w-[350px]" key={game.id}>
            <img
              src={game.cover}
              alt={game.title}
              className="rounded-md mb-2"
            />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl mb-2">{game.title}</h2>
                <div className="badge py-3">Playtime | {game.hours}</div>
              </div>
              <div className="btn btn-square btn-primary">
                <PlayIcon className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

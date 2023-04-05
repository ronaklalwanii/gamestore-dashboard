import React, { useState, useEffect } from "react";

// Loader
import Loader from "@/views/loader";

// 3rd-party
import axios from "axios";

const GamesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=693696c12c6d48fabaedea059480f097`)
      .then((res) => {
        setData(res.data.results);
      });
  }, []);

  console.log(data);

  return data.length ? (
    <div className="flex flex-wrap gap-6">
      {data.map((game) => {
        return (
          <div
            className="card bg-gray-950 rounded-md w-[350px] overflow-hidden"
            key={game.id}
          >
            <img
              alt={game.name}
              src={game.background_image}
              className="h-[200px] object-fit"
            />
            <div className="card-body p-4">
              <h6 className="mb-2">{game.name}</h6>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {game.genres.slice(0, 2).map((gen) => (
                    <div className="badge py-3">{gen.name}</div>
                  ))}
                </div>
                <button className="btn btn-primary btn-sm">Buy</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <Loader />
  );
};

export default GamesList;

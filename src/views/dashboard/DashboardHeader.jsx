import React from "react";

const DashboardHeader = () => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
      <div className="col-span-6">
        <div className="flex cursor-pointer items-center gap-4">
          <div className="avatar">
            <div className="w-[100px] h-[100px] rounded-full ">
              <img src="/images/profile-pic.png" alt="user-avatar" />
            </div>
          </div>
          <div>
            <h6 className="text-3xl mb-1">Kilmister</h6>
            <p className="text-sm text-slate-400">Ronak Lalwani</p>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="text-sm text-slate-400">Rank</div>
        <div className="flex items-center mt-2">
          <img
            alt="shield"
            className="w-[24px] h-[24px]"
            src="/images/icons/shield.png"
          />
          <p className="ml-2 text-2xl">70</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="text-sm text-slate-400">Achievement</div>
        <div className="flex items-center mt-2">
          <img
            alt="trophy"
            className="w-[24px] h-[24px]"
            src="/images/icons/trophy.png"
          />
          <p className="ml-2 text-2xl">800</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="text-sm text-slate-400">XP Earned</div>
        <div className="flex items-center mt-2">
          <img
            alt="stars"
            src="/images/icons/star.png"
            className="w-[24px] h-[24px]"
          />
          <p className="ml-2 text-2xl">
            10000
            <span className="text-sm text-slate-400">XP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

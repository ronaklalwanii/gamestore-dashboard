import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import {
  BellIcon,
  HeartIcon,
  Bars3Icon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const LayoutNavbar = ({ setSidebarOpen }) => {
  return (
    <nav className="layout-navbar  top-0 min-h-[64px] py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Bars3Icon
            onClick={() => setSidebarOpen(true)}
            className="xl:hidden cursor-pointer block h-[24px] w-[24px]"
          />
          <div className="form-control input-group-md hidden sm:flex">
            <label className="input-group bg-gray-950 items-center pl-4 rounded-full">
              <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
              <input
                type="text"
                placeholder="Search..."
                style={{ borderRadius: "9999px" }}
                className="input input-md bg-gray-950"
              />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="avatar cursor-pointer bg-gray-950 p-2 rounded-full ">
            <div className="w-[22px] h-[22px]">
              <BellIcon />
            </div>
          </div>
          <div className="avatar cursor-pointer bg-gray-950 p-2 rounded-full ">
            <div className="w-[22px] h-[22px]">
              <ShoppingBagIcon />
            </div>
          </div>
          <div className="avatar cursor-pointer bg-gray-950 p-2 rounded-full ">
            <div className="w-[22px] h-[22px]">
              <HeartIcon />
            </div>
          </div>
          <div className="flex align-center">
            <div className="badge badge-primary py-3 mt-[4px] rounded-e-none -mr-2">
              kilmister
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-[36px] rounded-full">
                  <img src="/images/profile-pic.png" alt="user-avatar" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-gray-950 rounded-box w-52"
              >
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/library">Library</NavLink>
                </li>
                <li>
                  <NavLink to="/store">Store</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;

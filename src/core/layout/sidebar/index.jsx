import React from "react";
import { NavLink } from "react-router-dom";

// Custom Component
import SidebarItem from "./SidebarItem";

// Icons
import {
  XMarkIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

// 3rd-party
import classnames from "classnames";

// Config
import navigation from "@/configs/navigation";

const LayoutSidebar = (props) => {
  const { sidebarOpen, setSidebarOpen, sidebarCollapsed, setSidebarCollapsed } =
    props;

  const CollapsedIcon = sidebarCollapsed
    ? ArrowRightCircleIcon
    : ArrowLeftCircleIcon;

  return (
    <nav
      className={classnames(
        `layout-sidebar px-4 py-6 z-10 bg-gray-950 min-h-screen xl:block xl:relative absolute transition-[width] ease-linear`,
        {
          hidden: sidebarOpen === false,
          "w-[60px]": sidebarCollapsed,
          "w-[260px]": sidebarCollapsed === false,
        }
      )}
    >
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img
            alt="logo"
            src="/images/logo.png"
            className={classnames("w-[125px] cursor-pointer", {
              hidden: sidebarCollapsed,
            })}
          />
        </NavLink>
        <CollapsedIcon
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden cursor-pointer xl:block h-[32px] w-[32px]"
        />
      </div>
      <XMarkIcon
        onClick={() => setSidebarOpen(false)}
        className={classnames(
          "absolute cursor-pointer right-[16px] top-[16px] h-[24px] w-[24px]",
          {
            hidden: sidebarOpen === false,
          }
        )}
      />
      <ul className="mt-10">
        {navigation.map((item) => (
          <SidebarItem
            {...item}
            key={item.title}
            sidebarCollapsed={sidebarCollapsed}
          />
        ))}
      </ul>
    </nav>
  );
};

export default LayoutSidebar;

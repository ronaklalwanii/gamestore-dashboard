import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import * as Icon from "@heroicons/react/24/outline";

// 3rd-party
import classNames from "classnames";

const SidebarItem = (props) => {
  const { title, icon, url, badgeColor, badgeText, sidebarCollapsed } = props;

  const MenuIcon = Icon[icon];

  return (
    <li className="mb-5">
      <NavLink
        to={url}
        color="link cursor-pointer"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-primary" : ""
        }
      >
        <div className="flex items-center gap-4">
          <MenuIcon className="w-[24px] h-[24px]" />
          {sidebarCollapsed ? null : (
            <>
              <p className="text-xl">{title}</p>
              {badgeText ? (
                <div
                  className={classNames(
                    "px-2 py-1 min-w-[20px] min-h-[20px] rounded-full text-xs",
                    {
                      [badgeColor]: badgeColor,
                      "bg-primary": !badgeColor,
                    }
                  )}
                >
                  {badgeText}
                </div>
              ) : null}
            </>
          )}
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;

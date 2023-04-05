import React from "react";

// Icons
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

// Data
import friendsList from "@/db/friendsList";

const FriendsListComponent = () => {
  return (
    <ul className="self-center bg-gray-950 p-4 rounded-full hidden xl:block">
      <li className="mb-4">
        <div className="avatar cursor-pointer">
          <div className="w-[32px] h-[32px] rounded-full ">
            <UserGroupIcon />
          </div>
        </div>
      </li>
      {friendsList.map((friend) => {
        return (
          <li key={friend.name} className="mb-4">
            <div className="avatar online cursor-pointer">
              <div className="w-[32px] h-[32px] rounded-full ">
                <img src={friend.avatar} alt={friend.name} />
              </div>
            </div>
          </li>
        );
      })}
      <li>
        <div className="avatar cursor-pointer">
          <div className="w-[32px] h-[32px] rounded-full ">
            <ChatBubbleLeftRightIcon />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default FriendsListComponent;

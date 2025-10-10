"use client";
import React, { useMemo } from "react";
import {
  BsBell,
  BsBookmarks,
  BsSearch,
  BsTwitterX,
  BsPeople,
} from "react-icons/bs";
import { Grok } from "@lobehub/icons";
import { CiMail } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { GiElectric } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import UserAvatar from "../UserAvatar";
import { useCurrentUser } from "@/hooks/user";
import Link from "next/link";

interface TwitterSideBar {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const Sidebar = () => {
  const { isFetched, user } = useCurrentUser();

  const sideMenuItems: TwitterSideBar[] = useMemo(
    () => [
      {
        title: "Home",
        icon: <GoHomeFill />,
        link: "/",
      },
      {
        title: "Explore",
        icon: <BsSearch />,
        link: "/",
      },
      {
        title: "Notifications",
        icon: <BsBell />,
        link: "/",
      },
      {
        title: "Messages",
        icon: <CiMail />,
        link: "/",
      },
      {
        title: "Groq",
        icon: <Grok size={26} />,
        link: "/",
      },
      {
        title: "Bookmarks",
        icon: <BsBookmarks />,
        link: "/",
      },
      {
        title: "Communities",
        icon: <BsPeople />,
        link: "/",
      },
      {
        title: "Premium",
        icon: <BsTwitterX />,
        link: "/",
      },
      {
        title: "Verified Orgs",
        icon: <GiElectric />,
        link: "/",
      },
      {
        title: "Profile",
        icon: <BiUser />,
        link: `/${user?.id}`,
      },
      {
        title: "More",
        icon: <CgMoreO />,
        link: "/",
      },
    ],
    [user?.id],
  );

  return (
    <div className="relative h-full w-full">
      <div className="flex pr-2 sm:justify-end">
        <div className="flex-col justify-center py-1 sm:p-4">
          <div className="mb-6 ml-2 w-fit cursor-pointer rounded-full p-2 transition-all hover:bg-gray-700">
            <BsTwitterX className="text-xl sm:text-3xl" />
          </div>
          {sideMenuItems.map((item, key) => (
            <div key={key}>
              <Link
                className="my-2 flex w-fit cursor-pointer items-center gap-4 rounded-3xl px-5 py-2.5 text-xl hover:bg-gray-700"
                href={item.link}
              >
                <span className="text-xl sm:text-2xl">{item.icon}</span>
                <span className="hidden sm:inline">{item.title}</span>
              </Link>
            </div>
          ))}
          <div className="mt-4 hidden pr-10 pl-5 sm:block">
            <button className="h-full w-full rounded-full bg-gray-50 py-3 text-xl font-semibold text-black transition-all hover:cursor-pointer hover:bg-gray-300">
              Post
            </button>
          </div>
        </div>
        <div>
          {isFetched && user && (
            <UserAvatar isFetched={isFetched} user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

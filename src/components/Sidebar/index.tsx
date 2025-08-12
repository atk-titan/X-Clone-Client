"use client"
import React, { useMemo } from "react";
import { BsBell, BsBookmarks, BsSearch, BsTwitterX , BsPeople } from "react-icons/bs";
import { Grok } from '@lobehub/icons';
import { CiMail } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { GiElectric } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import UserAvatar from "../UserAvatar";
import { useCurrentUser } from "@/hooks/user";
import Link from "next/link";

interface TwitterSideBar{
    title:string;
    icon:React.ReactNode;
    link:string
}

const Sidebar = () => {
    const { isFetched, user } = useCurrentUser();

    const sideMenuItems: TwitterSideBar[] = useMemo(()=>[
        {
            title:"Home",
            icon: <GoHomeFill/>,
            link: "/"
        },{
            title:"Explore",
            icon: <BsSearch />,
            link: "/"
        },{
            title: "Notifications",
            icon:<BsBell />,
            link: "/"
        },{
            title: "Messages",
            icon:<CiMail/>,
            link: "/"
        },{
            title: "Groq",
            icon: <Grok size={26}/>,
            link: "/"
        },{
            title: "Bookmarks",
            icon:<BsBookmarks/>,
            link: "/"
        },{
            title: "Communities",
            icon:<BsPeople/>,
            link: "/"
        },{
            title: "Premium",
            icon:<BsTwitterX/>,
            link: "/"
        },{
            title: "Verified Orgs",
            icon:<GiElectric/>,
            link: "/"
        },{
            title: "Profile",
            icon:<BiUser/>,
            link: `/${user?.id}`
        },{
            title: "More",
            icon:<CgMoreO/>,
            link: "/"
        }
    ] ,[user?.id])

  return (
    <div className="h-full w-full relative">
        <div className="flex sm:justify-end pr-2">
            <div className="sm:p-4 py-1 flex-col justify-center">
                <div className="hover:bg-gray-700 w-fit p-2 mb-6 ml-2 rounded-full cursor-pointer transition-all">
                    <BsTwitterX className="sm:text-3xl text-xl"/>
                </div>
                {sideMenuItems.map((item,key)=>
                <div key={key} >
                    <Link   className="flex items-center text-xl gap-4 rounded-3xl w-fit hover:bg-gray-700 py-2.5 px-5 my-2 cursor-pointer"
                            href={item.link}>
                        <span className="text-xl sm:text-2xl">{item.icon}</span>
                        <span className="hidden sm:inline">{item.title}</span>
                    </Link>
                </div>)}
                <div className="pl-5 pr-10 mt-4 hidden sm:block">
                    <button className="py-3 text-xl text-black font-semibold bg-gray-50 rounded-full hover:cursor-pointer hover:bg-gray-300 transition-all w-full h-full">Post</button>
                </div>
            </div>
            <div>
                { isFetched && user && <UserAvatar isFetched={isFetched} user={user}/>}
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
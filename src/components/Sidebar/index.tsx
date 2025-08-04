import React from "react";
import { BsBell, BsBookmarks, BsSearch, BsTwitterX , BsPeople } from "react-icons/bs";
import { Grok } from '@lobehub/icons';
import { CiMail } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { GiElectric } from "react-icons/gi";
import { CgMoreO } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import UserAvatar from "../UserAvatar";

interface TwitterSideBar{
    title:string;
    icon:React.ReactNode;
}

const sideMenuItems: TwitterSideBar[] = [
    {
        title:"Home",
        icon: <GoHomeFill/>
    },{
        title:"Explore",
        icon: <BsSearch />
    },{
        title: "Notifications",
        icon:<BsBell />
    },{
        title: "Messages",
        icon:<CiMail/>   
    },{
        title: "Groq",
        icon: <Grok size={26}/>
    },{
        title: "Bookmarks",
        icon:<BsBookmarks/>   
    },{
        title: "Communities",
        icon:<BsPeople/>   
    },{
        title: "Premium",
        icon:<BsTwitterX/>   
    },{
        title: "Verified Orgs",
        icon:<GiElectric/>   
    },{
        title: "Profile",
        icon:<BiUser/>   
    },{
        title: "More",
        icon:<CgMoreO/>   
    }
]

const Sidebar = () => {
  return (
    <div className="h-full w-full relative">
        <div className="flex sm:justify-end pr-2">
            <div className="sm:p-4 py-1 flex-col justify-center">
                <div className="hover:bg-gray-700 w-fit p-2 mb-6 ml-2 rounded-full cursor-pointer transition-all">
                    <BsTwitterX className="sm:text-3xl text-xl"/>
                </div>
                {sideMenuItems.map((item,key)=>
                <div key={key} className="flex items-center text-xl gap-4 rounded-3xl w-fit hover:bg-gray-700 py-2.5 px-5 my-2 cursor-pointer ">
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                    <span className="hidden sm:inline">{item.title}</span>
                </div>)}
                <div className="pl-5 pr-10 mt-4 hidden sm:block">
                    <button className="py-3 text-xl text-black font-semibold bg-gray-50 rounded-full hover:cursor-pointer hover:bg-gray-300 transition-all w-full h-full">Post</button>
                </div>
            </div>
            <div>
                <UserAvatar/>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
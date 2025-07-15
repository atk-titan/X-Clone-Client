import FeedCard from "../components/FeedCard";
import Sidebar from "../components/Sidebar";
import SignIn from '../components/SignIn/index';

export default function Home() {
  return (
    <div className="grid md:grid-cols-12 grid-cols-5 w-full h-screen lg:px-56 px-6">
      <div className="md:col-span-3 col-span-1 flex flex-col">
        <Sidebar/>
      </div>
      <div className="md:col-span-5 col-span-4 border-r-[1px] border-l-[1px] border-gray-700 h-screen overflow-y-scroll transition-all">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className="md:col-span-3">
        <SignIn/>
      </div>
    </div>
  );
}

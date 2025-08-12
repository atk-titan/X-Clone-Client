"use client"
import { useTweet } from "@/hooks/tweet";
import FeedCard from "../FeedCard";
import { Tweet } from "@/gql/graphql";

export function getHoursSinceUpdate(updatedAt: string): string {
  const updatedDate = new Date(Number(updatedAt)); 
  const now = new Date();
  const diffInMs = now.getTime() - updatedDate.getTime(); 
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMins = Math.floor(diffInMs / (1000 * 60));

  if(diffInHours > 0)
    return `${diffInHours}h`;
  return `${diffInMins}m`;
}

const Feed = () =>{

    const { tweets } = useTweet();

    return (<>
        { tweets && tweets.map((tweet) => {
            return ( tweet?.updatedAt ? <FeedCard key={ tweet?.id } tweet={ tweet as Tweet } time={getHoursSinceUpdate( tweet?.updatedAt )}/> : null );
        })}
    </>);
}

export default Feed;
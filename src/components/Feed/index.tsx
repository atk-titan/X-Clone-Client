import { useTweet } from "@/hooks/tweet";
import FeedCard from "../FeedCard";
import { Tweet } from "@/gql/graphql";
import { graphqlClient } from "@/clients/api";
import { getAllTweetsQuery } from "@/graphql/query/tweet";


const Feed = async () =>{

    // const { tweets } = useTweet();
    const allTweets = await graphqlClient.request(getAllTweetsQuery);

    const tweets = allTweets.getAllTweets as Tweet[];

    return (<>
        { tweets && tweets.map((tweet) => {
            return ( tweet?.updatedAt ? <FeedCard key={ tweet?.id } tweet={ tweet as Tweet } /> : null );
        })}
    </>);
}

export default Feed;
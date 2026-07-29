import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import Tweet  from "./Tweet";

const Feed = () => {
  const {tweets} = useSelector(store=>store.tweet);

  return (
    <div>
      <CreatePost />
      {
        tweets?.map((tweet)=>{
          return <Tweet key = {tweet?._id} tweet = {tweet} />
        })
      }
    </div>
  );
};

export default Feed;
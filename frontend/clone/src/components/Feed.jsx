import CreatePost from "./CreatePost";
import Tweet  from "./Tweet";

const Feed = () => {
  return (
    <div>
      <CreatePost />
      <Tweet/>
      <Tweet/>
      <Tweet></Tweet>
      <Tweet> </Tweet>
      <Tweet></Tweet>
    </div>
  );
};

export default Feed;
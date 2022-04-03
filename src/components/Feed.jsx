import React from "react";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
import "../css/feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <header className="feed__header">
        <h2 className="feed__heading">Home</h2>
      </header>

      <TweetBox />

      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Feed;

import React, { useState, useEffect } from "react";
import db from "../firebase";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
import "../css/feed.css";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("tweets")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTweets(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div className="feed no-scrollbar">
      <header className="feed__header">
        <h2 className="feed__heading">Home</h2>
      </header>

      <TweetBox />

      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
};

export default Feed;

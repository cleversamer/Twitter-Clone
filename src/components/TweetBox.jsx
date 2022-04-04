import React, { useState } from "react";
import db from "../firebase";
import { firestore } from "firebase";
import { Avatar, Button } from "@mui/material";
import "../css/tweet-box.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("tweets").add({
      avatarUrl: "https://avatars.githubusercontent.com/u/73291969?v=4",
      displayName: "Samer A.⚡",
      username: "ssadawi__",
      verified: true,
      text: tweetMessage,
      imageUrl: tweetImage,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweet-box">
      <form onSubmit={onSubmit}>
        <div className="tweet-box__input">
          <Avatar src="https://avatars.githubusercontent.com/u/73291969?v=4" />

          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.currentTarget.value)}
          />
        </div>

        <input
          className="tweet-box__image-input"
          type="text"
          placeholder="Enter image URL (Optional)"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.currentTarget.value)}
        />

        <Button type="submit" className="tweet-box__tweet" variant="contained">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;

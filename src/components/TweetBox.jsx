import React from "react";
import { Avatar, Button } from "@mui/material";
import "../css/tweet-box.css";

const TweetBox = () => {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box__input">
          <Avatar src="https://avatars.githubusercontent.com/u/73291969?v=4" />
          <input type="text" placeholder="What's happening?" />
        </div>

        <input
          className="tweet-box__image-input"
          type="text"
          placeholder="Enter image URL (Optional)"
        />

        <Button className="tweet-box__tweet" variant="contained">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;

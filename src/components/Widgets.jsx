import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";
import "../css/widgets.css";

const Widgets = () => {
  return (
    <div className="widgets no-scrollbar">
      <div className="widgets__input">
        <Search className="widgets__search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widget-container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId="1503052532779782145" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ssadawi__"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="https://facebook.com/samer.187"
          options={{ text: "#reactjs is awesome", via: "ssadawi__" }}
        />
      </div>
    </div>
  );
};

export default Widgets;

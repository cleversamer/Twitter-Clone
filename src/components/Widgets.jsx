import React, { useState, useEffect } from "react";
import db from "../firebase";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";
import "../css/widgets.css";

const Widgets = () => {
  const defaultWidgets = {
    screenName: "ssadawi__",
    sourceType: "profile",
    tweetId: "1503052532779782145",
    text: "#reactjs is awesome",
    url: "https://facebook.com/samer.187",
  };

  const [widgets, setWidgets] = useState(defaultWidgets);

  const { screenName, sourceType, tweetId, text, url } = widgets;

  useEffect(() => {
    db.collection("widgets").onSnapshot((snapshot) => {
      setWidgets(snapshot.docs.map((doc) => ({ ...doc.data() }))[0]);
    });
  }, []);

  return (
    <div className="widgets no-scrollbar">
      <div className="widgets__input">
        <Search className="widgets__search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widget-container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={tweetId} />

        <TwitterTimelineEmbed
          sourceType={sourceType}
          screenName={screenName}
          options={{ height: 400 }}
        />

        <TwitterShareButton url={url} options={{ text, via: "ssadawi__" }} />
      </div>
    </div>
  );
};

export default Widgets;

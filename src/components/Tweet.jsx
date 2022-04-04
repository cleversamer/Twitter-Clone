import React from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  Verified,
} from "@mui/icons-material";
import "../css/tweet.css";

const Tweet = ({
  avatarUrl,
  displayName,
  username,
  verified,
  text,
  imageUrl,
}) => {
  return (
    <div className="tweet">
      <div className="tweet__avatar">
        <Avatar src={avatarUrl} />
      </div>

      <div className="tweet__body">
        <div className="tweet__header"></div>

        <div className="tweet__header-text">
          <h3>
            {displayName || "Unknown"}
            <span className="tweet__header-special">
              {verified && <Verified className="tweet__badge" />} @{username}
            </span>
          </h3>
        </div>

        <div className="tweet__header-description">
          <p>{text}</p>
        </div>

        {imageUrl && <img src={imageUrl} alt="Tweet" />}

        <div className="tweet__footer">
          <IconButton>
            <ChatBubbleOutline fontSize="small" />
          </IconButton>

          <IconButton>
            <Repeat fontSize="small" />
          </IconButton>

          <IconButton>
            <FavoriteBorder fontSize="small" />
          </IconButton>

          <IconButton>
            <Publish fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

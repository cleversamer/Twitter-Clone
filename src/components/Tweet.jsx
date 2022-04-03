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
        <Avatar src="https://avatars.githubusercontent.com/u/73291969?v=4" />
      </div>

      <div className="tweet__body">
        <div className="tweet__header"></div>

        <div className="tweet__header-text">
          <h3>
            Samer A.{" "}
            <span className="tweet__header-special">
              <Verified className="tweet__badge" /> @ssadawi__
            </span>
          </h3>
        </div>

        <div className="tweet__header-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            aliquam deleniti sint neque explicabo earum, blanditiis iure ducimus
            nam distinctio.
          </p>
        </div>

        {imageUrl || (
          <img
            src="https://media.istockphoto.com/photos/focused-developer-coding-on-computer-monitors-working-late-in-office-picture-id1147195672?k=20&m=1147195672&s=612x612&w=0&h=DGtScmoHKlILWv1ZrykJFWRjkAvI0EET9lHGinZp-sk="
            alt="Tweet"
          />
        )}

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

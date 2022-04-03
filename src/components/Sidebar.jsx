import React from "react";
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import SidebarOption from "./SidebarOption";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Twitter />

      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      <Button className="sidebar__tweet" variant="contained">
        Tweet
      </Button>
    </aside>
  );
};

export default Sidebar;

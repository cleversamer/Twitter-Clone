import React from "react";
import "../css/sidebar-option.css";

const SidebarOption = ({ active, Icon, text }) => {
  const getClasses = () => {
    return `sidebar-option ${active ? "sidebar-option--active" : ""}`;
  };

  return (
    <div className={getClasses()}>
      <Icon />
      <h2 className="sidebar-option__name">{text}</h2>
    </div>
  );
};

export default SidebarOption;

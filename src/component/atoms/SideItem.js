import React from "react";

function SideItem(props) {
  return (
    <>
      <img src={props.itemimgurl} alt="Home" className="h-12 mr-2 inline" />
      {props.heading}
    </>
  );
}
export default SideItem;

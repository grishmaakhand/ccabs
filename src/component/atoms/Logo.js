import React from "react";

const Logo = (props) => {
  return (
    <div className="flex items-center">
      <a href="/">
        <img src={props.imgurl} alt="Logo" className="h-16 w-26 m-2 " />
      </a>
    </div>
  );
};

export default Logo;

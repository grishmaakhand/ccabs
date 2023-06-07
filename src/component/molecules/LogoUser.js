import React from "react";
import Logocom from "../atoms/Logo";
import User from "../atoms/User";
import logo from "../Images/logo.png";
import userimg from "../Images/profile-unscreen.gif";

function LogoUser() {
  return (
    <>
      <div className="flex items-center justify-between bg-navbarcolor fixed  w-full h-16  z-10 ">
        <Logocom imgurl={logo} />
        <User userimgurl={userimg} />
      </div>
    </>
  );
}

export default LogoUser;

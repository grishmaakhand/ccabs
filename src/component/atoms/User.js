import React from "react";

const User = (props) => {
  return (
    <>
      <div className="flex items-center">
        <img src={props.userimgurl} alt="Logo" className="h-16 w-16 r-0 p-2" />
      </div>
    </>
  );
};

export default User;

import React from "react";
import { Link } from "react-router-dom";
import SideItem from "../atoms/SideItem";
import homeimg from "../Images/home-unscreen.gif";
import tripimg from "../Images/convertible-unscreen.gif";
import driverimg from "../Images/steering-wheel-unscreen.gif";
import empimg from "../Images/laptop-unscreen.gif";

function AllItems() {
  return (
    <>
      <aside
        className="bg-asidecolor h-full fixed top-0 left mt-16"
        style={{ width: 280 }}
      >
        <ul className="m-5">
          <li className="mb-4">
            <Link to="/">
              <SideItem itemimgurl={homeimg} heading="Home" />
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/tripmanagement">
              <SideItem itemimgurl={tripimg} heading="Trip Management" />
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/drivermanagement">
              <SideItem itemimgurl={driverimg} heading="Driver Management" />
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/employeesmanagement">
              <SideItem itemimgurl={empimg} heading="Employees Management" />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default AllItems;

import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { dashboard } from "utils/SideNavData";
import MenuItem from "utils/SideNavData";
import { Button } from "antd";
export default function SideNav({ color }) {
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");
  return (
    <>
      <div style={{marginLeft:"50px", width:"70px"}}>
        <img src={logo} alt="" />
      </div>
      <hr />
      <MenuItem pathname={pathname} color={color} />
    </>
  );
}

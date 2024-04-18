import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined,CompassOutlined } from '@ant-design/icons';
import { profileSVg, signInSvg, signUpSvg } from "./SignInUpData";
import { IoMdRestaurant } from "react-icons/io";
import { FaHotel,FaLocationDot,FaTaxi,FaRegStarHalfStroke } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
export const dashboard = (color) => [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
      fill={color}
    ></path>
    <path
      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
      fill={color}
    ></path>
    <path
      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
      fill={color}
    ></path>
  </svg>,
];

const getItem = (label, path, icon, pathName, color) => {
  return (
    <NavLink to={path}>
      <span
        className="icon"
        style={{
          background: pathName === path.replace("/", "") ? color : "",
        }}
      >
        {icon}
      </span>
      <span className="label">{label}</span>
    </NavLink>
  );
};
export const items = (pathname, color) => [
  {
    key: "1",
    label: getItem(
      "Dashboard",
      "/dashboard",
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
      >
        <path
          d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
          fill={color}
        ></path>
        <path
          d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
          fill={color}
        ></path>
        <path
          d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
          fill={color}
        ></path>
      </svg>,
      pathname,
      color
    ),
  },
  {
    key: "2",
    label: getItem(
      "Users",
      "/Users",
      profileSVg,
      pathname,
      color
    ),
  },
  {
    key: "9",
    label: getItem(
      "Hotels",
      "/Hotels",
      <FaHotel />,
      pathname,
      color
    ),
  },
  {
    key: "10",
    label: getItem(
      "Destination",
      "/destination",
      <FaLocationDot />,
      pathname,
      color
    ),
  },
  {
    key: "11",
    label: getItem(
      "Restaurent",
      "/restaurent",
      <IoMdRestaurant />,
      pathname,
      color
    ),
  },
  {
    key: "12",
    label: getItem(
      "Transport",
      "/transport",
      <FaTaxi />,
      pathname,
      color
    ),
  },
  {
    key: "13",
    label: getItem(
      "Event",
      "/event",
      <BsCalendarEventFill />,
      pathname,
      color
    ),
  },
  {
    key: "14",
    label: getItem(
      "Attraction",
      "/attraction",
      <FaSearchLocation />,
      pathname,
      color
    ),
  },
  {
    key: "15",
    label: getItem(
      "Reviews",
      "/review",
      <FaRegStarHalfStroke />,
      pathname,
      color
    ),
  },
  {
    key: "16",
    label: getItem(
      "Offer",
      "/offer",
      <BiSolidOffer />,
      pathname,
      color
    ),
  },
];

const MenuItem = ({ pathname, color }) => {
  return <Menu mode="inline" theme="light" items={items(pathname, color)} />;
};
export default MenuItem;

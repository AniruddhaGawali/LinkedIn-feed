import React, { useState } from "react";
import style from "./navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { IoIosMore } from "react-icons/io";

const Navbar = () => {
  const [ismobilenav, setismobilenav] = useState(false);
  const navon = () => {
    setismobilenav(!ismobilenav);
  };
  return (
    <>
      <nav className={style.nav}>
        <div className={style.navwrapper}>
          <div className={style.navleft}>
            <div href="#" className={style.brandlogo}>
              <img src="/logo.png" alt="logo" style={{ width: "100%" }} />
            </div>
            <div className={style.search}>
              <div className={style.searchicon}>
                <BsSearch size=".9rem" />
              </div>
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className={style.navmenu}>
            <ul>
              <li className={style.SearchMobile}>
                <ImSearch size="1.5rem" />
                <span>Search</span>
              </li>
              <li className={style.active}>
                <AiFillHome size="1.5rem" />
                <span>Home</span>
              </li>
              <li>
                <img src="/Navbar Icon/network.svg" alt="" />
                <span>Network</span>
              </li>
              <li>
                <img src="/Navbar Icon/job.svg" alt="" />
                <span>Job</span>
              </li>
              <li>
                <img src="/Navbar Icon/msg.svg" alt="" />
                <span>Message</span>
              </li>
              <li>
                <img src="/Navbar Icon/notification.svg" alt="" />
                <span>Notification</span>
              </li>
              <li>
                <FaUser size="1.3rem" />
                <span>
                  Me <IoMdArrowDropdown />
                </span>
              </li>
              <li>
                <img src="/Navbar Icon/work.svg" alt="" />
                <span>
                  Work <IoMdArrowDropdown />
                </span>
              </li>
              <li>
                <IoIosMore size="1.5rem" onClick={navon} />
              </li>
            </ul>

            <ul
              className={style.mobilenav}
              style={{ display: ismobilenav ? "flex" : "none" }}
            >
              <li>
                <img src="/Navbar Icon/job.svg" alt="" />
                <span>Job</span>
              </li>
              <li>
                <img src="/Navbar Icon/msg.svg" alt="" />
                <span>Message</span>
              </li>
              <li>
                <img src="/Navbar Icon/notification.svg" alt="" />
                <span>Notification</span>
              </li>
              <li>
                <FaUser size="1.3rem" />
                <span>
                  Me <IoMdArrowDropdown />
                </span>
              </li>
              <li>
                <img src="/Navbar Icon/work.svg" alt="" />
                <span>
                  Work <IoMdArrowDropdown />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

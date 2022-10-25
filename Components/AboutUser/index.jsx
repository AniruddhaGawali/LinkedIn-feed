import React from "react";
import style from "./user.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";

const User = () => {
  return (
    <>
      <div className={style.mainwrapper}>
        <div className={style.userinfo}>
          <div className={style.banner}>
            <img src="/banner.png" alt="banner" />
          </div>
          <FaUserAlt className={style.userimage} size="3.5rem" />
          <div className={style.user}>
            <div className={style.username}>John Doe</div>
            <div className={style.usercarrer}>Web Developer</div>
            <div className={style.connection}>
              <span>
                Connections <br />
                <span>Grow your network</span>
              </span>{" "}
              <span>100</span>
            </div>
            <div className={style.myitems}>
              <BsFillBookmarkFill /> <span> My items</span>
            </div>
          </div>
        </div>
        <div className={style.usergroups}>
          <div>groups</div>
          <div>
            <span> events</span>
            <span>
              <GrFormAdd size="1.5rem" />
            </span>
          </div>
          <div>Followed Hashtags</div>
          <div>Discover more</div>
        </div>
      </div>
    </>
  );
};

export default User;

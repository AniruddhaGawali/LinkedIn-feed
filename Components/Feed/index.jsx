import React from "react";
import style from "./feed.module.css";
import { HiUserCircle } from "react-icons/hi";
import { MdSmartDisplay } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { RiEarthFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import feeddata from "../../asset/feed.json";

const Feed = () => {
  return (
    <>
      <div className={style.mainwrapper}>
        <div className={style.newpost}>
          <div className={style.textpost}>
            <span>
              <HiUserCircle size="4rem" />
            </span>
            <span>
              <input type="text" placeholder="Start a post" />
            </span>
          </div>
          <div className={style.otherpost}>
            <span>
              <MdPhotoSizeSelectActual color="lightblue" size="1.5rem" />
              <span>Photo</span>
            </span>
            <span>
              <MdSmartDisplay color="green" size="1.5rem" /> <span>Video</span>
            </span>
            <span>
              <MdEventNote color="brown" size="1.5rem" /> <span>Event</span>
            </span>
            <span>
              <MdArticle color="orangered" size="1.5rem" />{" "}
              <span>Write article</span>
            </span>
          </div>
        </div>
        <div className={style.feed}>
          {feeddata.map((feed) => {
            return (
              <div className={style.feedpostcard}>
                <div className={style.feedpostcardheader}>
                  <div className={style.feedpostcardheaderleft}>
                    <span>
                      <HiUserCircle size="3rem" />
                    </span>
                    <span>
                      <h3>{feed.name}</h3>
                      <p>{feed.about}</p>
                      <p>
                        <span> {feed.time} • </span>
                        <RiEarthFill />
                      </p>
                    </span>
                  </div>
                  <div className={style.feedpostcardheaderright}>
                    <span>
                      <FiMoreHorizontal size="1.2rem" />
                    </span>
                  </div>
                </div>
                <div className={style.feedpostcardbody}>
                  <p>{feed.caption}</p>
                  <img src={`/Feed/${feed.post}`} alt="" width="100%" />
                </div>
                <div className={style.feedpostcardfooter}>
                  <ul>
                    <li>
                      <AiFillLike size="1.5rem" />
                      <span>Like</span>
                    </li>
                    <li>
                      <FaRegCommentDots size="1.5rem" />
                      <span>Comment</span>
                    </li>
                    <li>
                      <IoMdShareAlt size="2rem" />
                      <span>Share</span>
                    </li>
                    <li>
                      <RiSendPlaneFill size="1.5rem" />
                      <span>Send</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feed;

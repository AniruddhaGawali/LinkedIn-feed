import React from "react";
import style from "./moreinfo.module.css";
import newsdata from "../../asset/news.json";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import links from "../../asset/footerlinks.json";

const moreinfo = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.news}>
          <h3>
            <span> LinkedIn News</span>{" "}
            <BsFillInfoSquareFill size=".8rem" style={{ cursor: "pointer" }} />
          </h3>
          <ul className={style.newsinfo}>
            {newsdata.map((news) => {
              return (
                <li className={style.newsdata}>
                  <div className={style.newscontent}>
                    <h4>{news.title}</h4>
                    <p>
                      {news.time} • {news.readers} readers,
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={style.newsbtn}>
            <span>Show More</span> <BsChevronDown />
          </div>
        </div>
        <div>
          <footer className={style.footer}>
            <ul className={style.links}>
              {links.map((link) => {
                return (
                  <li>
                    <a href="">{link}</a>
                  </li>
                );
              })}
            </ul>
            <div className={style.copyrights}>
              <span>
                <img src="/footerlogo.svg" alt="" />
              </span>
              <span> LinkedIn Corporation © 2022</span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default moreinfo;

import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";

import images from "~/assets/images";

const cx = classNames.bind(styles);

console.log(images.logo.default);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Logo Tiktok */}
        <div>
          <img src={images.logo.default} alt="Tiktok" />
        </div>

        {/* Search Input */}
        <div className={cx("search")}>
          <input type="text" placeholder="Search accounts and videos" spellCheck={false} />

          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={cx("actions")}></div>
      </div>
    </header>
  );
};

export default Header;

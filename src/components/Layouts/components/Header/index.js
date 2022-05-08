import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import images from "~/assets/images";

const cx = classNames.bind(styles);

console.log(images.logo.default);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Logo Tiktok */}
        <div className={cx("logo")}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>
      </div>
    </header>
  );
};

export default Header;

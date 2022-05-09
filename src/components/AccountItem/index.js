import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://s1.tvp.pl/images2/1/1/5/uid_115c2b97c89ffd3d9edd03ecc82d8c2b1648973360188_width_1280_play_0_pos_0_gs_0_height_720_karim-benzema-fot-getty-images.jpg"
        alt="Avatar"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Real Madrid</span> <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>realmadrid</span>
      </div>
    </div>
  );
};

export default AccountItem;

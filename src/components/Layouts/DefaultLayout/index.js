import React from "react";
import className from "classnames/bind";
import Header from "~/components/Layouts/components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = className.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;

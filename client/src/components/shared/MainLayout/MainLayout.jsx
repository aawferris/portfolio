import React from "react";
import "./MainLayout.css";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

const MainLayout = (props) => (
  <div className="layout">
    <MainHeader />
    <div className="layout-children">{props.children}</div>
    <MainFooter />
  </div>
);

export default MainLayout;

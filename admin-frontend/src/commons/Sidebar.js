import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "../commons";
import styled from "styled-components";

const Sidebar = ({ active }) => {
  return (
    <List>
      <Link to="/restaurant">
        <List.Item active={active === "restaurant" ? true : false}>
          식당 관리
        </List.Item>
      </Link>
      <Link to="/tag">
        <List.Item active={active === "tag" ? true : false}>
          태그 관리
        </List.Item>
      </Link>
    </List>
  );
};

export default Sidebar;

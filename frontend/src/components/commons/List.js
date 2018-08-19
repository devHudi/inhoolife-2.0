import React, { Component } from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin-bottom: 10px;
  border: 1px solid #e9ecef;
  border-bottom: none;
  background-color: #ffffff;
`;

const Item = styled.div`
  padding: 15px;
  font-size: 13pt;
  border-bottom: 1px solid #e9ecef;
`;

class List extends Component {
  static Item = Item;
  //Menu.Item 으로 접근 가능

  render() {
    const { children } = this.props;

    return <ListWrapper>{children}</ListWrapper>;
  }
}

export default List;

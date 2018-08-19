import React, { Component } from "react";
import styled from "styled-components";

const Item = styled.li`
  padding: 20px;
  border-bottom: 3px solid #dcddde;
  background-color: ${props => (props.active ? "#e9ecef" : "#ffffff")};
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const ButtonItem = Item.extend`
  cursor: pointer;
  background-color: #f3f3f3;
  color: #9ca09f;
  text-align: center;
`;

const LabelLi = Item.extend`
  display: flex;
  justify-content: space-between;
`;

const LabelItem = ({ children, label }) => (
  <LabelLi>
    <div>{children}</div>
    <Label>{label}</Label>
  </LabelLi>
);

class List extends Component {
  static Item = Item;
  static ButtonItem = ButtonItem;
  static LabelItem = LabelItem;

  render() {
    const { children, width } = this.props;

    return <Ul width={width}>{children}</Ul>;
  }
}

const Ul = styled.ul`
  width: ${props => props.width};
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Label = styled.span`
  color: #9ca09f;
`;

export default List;

import React, { Component } from "react";
import styled from "styled-components";

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  handleTagClick = () => {
    const { name, onClick } = this.props;
    const { isSelected } = this.state;

    this.setState(
      {
        isSelected: !isSelected
      },
      () => {
        onClick(name, this.state.isSelected);
      }
    );
  };

  render() {
    const { name } = this.props;
    const { isSelected } = this.state;

    return (
      <TagWrapper onClick={this.handleTagClick} isSelected={isSelected}>
        {name}
      </TagWrapper>
    );
  }
}

const TagWrapper = styled.button`
  position: relative;
  width: 23%;
  height: 43px;
  margin: 0 1% 10px 1%;
  background-color: ${props => (props.isSelected ? "#0056EB" : "#e9ecef")};
  border: #f4f3f7;
  border-radius: 100px;
  box-shadow: ${props =>
    props.isSelected ? "0 0 7px rgba(0, 86, 235, .3)" : ""};
  font-size: 12pt;
  letter-spacing: -2px;
  color: ${props => (props.isSelected ? "#ffffff" : "#212529")};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: 0.3s border, 0.3s color, 0.3s background-color, 0.3s top;
  &:last-child {
    margin-right: 0;
  }
`;

export default Tag;

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
    const { name, isFiltered } = this.props;
    const { isSelected } = this.state;

    return (
      <TagWrapper
        onClick={this.handleTagClick}
        isFiltered={isFiltered}
        isSelected={isSelected}
      >
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
  background-color: ${props =>
    props.isSelected ? "#0056EB" : props.isFiltered ? "#868e96" : "#e9ecef"};
  border: #f4f3f7;
  border-radius: 100px;
  box-shadow: ${props =>
    props.isSelected
      ? "0 0 7px rgba(0, 86, 235, .3)"
      : props.isFiltered
        ? "0 3px 10px rgba(0, 0, 0, .1)"
        : ""};
  font-size: 12pt;
  letter-spacing: -2px;
  color: ${props =>
    props.isSelected ? "#ffffff" : props.isFiltered ? "#ffffff" : "#212529"};
  top: ${props => (props.isSelected ? "0" : props.isFiltered ? "-3px" : "0")};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: 0.3s border, 0.3s color, 0.3s background-color, 0.3s top;
  &:last-child {
    margin-right: 0;
  }
`;

export default Tag;

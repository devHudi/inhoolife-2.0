import React, { Component, Fragment } from "react";
import styled from "styled-components";
import guideImage from "../../../../img/guide.png";
import closeImage from "../../../../img/close.png";

class Guide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };
  }

  handleCloseClick = () => {
    localStorage.guide = true;
    this.setState({
      isOpened: false
    });
  };

  componentDidMount() {
    if (!localStorage.guide) {
      this.setState({
        isOpened: true
      });
    }
  }

  render() {
    const { isOpened } = this.state;

    return (
      <Fragment>
        {isOpened ? (
          <Fragment>
            <GuideWrapper>
              <CloseButton src={closeImage} onClick={this.handleCloseClick} />
              <GuideImage src={guideImage} />
            </GuideWrapper>
          </Fragment>
        ) : null}
      </Fragment>
    );
  }
}

const GuideWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GuideImage = styled.img`
  width: 300px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
`;

export default Guide;

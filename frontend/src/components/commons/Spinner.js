import React from "react";
import styled from "styled-components";
import { DoubleBounce } from "styled-spinkit";
import { DimmerWrapper } from "../commons";

const Spinner = ({ text, isOpened }) => {
  const SpinnerWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: ${props => (props.visible ? "block" : "none")};
  `;

  const VerticalCenter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Center = styled.div`
    text-align: center;
  `;

  const Text = styled.div`
    margin-top: -70px;
    font-size: 11pt;
    color: #ffffff;
  `;

  return (
    <SpinnerWrapper visible={isOpened}>
      <DimmerWrapper>
        <VerticalCenter>
          <Center>
            <DoubleBounce color="#ffffff" size={100} />
            <Text> {text} </Text>
          </Center>
        </VerticalCenter>
      </DimmerWrapper>
    </SpinnerWrapper>
  );
};

export default Spinner;

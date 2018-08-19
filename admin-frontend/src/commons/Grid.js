import React, { Fragment } from "react";
import styled from "styled-components";

const Grid = ({ first, second, third }) => (
  <GridContainer>
    <FirstColumn> {first} </FirstColumn>
    {third ? (
      <Fragment>
        <SecondColumn> {second} </SecondColumn>
        <ThirdColumn> {third} </ThirdColumn>
      </Fragment>
    ) : (
      <SecondWideColumn> {second} </SecondWideColumn>
    )}
  </GridContainer>
);

const GridContainer = styled.section`
  display: flex;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FirstColumn = styled.div`
  width: 20%;
  border-right: 3px solid #dcddde;
  overflow-y: scroll;
`;

const SecondColumn = styled.div`
  width: 25%;
  border-right: 3px solid #dcddde;
  overflow-y: scroll;
`;

const ThirdColumn = styled.div`
  padding: 30px;
  width: 55%;
  background-color: #f3f3f3;
  overflow-y: scroll;
`;

const SecondWideColumn = styled.div`
  width: 80%;
`;

export default Grid;

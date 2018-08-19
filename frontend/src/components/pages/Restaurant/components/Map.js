import React from "react";
import styled from "styled-components";

const Map = ({ address }) => (
  <Iframe
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBXd0lbKKkNOVht3dUIirL_IDHVAeefIus&q=${address}`}
  />
);

const Iframe = styled.iframe`
  width: 100%;
  height: 250px;
  border: none;
`;

export default Map;

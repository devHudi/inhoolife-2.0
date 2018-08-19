import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      © Hudi. All rights reserved.<br />
      <a href="https://www.facebook.com/inhoolife/?hc_ref=ART91HF2uFywf0wGcnzIYnTwpA3YaA8BDucYgqxNrcsF1e6Q8HBElZV7ShKDoqfwBf8&fref=nf">
        공식 페이지
      </a>
      <a href="mailto:cdhnet98@gmail.com">협력문의</a>
      <a href="https://hudi.kr">개발자 블로그</a>
      <a href="https://github.com/devHudi/inhoolife-2.0">오픈소스</a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 30px;
  background-color: #343a40;
  text-align: center;
  font-size: 13pt;
  font-weight: lighter;
  letter-spacing: -1px;
  line-height: 180%;
  color: #ffffff;

  a {
    padding: 0 8px;
    border-right: 1px solid #495057;
    font-size: 12pt;
    color: #ffffff;
    letter-spacing: -2px;
    &:last-child {
      border: none;
    }
  }
`;

export default Footer;

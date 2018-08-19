import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import numberFormatter from "../../../../lib/numberFormatter";

const MenuList = ({ menu }) => {
  const MenuListWrapper = styled.div`
    padding: 10px 0;
  `;

  const Menu = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    font-size: 13pt;
    overflow: auto;
    &::before {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      height: 1px;
      margin-top: -1px;
      border-top: 1px dashed #dee2e6;
      box-sizing: border-box;
      content: "";
    }
  `;

  const Name = styled.div`
    padding-right: 5px;
    position: relative;
    background-color: #ffffff;
    color: #212529;
    float: left;
  `;

  const Price = styled.div`
    padding-left: 5px;
    position: relative;
    background-color: #ffffff;
    color: #495057;
    float: right;
  `;

  const SuggestMenu = styled.div`
    margin-top: 20px;
    text-align: right;
    font-size: 11pt;
    & a {
      color: #868e96;
      text-decoration: underline;
    }
  `;

  const NoMenu = styled.div`
    padding: 20px 10px;
    font-size: 13pt;
    color: #868e96;
    & a {
      text-decoration: underline;
    }
  `;

  if (menu.length > 0) {
    return (
      <MenuListWrapper>
        {menu.map((dish, i) => (
          <Menu key={i}>
            <Name>{dish.name}</Name>
            <Price>{numberFormatter(dish.price)}원</Price>
          </Menu>
        ))}
        <SuggestMenu>
          <Link to="/menu-suggest">잘못된 메뉴/새로운 메뉴 제안하기</Link>
        </SuggestMenu>
      </MenuListWrapper>
    );
  } else {
    return (
      <MenuListWrapper>
        <NoMenu>
          등록된 메뉴가 없습니다. <Link to="/menu-suggest">여기</Link>를
          클릭하여 새로운 메뉴를 제안해주세요.
        </NoMenu>
      </MenuListWrapper>
    );
  }
};

export default MenuList;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faUser,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: localStorage.jwt
    };
  }

  handleLogout = () => {
    localStorage.jwt = "";
    this.setState(
      {
        isLogin: false
      },
      () => {
        alert("로그아웃 됐습니다.");
      }
    );
  };

  render() {
    const { active } = this.props;
    const { isLogin } = this.state;

    return (
      <Nav>
        <Menu>
          <Link to="/">
            <FontAwesomeIcon
              icon={faHome}
              size="lg"
              color={active === "home" ? "#006DFF" : "#adb5bd"}
            />
            <MenuText active={active === "home" ? true : false}> 홈 </MenuText>
          </Link>
        </Menu>
        <Menu>
          <Link to="/like">
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              color={active === "like" ? "#006DFF" : "#adb5bd"}
            />
            <MenuText active={active === "like" ? true : false}>
              좋아한 식당
            </MenuText>
          </Link>
        </Menu>
        <Menu>
          {isLogin ? (
            <Logout onClick={this.handleLogout}>
              <FontAwesomeIcon icon={faUser} size="lg" color="#adb5bd" />
              <MenuText>로그아웃</MenuText>
            </Logout>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                color={active === "login" ? "#006DFF" : "#adb5bd"}
              />
              <MenuText active={active === "login" ? true : false}>
                로그인
              </MenuText>
            </Link>
          )}
        </Menu>
        <Menu>
          <Link to="/menu">
            <FontAwesomeIcon
              icon={faEllipsisH}
              size="lg"
              color={active === "menu" ? "#006DFF" : "#adb5bd"}
            />
            <MenuText active={active === "menu" ? true : false}>
              더보기
            </MenuText>
          </Link>
        </Menu>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: #ffffff;
  border-top: 1px solid #eaeaed;
  z-index: 999;
`;

const Menu = styled.div`
  padding: 10px 0;
  width: 25%;
  text-align: center;

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const MenuText = styled.div`
  margin-top: 3px;
  font-size: 10pt;
  font-weight: bold;
  color: ${props => (props.active ? "#006DFF" : "#adb5bd")};
`;

const Logout = styled.span`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export default Navigation;

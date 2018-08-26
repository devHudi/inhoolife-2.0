import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithubSquare,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";
import {
  faCommentAlt,
  faComment,
  faListUl
} from "@fortawesome/free-solid-svg-icons";
import { WidthLimiter, List, Navigation } from "../../commons";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <WidthLimiter noPadding>
          <List>
            <a href="https://www.facebook.com/inhoolife/">
              <List.Item>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ marginRight: "10px" }}
                  color="#4360B4"
                />
                공식 페이스북 페이지
              </List.Item>
            </a>
            <a href="https://hudi.kr">
              <List.Item>
                <FontAwesomeIcon
                  icon={faWordpress}
                  style={{ marginRight: "10px" }}
                  color="#3382B5"
                />
                개발자 블로그
              </List.Item>
            </a>
            <a href="https://github.com/devHudi/inhoolife-2.0">
              <List.Item>
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  style={{ marginRight: "10px" }}
                  color="#212529"
                />
                오픈소스 Github 저장소
              </List.Item>
            </a>
            <Link to="/list">
              <List.Item>
                <FontAwesomeIcon
                  icon={faListUl}
                  style={{ marginRight: "10px" }}
                  color="#495057"
                />
                모든 식당보기
              </List.Item>
            </Link>
            <Link to="/suggest">
              <List.Item>
                <FontAwesomeIcon
                  icon={faCommentAlt}
                  style={{ marginRight: "10px" }}
                  color="#495057"
                />
                문의하기
              </List.Item>
            </Link>
          </List>

          <List>
            <a href="http://pf.kakao.com/_xaxnZPC">
              <List.Item>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ marginRight: "10px" }}
                  color="#FFD703"
                />
                카톡 인하대 학식 알리미
              </List.Item>
            </a>
          </List>
        </WidthLimiter>
        <Navigation active="menu" />
      </Fragment>
    );
  }
}

export default Menu;

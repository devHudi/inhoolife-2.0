import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

/*
  Moment 한글화
  출처 : https://kyungw00k.github.io/2011/11/17/moment-js-%ED%95%9C%EA%B8%80-%EC%96%B8%EC%96%B4%ED%8C%A9-%EC%B6%94%EA%B0%80/
*/
var lang = {
  months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
  monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
  weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
  weekdaysShort: "일_월_화_수_목_금_토".split("_"),
  longDateFormat: {
    L: "YYYY.MM.DD",
    LL: "YYYY년 MMMM D일",
    LLL: "YYYY년 MMMM D일 A h시 mm분",
    LLLL: "YYYY년 MMMM D일 dddd A h시 mm분"
  },
  meridiem: {
    AM: "오전",
    am: "오전",
    PM: "오후",
    pm: "오후"
  },
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: "몇초",
    ss: "%d초",
    m: "일분",
    mm: "%d분",
    h: "한시간",
    hh: "%d시간",
    d: "하루",
    dd: "%d일",
    M: "한달",
    MM: "%d달",
    y: "일년",
    yy: "%d년"
  },
  ordinal: function(number) {
    return "일";
  }
};
moment.locale("kr", lang);

class Comment extends Component {
  shouldComponentUpdate(nextProps) {
    const { body } = this.props;
    return nextProps.body !== body;
  }

  render() {
    const { nickname, body, isCreatedAt, i } = this.props;
    return (
      <CommentWrapper key={i}>
        <CommentAuthor> {nickname} </CommentAuthor>
        <CommentBody> {body} </CommentBody>
        <CommentDate>{moment(isCreatedAt).fromNow()}</CommentDate>
      </CommentWrapper>
    );
  }
}

const CommentWrapper = styled.div`
  margin-bottom: 10px;
`;

const CommentAuthor = styled.div`
  margin-right: 2px;
  padding: 3px 10px;
  display: inline-block;
  border-radius: 100px;
  background-color: #e9ecef;
  text-align: center;
  font-size: 11pt;
  font-weight: 400;
  color: ${props => props.color};
`;

const CommentBody = styled.span`
  font-size: 12pt;
  color: #343a40;
`;

const CommentDate = styled.div`
  float: right;
  color: #adb5bd;
`;

export default Comment;

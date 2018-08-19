import React, { Fragment } from "react";
import { Comment } from "../components";

const CommentList = ({ comments }) => {
  return (
    <Fragment>
      {comments.map((comment, i) => (
        <Comment
          nickname={comment.nickname}
          body={comment.body}
          isCreatedAt={comment.isCreatedAt}
          key={i}
        />
      ))}
    </Fragment>
  );
};

export default CommentList;

import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Input, Button } from "../../../commons";
import { ErrorBox } from "../components";

const LoginForm = ({
  onChangeid,
  onChangePassword,
  onClickLogin,
  redirect,
  error
}) => {
  return (
    <Fragment>
      {error ? <ErrorBox message={error} /> : null}
      <Input big placeholder="아이디" onChange={onChangeid} />
      <Input
        big
        placeholder="비밀번호"
        type="password"
        onChange={onChangePassword}
      />
      <Button big primary onClick={onClickLogin}>
        로그인
      </Button>
      {redirect ? <Redirect to="" /> : null}
    </Fragment>
  );
};

export default LoginForm;

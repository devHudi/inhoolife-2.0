import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Input, Button } from "../../../commons";
import { ErrorBox } from "../components";

const RegisterForm = ({
  onChangeid,
  onChangeNickname,
  onChangePassword,
  onClickRegister,
  redirect,
  error
}) => {
  return (
    <Fragment>
      {error ? <ErrorBox message={error} /> : null}
      <Input big placeholder="아이디" onChange={onChangeid} />
      <Input big placeholder="닉네임" onChange={onChangeNickname} />
      <Input
        big
        placeholder="비밀번호"
        type="password"
        onChange={onChangePassword}
      />
      <Button big primary onClick={onClickRegister}>
        회원가입
      </Button>
      {redirect ? <Redirect to="/login" /> : null}
    </Fragment>
  );
};

export default RegisterForm;

import React, { Fragment } from "react";
import styled from "styled-components";
import { Input, Label, Button } from "../../../commons";

const Form = ({
  id,
  name,
  tags,
  menu,
  address,
  isNew,
  url,
  onNameChange,
  onTagChange,
  onMenuChange,
  onAddressChange,
  onURLChange,
  onConfirmClick,
  onRemoveClick,
  onAddRestaurant,
  onRemoveRestaurant,
  onModifyRestaurant
}) => {
  return (
    <Fragment>
      {isNew ? "" : <Label> ID : {id}</Label>}
      <Label> 식당명 </Label>
      <Input value={name} onChange={onNameChange} placeholder="식당 이름" />

      <Label> 주소 </Label>
      <Input
        value={address}
        onChange={onAddressChange}
        placeholder="식당 주소"
      />

      <Label> 태그 </Label>
      <Input
        value={tags}
        onChange={onTagChange}
        placeholder="태그 (쉼표로 구분)"
      />

      <Label> 메뉴 </Label>
      <Input
        value={menu}
        rows={10}
        onChange={onMenuChange}
        textarea
        placeholder="식당 메뉴 ( 메뉴1:가격1 ) ( 각 메뉴는 행으로 구분합니다 )"
      />

      <Label> 이미지 URL </Label>
      <Input
        value={url}
        onChange={onURLChange}
        placeholder={isNew ? "URL" : "이미지를 수정할 필요가 없으면 비워두세요"}
      />

      <AlignRight>
        {isNew ? null : (
          <Button
            danger
            onClick={() => {
              onRemoveClick().then(restaurant => {
                onRemoveRestaurant(restaurant.id);
              });
            }}
          >
            삭제
          </Button>
        )}
        {isNew ? (
          <Button
            onClick={() => {
              onConfirmClick().then(restaurant => {
                onAddRestaurant(restaurant);
              });
            }}
          >
            추가
          </Button>
        ) : (
          <Button
            onClick={() => {
              onConfirmClick().then(() => {
                onModifyRestaurant();
              });
            }}
          >
            수정
          </Button>
        )}
      </AlignRight>
    </Fragment>
  );
};

const AlignRight = styled.div`
  text-align: right;
`;

export default Form;

import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openCart } from "../store/productSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(openCart());
  };
  return (
    <StyledHeader>
      <h1>Online 🛒 shop</h1>
      <button onClick={openCartHandler}>Cart 🛒</button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  background-color: #1c1c1c;
  h1 {
    color: wheat;
  }

  button {
    width: 300px;
    height: 50px;
    font-size: 18px;
    font-weight: 900;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid white;
    color: wheat;
    background-color: #8080f1;
    &:hover {
      background-color: #33336d;
    }
  }
`;

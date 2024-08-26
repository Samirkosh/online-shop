import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeCart, decrement, increment } from "../store/productSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartProduct } = useSelector((store) => store.myProducts);

  const closeCartHandler = () => {
    dispatch(closeCart());
  };

  const totalPrice = cartProduct.reduce((acc, item) => {
    return acc + item.price * item.quantyti;
  }, 0);

  const incrementHandler = (id) => {
    dispatch(increment(id));
  };

  const decrementHandler = (id) => {
    dispatch(decrement(id));
  };
  return (
    <StyledCart onClick={closeCartHandler}>
      <CartContent onClick={(e) => e.stopPropagation()}>
        <ItemsWrapper>
          {cartProduct.map((item) => (
            <ContentCart key={item.id}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <h2>{item.price}$</h2>
              <div>
                <button onClick={() => decrementHandler(item.id)}>-</button>
                <span> {item.quantyti}</span>

                <button onClick={() => incrementHandler(item.id)}>+</button>
              </div>
            </ContentCart>
          ))}
        </ItemsWrapper>
        <ButtonWrapper>
          <h1>Total amount:{totalPrice}$</h1>
          <button onClick={closeCartHandler}>close</button>
        </ButtonWrapper>
      </CartContent>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #65656579;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartContent = styled.div`
  width: 600px;
  max-height: 600px;
  background-color: #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const ItemsWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  background-color: #444;
  border-top: 1px solid #555;

  gap: 40px;
  & > h1 {
    color: #fff;
  }
  & > button {
    padding: 5px;
    background-color: #fff;
    color: #555;
    font-size: 18px;
    font-weight: 900;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const ContentCart = styled.div`
  width: 100%;
  height: 200px;
  background-color: #d1cdcd;
  border: 3px solid white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 10px auto;
  & > img {
    width: 200px;
    height: fit-content;
  }
  & > div {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  & > div > span {
    font-weight: 900;
    font-size: 18px;
  }
  & > div > button {
    padding: 5px;
    background-color: #333;
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    border-radius: 3px;
  }
`;

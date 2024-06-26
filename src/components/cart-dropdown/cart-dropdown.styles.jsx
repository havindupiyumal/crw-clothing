import styled from "styled-components";

import { BaseButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton} {
    padding: 30;
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Total = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 10px;
  padding: 10px;
  font-weight: 900;
  border-top: 1px dotted black;
`;

import styled from "styled-components";

import { ReactComponent as Minus } from "../../assests/minus.svg";
import { ReactComponent as Plus } from "../../assests/plus.svg";
import { ReactComponent as Delete } from "../../assests/delete.svg";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItemName = styled.span`
  font-size: 16px;
`;

export const MinusIcon = styled(Minus)`
  margin-right: 5px;
  cursor: pointer;
`;

export const PlusIcon = styled(Plus)`
  margin-right: 5px;
  cursor: pointer;
`;

export const DeleteIcon = styled(Delete)`
  margin-left: 20px;
  cursor: pointer;
`;

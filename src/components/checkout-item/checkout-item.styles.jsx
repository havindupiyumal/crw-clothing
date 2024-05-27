import styled from "styled-components";

import { ReactComponent as Delete } from "../../assests/delete.svg";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemName = styled.span`
  width: 23%;
`;

export const ItemQuantity = styled.span`
  display: flex;
  width: 23%;
`;

export const ItemQuantityValue = styled.span`
  margin: 0 10px;
`;

export const ItemPrice = styled.span`
  width: 23%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const RemoveButton = styled(Delete)`
  margin-left: 20px;
  cursor: "pointer";
`;

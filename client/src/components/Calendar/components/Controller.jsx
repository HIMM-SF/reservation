import React from "react";
import styled from "styled-components";
import ArrowRight from "../../../../assets/ArrowRight.svg";

const Root = styled.div`
  width: 100%;
  height: 84px;
  padding: 22px 0px 37px 0px;
  box-sizing: border-box;
  z-index: 1;
`;

const Button = styled.button`
  width: 39px;
  height: 33px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColorV2};
  cursor: pointer;
  border-radius: 3px;
  padding: 6px 9px;

  svg {
    fill: #757575;
    width: 19px !important;
    height: 19px !important;
    transform: ${(props) => (props.left ? "rotate(180deg)" : "")}
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  box-sizing: border-box;
`;

const Controller = () => (
  <Root>
    <InnerContainer>
      <Button left type="button"><ArrowRight /></Button>
      <Button type="button"><ArrowRight /></Button>
    </InnerContainer>
  </Root>
);

export default Controller;

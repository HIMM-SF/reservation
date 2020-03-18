import React from "react";
import styled from "styled-components";
import Caret from "./components/Caret";
import Controller from "./components/Controller";

const Root = styled.div`
  display: flex;
  width: 326px; 
  height: 330px;
  background-color: white;
  position: absolute;
  justify-content: center;
  top: 170px;
  z-index: 1;
  border: solid 1px ${(props) => props.theme.borderColorV2};
`;

const InnerContainer = styled.div`
  width: 300px;
  height: 285px;
  padding: 0 7px;
  z-index: 1;
  box-sizing: border-box;
`;

const Calender = (props, ref) => (
  <Root ref={ref} border>
    <Caret />

    <InnerContainer>
      <Controller />
    </InnerContainer>
  </Root>
);

export default React.forwardRef(Calender);

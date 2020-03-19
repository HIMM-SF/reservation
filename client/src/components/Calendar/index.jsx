import React from "react";
import styled from "styled-components";
import Caret from "./components/Caret";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Month from "./components/Month";

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
  box-sizing: border-box;
`;

const Calender = (props, ref) => (
  <Root ref={ref} border>
    <Caret />

    <InnerContainer>
      <Controller />
      <Header />
      <Month />
    </InnerContainer>
  </Root>
);

export default React.forwardRef(Calender);

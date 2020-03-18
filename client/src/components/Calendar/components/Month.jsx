import React from "react";
import styled from "styled-components";
import Day from "./Day";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 0;
  width: 286px;
  height: 300px;
  box-sizing: border-box;
  padding-top: 22px;

  h4 {
    width: 100%;
    text-align: center;
    margin: 0;
    line-height: 2;
    height: fit-content;
    font-weight: bolder;
    color: ${(props) => props.theme.strongFont}
  }
`;

const GridWrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  
`;

const Month = () => (
  <Root>
    <h4>May 2020</h4>

    <GridWrapper>
      <Day day={1} />
      <Day day={2} />
      <Day day={22} />
      <Day day={25} />
    </GridWrapper>
  </Root>
);

export default Month;

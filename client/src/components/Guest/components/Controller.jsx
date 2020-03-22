import React from "react";
import styled from "styled-components";

const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  h5 {
    margin: 0;
    font-weight: bold;
    text-align: center;
    line-height: 2.5;
  }
`;

const Button = styled.button`
  display: block;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.checkIn};
  border: 1px solid ${(props) => props.theme.checkIn};
`;

const Controller = ({ counter }) => (
  <Root>
    <Button type="button">-</Button>
    <h5>0</h5>
    <Button type="button">+</Button>
  </Root>
);

export default Controller;

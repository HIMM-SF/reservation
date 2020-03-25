import React from "react";
import styled, { css } from "styled-components";

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  
  h5 {
    margin: 8px 0;
    font-weight: 400;
    color: ${(props) => props.theme.strongFont}
  }

  ${(props) => props.info && css`
    h5:nth-child(1):after {
      content: '?';
      display: inline-block;
      font-family: sans-serif;
      font-weight: bold;
      text-align: center;
      width: 10px;
      height: 10px;
      line-height: 11px;
      border-radius: 50%;
      margin-left: 4px;
      padding: 2px;
      color: ${props.theme.lightFont};
      border: 1px solid ${props.theme.lightFont};
    }
  `}

  ${(props) => props.total && css`
    border-bottom: none;
    h5 {
      font-size: 16px;
      font-weight: bold;
    }
  `}
`;

const Charge = ({ description, fee, ...props }) => (
  <Root {...props}>
    <h5>{description}</h5>
    <h5>${fee}</h5>
  </Root>
);

export default Charge;

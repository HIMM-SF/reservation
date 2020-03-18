import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  position: absolute;
  top: -10.5px;
  left: 20px;

  svg {
    width: 20px;
    height: 10.5px;
    fill: transparent;

    path:nth-child(1) {
      stroke: white;
    }

    path:nth-child(2) {
      stroke: ${(props) => props.theme.borderColorV2};
    }
  }
`;

const Caret = () => (
  <Root>
    <svg role="presentation" focusable="false">
      <path d="M0,10 20,10 10,0z" />
      <path d="M0,10 10,0 20,10" />
    </svg>
  </Root>
);

export default Caret;

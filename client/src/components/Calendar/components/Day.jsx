import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.borderColorV2}
`;

const Month = ({ day }) => (
  <Root>
    {day}
  </Root>
);

export default Month;

import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.borderColorV2};
  grid-column-start: ${(props) => props.startCol};
`;

const Month = ({ day, startCol }) => (
  <Root startCol={startCol}>
    {day}
  </Root>
);

export default Month;

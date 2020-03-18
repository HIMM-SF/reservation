import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  grid-column-start: ${(props) => props.startCol};
  outline: 1px solid ${(props) => props.theme.borderColorV2};
`;

const Month = ({ day, week, startCol }) => (
  <Root startCol={startCol} week={week}>
    {day}
  </Root>
);

export default Month;

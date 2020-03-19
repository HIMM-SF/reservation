import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: ${(props) => props.theme.strongFont};
  grid-column-start: ${(props) => props.startCol};
  outline: 1px solid ${(props) => props.theme.borderColorV2};
`;

const Month = ({ day, startCol }) => {
  const handleClick = () => {
  };
  return (
    <Root startCol={startCol} onClick={handleClick}>
      {day}
    </Root>
  );
};

export default Month;

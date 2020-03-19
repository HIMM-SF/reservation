import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationContext } from "../../../context/reservation.context";

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
  const { addCheckInDate } = useContext(ReservationContext);
  return (
    <Root startCol={startCol} onClick={() => addCheckInDate(day)}>
      {day}
    </Root>
  );
};

export default Month;

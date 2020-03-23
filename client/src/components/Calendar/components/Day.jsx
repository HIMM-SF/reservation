import React, { memo, useContext } from "react";
import styled from "styled-components";
import { ReservationActionContext } from "../../../context/reservation.context";
import { addReservation, onHover } from "../../../actions";

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

  &:hover {
    background-color: ${(props) => props.theme.borderColorV2};
  }

  &.booked {
    text-decoration: line-through;
    color: ${(props) => props.theme.fontBooked};
    cursor: default;
    pointer-events: none;
  }

  &.check-in {
    background-color: ${(props) => props.theme.checkIn};
    color: white;
    pointer-events: none;
  }

  &.options:hover {
    background-color: ${(props) => props.theme.inputBackground};
  }
`;

const Day = ({ day, ...props }) => {
  const dispatch = useContext(ReservationActionContext);
  console.log("Inside Day Component");

  return (
    <Root {...props} onClick={addReservation(dispatch)} onMouseEnter={onHover(dispatch)}>
      {day}
    </Root>
  );
};

export default memo(Day);

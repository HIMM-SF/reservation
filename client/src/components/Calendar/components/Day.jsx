import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationActionContext } from "../../../context/reservation.context";
import { addReservation, onHover } from "../../../actions";

const Root = styled.div.attrs((props) => ({
  "data-date": props.date,
  "data-type": props.type,
}))`
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
`;

const Day = ({ day, close, ...props }) => {
  const dispatch = useContext(ReservationActionContext);
  const handleAdd = (e) => {
    const { type } = e.target.dataset;
    addReservation(dispatch)(e);

    if (type === "end") {
      close();
    }
  };

  return (
    <Root {...props} onClick={handleAdd} onMouseEnter={onHover(dispatch)}>
      {day}
    </Root>
  );
};

export default React.memo(Day);

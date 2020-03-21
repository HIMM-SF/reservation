import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationContext } from "../../../context/reservation.context";

const Root = styled.div`
  position: relative;
  top: 90%;
  display: flex;
  justify-content: flex-end;
  padding: 0 4%;
  z-index: 2;
`;

const Button = styled.button`
  color: ${(props) => props.theme.checkIn};
  border: none;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Clear = () => {
  const { resetReservation } = useContext(ReservationContext);

  return (
    <Root>
      <Button type="button" onClick={resetReservation}>
        Clear dates
      </Button>
    </Root>
  );
};

export default Clear;

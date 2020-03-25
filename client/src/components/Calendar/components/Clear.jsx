import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationActionContext } from "../../../context/reservation.context";
import { resetDates } from "../../../actions";

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
  const dispatch = useContext(ReservationActionContext);

  return (
    <Root>
      <Button type="button" onClick={resetDates(dispatch)}>
        Clear dates
      </Button>
    </Root>
  );
};

export default React.memo(Clear);

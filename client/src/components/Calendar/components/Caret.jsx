import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationContext } from "../../../context/reservation.context";

const Root = styled.div`
  display: flex;
  position: absolute;
  top: -10.5px;
  left: ${(props) => (props.checkIn ? "200px;" : "20px")};

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

const Caret = () => {
  const { reservation: { checkIn } } = useContext(ReservationContext);

  return (
    <Root checkIn={checkIn}>
      <svg role="presentation" focusable="false">
        <path d="M0,10 20,10 10,0z" />
        <path d="M0,10 10,0 20,10" />
      </svg>
    </Root>
  );
};

export default Caret;

import React, { useContext } from "react";
import styled from "styled-components";
import CaretUp from "../../../../assets/CaretUp.svg";
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
  const { checkIn } = useContext(ReservationContext);

  return (
    <Root checkIn={checkIn}>
      <CaretUp />
    </Root>
  );
};

export default React.memo(Caret);

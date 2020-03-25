import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationContext } from "../../context/reservation.context";
import Charge from "./Charge";

const Root = styled.div`
  width: 100%;
`;

const Summary = () => {
  const { room, end, start } = useContext(ReservationContext);
  const days = end.day - start.day;
  const perNight = room ? room.per_night : 1;
  const totalCostDays = Math.floor(perNight * days);
  const cleaningFee = 50;
  const serviceFee = 60;
  const taxesFee = 83;
  const total = taxesFee + serviceFee + cleaningFee + totalCostDays;
  return (
    <Root>
      <Charge description={`$${Math.floor(perNight)} x ${days}`} fee={(totalCostDays).toLocaleString()} />
      <Charge info description="Cleaning fee" fee={(cleaningFee).toLocaleString()} />
      <Charge info description="Service fee" fee={(serviceFee).toLocaleString()} />
      <Charge info description="Occupancy taxes and fees" fee={(taxesFee).toLocaleString()} />
      <Charge total description="Total" fee={(total).toLocaleString()} />
    </Root>
  );
};
export default React.memo(Summary);

import React from "react";
import styled from "styled-components";
import ReservationForm from "./ReservationForm";

const ReservationContainer = styled.div`
  width: 376px;
  height: 387px;
  margin-top: 32px;
  position: sticky;
  top: 75px;

  @media screen and (max-width: 1127px) { 
    display: none;
  }
`;

const OuterWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.borderColorV2}; 
  padding: 0px 24px 0px 24px;
  height: auto;
`;

const Reservation = () => (
  <ReservationContainer>
    <OuterWrapper>
      <ReservationForm />
    </OuterWrapper>
  </ReservationContainer>
);

export default React.memo(Reservation);

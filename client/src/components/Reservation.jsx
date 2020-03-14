import React from "react";
import styled from "styled-components";

const ReservationContainer = styled.div`
  width: 376px;
  height: 387px;
  margin-top: 24px;
  position: sticky;
  top: 75px;
`;

const Wrapper = styled.div`
  color: red;
  border: 1px solid #e4e4e4; 
  padding: 0px 24px 0px 24px;
  height: 100%;
`;

const Reservation = () => (
  <ReservationContainer>
    <Wrapper>Component</Wrapper>
  </ReservationContainer>
);


export default Reservation;

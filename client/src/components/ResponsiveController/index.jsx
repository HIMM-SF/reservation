import React, { useContext } from "react";
import styled from "styled-components";
import ReservationHeader from "../ReservationForm/components/Header";
import { ReservationContext } from "../../context/reservation.context";

const Root = styled.div`
width: 100%;
padding: 0 40px;

@media screen and (min-width: 1127px) { 
  display: none;
}

.container {
  display: flex;
  justify-content: space-between;
  height: 48px;
  padding: 16px 0;
}

.button {
  width: 180px;

  input {
    cursor: pointer;
    outline: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;;
    background-color: ${(props) => props.theme.btnBackgroundColor2};
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
  }
}
`;

const ResponsiveController = () => {
  const { room } = useContext(ReservationContext);

  return (
    <Root>
      <div className="container">
        <div>
          <ReservationHeader mobile price={room ? Math.floor(room.per_night) : ""} reviews={room ? room.reviews.length * 25 : ""} />
        </div>
        <div className="button">
          <input type="button" value="Check Availability" />
        </div>
      </div>
    </Root>

  );
};

export default ResponsiveController;

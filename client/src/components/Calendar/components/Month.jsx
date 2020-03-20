import React, { useContext } from "react";
import styled from "styled-components";
import Day from "./Day";
import { ReservationContext } from "../../../context/reservation.context";
import daysBuilder from "../../../util/calendar-daysBuilder";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 0;
  width: 286px;
  height: 300px;
  box-sizing: border-box;
  padding-top: 22px;

  h4 {
    width: 100%;
    text-align: center;
    margin: 0;
    line-height: 2;
    height: fit-content;
    font-weight: bolder;
    color: ${(props) => props.theme.strongFont}
  }
`;

const GridWrapper = styled.div`
  width: 100%;
  margin-top: 37px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
`;

const Month = () => {
  const { reservation: { date, room: { booked_dates: bookDates } } } = useContext(ReservationContext);
  const { days, month: [, cMonth, year] } = date;

  return (
    <Root>
      <h4>{`${cMonth} ${year}`}</h4>

      <GridWrapper>
        {daysBuilder(days, bookDates[cMonth], Day)}
      </GridWrapper>
    </Root>
  );
};

export default Month;

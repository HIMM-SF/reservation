import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Day from "./Day";
import { ReservationContext } from "../../../context/reservation.context";

const Root = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  // position: absolute;
  align-items: center;
  top: 0;
  width: 286px;
  height: 300px;
  min-width: 286px;
  box-sizing: border-box;
  padding-top: 22px;
  margin-right: 29px;

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

  ${(props) => props.start && props.end && css`
    .options:nth-child(n+${props.start}):nth-child(-n+${props.end}) {
      background-color: ${props.theme.inputBackground};
      color: white;
    }
  `}
`;

const Month = ({ month }) => {
  const {
    openDaysBuilder,
    checkOutDaysBuilder,
    reservation: { checkIn, start, end },
  } = useContext(ReservationContext);
  const { info: [, cMonth, year] } = month;
  console.log(month);
  return (
    <Root>
      <h4>{`${cMonth} ${year}`}</h4>
      <GridWrapper start={start} end={end}>
        {
          !checkIn
            ? openDaysBuilder(month, Day)
            : checkOutDaysBuilder(Day)
        }
      </GridWrapper>
    </Root>
  );
};

export default Month;

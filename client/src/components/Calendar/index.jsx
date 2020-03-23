import React, { useContext, memo } from "react";
import styled from "styled-components";
import Caret from "./components/Caret";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Month from "./components/Month";
import { ReservationContext } from "../../context/reservation.context";
import Clear from "./components/Clear";
import Slider from "./components/Slider";

const Root = styled.div`
  width: 326px; 
  height: 340px;
  background-color: white;
  position: absolute;
  top: 170px;
  border: solid 1px ${(props) => props.theme.borderColorV2};
`;

const InnerRoot = styled.div`
  display: flex;
  width: inherit; 
  height: inherit;
  position: absolute;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 300px;
  height: 285px;
  padding: 0 7px;
  box-sizing: border-box;
`;

const Calendar = (props, ref) => {
  const { checkIn, year } = useContext(ReservationContext);

  console.log("Re-render Calendar");
  return (
    <Root ref={ref} border>
      <Caret />
      <InnerRoot>
        <InnerContainer>
          <Controller />
          <Header />

          <Slider>
            { year.map((month) => <Month key={month.info[0]} month={month} />) }
          </Slider>

        </InnerContainer>
      </InnerRoot>

      {checkIn ? <Clear /> : ""}
    </Root>
  );
};

export default memo(React.forwardRef(Calendar));

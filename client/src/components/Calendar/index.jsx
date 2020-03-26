import React, { useState } from "react";
import styled from "styled-components";
import Caret from "./components/Caret";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Month from "./components/Month";
import Clear from "./components/Clear";
import Slider from "./components/Slider";

const Root = styled.div`
  width: 326px; 
  height: 340px;
  background-color: white;
  position: absolute;
  top: 169px;
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

  .slider {
    transform: translateX(-${(props) => (((props.index) * 315))}px);
  }
`;

const Calendar = ({
  checkIn, months, bookedDates, close,
}, ref) => {
  const [currentIndex, setcurrentIndex] = useState((new Date()).getMonth());

  const handleSlider = (direction) => {
    let oldIndex = currentIndex;
    const newIndex = direction === "left" ? oldIndex -= 1 : oldIndex += 1;

    setcurrentIndex(newIndex);
  };

  return (
    <Root ref={ref} border>
      <Caret />
      <InnerRoot>
        <InnerContainer>
          <Controller handleSlider={handleSlider} />
          <Header />

          <Slider index={currentIndex}>
            { months.map((month) => {
              const [id, name] = month.info;
              return <Month close={close} key={id} bookedDays={bookedDates[name]} month={month} />;
            })}
          </Slider>

        </InnerContainer>
      </InnerRoot>

      {checkIn ? <Clear /> : ""}
    </Root>
  );
};

export default React.forwardRef(Calendar);

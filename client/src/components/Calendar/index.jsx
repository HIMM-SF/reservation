import React, { useContext } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Caret from "./components/Caret";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Month from "./components/Month";
import { ReservationContext } from "../../context/reservation.context";

const Root = styled.div`
  width: 326px; 
  height: 330px;
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

  /* slide enter */
  .slide-prev-enter {
    transform: translate(320px);

    &.slide-prev-enter-active {
      transform: translate(0);
      transition: transform 200ms linear;
    }
  }

  /* slide exit */
  .slide-prev-exit {
    transform: translate(0px);

    &.slide-prev-exit-active {
      transform: translate(-320px);
      transition: transform 200ms linear;
    }
  } 

  .slide-next-enter {
    transform: translate(-320px);

    &.slide-next-enter.slide-next-enter-active {
      transform: translate(0px);
      transition: transform 200ms linear;
    }
  }

  /* slide exit */
  .slide-next-exit {
    transform: translate(0px);

    &.slide-next-exit.slide-next-exit-active {
      transform: translate(320px);
      transition: transform 200ms linear;
    }     
  }
`;

const Calendar = (props, ref) => {
  const { reservation: { date: { month }, action } } = useContext(ReservationContext);

  const childFactoryCreator = (classNames) => (
    (child) => (
      React.cloneElement(child, {
        classNames,
      })
    )
  );

  return (
    <Root ref={ref} border>
      <Caret />
      <InnerRoot>


        <InnerContainer>
          <Controller />
          <Header />

          <TransitionGroup childFactory={childFactoryCreator(action === "prev" ? "slide-next" : "slide-prev")}>
            <CSSTransition key={month[0]} timeout={200} classNames={action === "prev" ? "slide-next" : "slide-prev"}>
              <Month />
            </CSSTransition>
          </TransitionGroup>
        </InnerContainer>
      </InnerRoot>
    </Root>
  );
};

export default React.forwardRef(Calendar);

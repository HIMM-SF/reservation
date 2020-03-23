import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationContext } from "../../../context/reservation.context";

const Root = styled.div`
  position: absolute;
  top: 0;
`;

const RootWrapper = styled.div`
  display: flex;
  position: absolute;
  transform: translateX(-${(props) => (((props.index) * 315))}px);
  transition: transform 200ms linear;
`;

const Slider = ({ children }) => {
  const { month: { info: [index] } } = useContext(ReservationContext);

  return (
    <Root>
      <RootWrapper index={index}>
        { children }
      </RootWrapper>
    </Root>
  );
};
export default Slider;

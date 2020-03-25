import React from "react";
import styled from "styled-components";

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

const Slider = ({ children, index }) => (
  <Root>
    <RootWrapper className="slider" index={index}>
      { children }
    </RootWrapper>
  </Root>
);
export default Slider;

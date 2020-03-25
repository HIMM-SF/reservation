import React, { useCallback } from "react";
import styled from "styled-components";
import ArrowRight from "../../../../assets/ArrowRight.svg";

const Root = styled.div`
  width: 100%;
  height: fit-content;
  padding: 22px 0px 37px 0px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  .slider {
    background-color: red;
  }
`;

const Button = styled.button.attrs((props) => ({
  "data-type": props.left ? "left" : "right",
}))`
  width: 39px;
  height: 33px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColorV2};
  cursor: pointer;
  border-radius: 3px;
  padding: 6px 9px;

  svg {
    fill: #757575;
    width: 19px !important;
    height: 19px !important;
    pointer-events: none;
    transform: ${(props) => (props.left ? "rotate(180deg)" : "")}
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  box-sizing: border-box;
`;

const Controller = ({ handleSlider }) => {
  const handleSliderDirection = useCallback((e) => {
    handleSlider(e.target.dataset.type);
  });

  return (
    <Root>
      <InnerContainer>
        <Button left type="button" onClickCapture={handleSliderDirection}><ArrowRight /></Button>
        <Button type="button" onClick={handleSliderDirection}><ArrowRight /></Button>
      </InnerContainer>
    </Root>
  );
};
export default React.memo(Controller);

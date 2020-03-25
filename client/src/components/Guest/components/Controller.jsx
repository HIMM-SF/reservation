import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ReservationActionContext } from "../../../context/reservation.context";
import { addGuest } from "../../../actions";

const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  h5 {
    margin: 0;
    font-weight: bold;
    text-align: center;
    line-height: 2.5;
  }
`;

const Button = styled.button.attrs((props) => ({
  "data-type": props.action || false,
}))`
  display: block;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.checkIn};
  border: 1px solid ${(props) => props.theme.checkIn};
  background-color: white;

  ${(props) => !props.value && css`
    &:nth-child(1) {
      pointer-events: none;
      border: 1px solid #dddddd;
      color: #dddddd;
    }
  `}
  
  span { 
    pointer-events: none;
    ${(props) => {
    if (props.action === "minus") {
      return "font-size: 26px; line-height: .6;";
    }
    return "font-size: 16px;";
  }
}
`;

const Controller = ({ children, type }) => {
  const dispatch = useContext(ReservationActionContext);

  return (
    <Root>
      <Button value={children} action="minus" type="button" onClick={addGuest(dispatch, type)}><span>-</span></Button>
      <h5>{ children }</h5>
      <Button value={children} action="add" type="button" onClick={addGuest(dispatch, type)}><span>+</span></Button>
    </Root>
  );
};

export default Controller;

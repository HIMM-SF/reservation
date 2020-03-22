import React, { useContext } from "react";
import styled from "styled-components";
import Entry from "./components/Entry";
import { ReservationContext } from "../../context/reservation.context";


const Root = styled.div`
  position: absolute;
  top: 230px;
  width: 326px;
  height: 286px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColorV2};
  border-top: 1px solid ${(props) => props.theme.checkIn};
  border-radius: 3px;
  box-shadow: 1px 3px 5px 1px #dadada;
  padding: 0 16px 16px 16px;
  box-sizing: border-box;
`;

const Close = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  align-items: center;

  button {
    border: none;
    background-color: white;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.checkIn};
    cursor: pointer;
    outline: none;
    padding-right: 0;
  }
`;

const Guest = (props, ref) => {
  const { reservation: { guest: { adults, children, infants } } } = useContext(ReservationContext);

  return (
    <Root ref={ref}>
      <Entry title="Adults" value={adults} />
      <Entry title="Children" text="Ages 2-12" value={children} />
      <Entry title="Infants" text="Under 2" value={infants} />
      <Entry fullWidth text="6 guests maximum. Infants don't count toward the number of guests." />
      <Close><button type="button">Close</button></Close>
    </Root>
  );
};

export default React.forwardRef(Guest);

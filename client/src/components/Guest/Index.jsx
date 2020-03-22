import React from "react";
import styled from "styled-components";
import Entry from "./components/Entry";

const Root = styled.div`
  position: absolute;
  top: 230px;
  width: 326px;
  height: 286px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColorV2};
  border-radius: 3px;
  box-shadow: 1px 3px 5px 1px #dadada;
  padding: 0 16px 16px 16px;
  box-sizing: border-box;
`;

const Guest = (props, ref) => (
  <Root ref={ref}>
    <Entry title="Adults" />
    <Entry title="Children" text="Ages 2-12" />
    <Entry title="Under 2" text="Under 2" />
    <Entry fullWidth text="6 guests maximum. Infants don't count toward the number of guests." />
  </Root>
);

export default React.forwardRef(Guest);

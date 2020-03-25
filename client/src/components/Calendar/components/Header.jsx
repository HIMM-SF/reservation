import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  top: -20px;
  z-index: 2;
`;

const OrderedList = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  width: 100%;
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => props.theme.strongFont}
`;

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Header = () => (
  <Root>
    <OrderedList>
      {days.map((day) => <ListItem key={day}>{day}</ListItem>)}
    </OrderedList>
  </Root>
);

export default React.memo(Header);

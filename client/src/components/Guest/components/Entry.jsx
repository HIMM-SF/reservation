import React from "react";
import styled from "styled-components";
import Controller from "./Controller";

const Root = styled.div`
  display: flex;
  align-items: center;
  height: 57.2px;
  width: 100%;
`;

const Text = styled.div`
  flex: 65px;

  h4 {
    margin: 0;
    color: ${(props) => props.theme.strongFont};
  }

  h5 {
    margin: 0;
    font-weight: initial;
    color: ${(props) => props.theme.strongFont};
  }
`;

const Entry = ({
  title, text, fullWidth, value,
}) => (
  <Root>
    <Text>
      <h4>{title}</h4>
      <h5>{text}</h5>
    </Text>

    {fullWidth ? "" : (
      <Controller type={title.toLowerCase()}>{ value }</Controller>
    ) }
  </Root>
);
export default React.memo(Entry);

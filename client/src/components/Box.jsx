import styled, { css } from "styled-components";

const Box = styled.div`
  margin: 16px 0 24px 0;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};

  ${(props) => props.border && props.center && css`
    align-items: center; 
    border: solid 1px #EBEBEB;
    margin: 0;
  `}

  ${(props) => props.svg && css`
    margin: 0;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: flex-end;
    padding-right: ${props.paddingRight || 0}px;

    svg {
      vertical-align: middle;
      fill: ${props.theme.strongFont};
    }
  `}
`;

export default Box;

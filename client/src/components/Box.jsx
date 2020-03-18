import styled, { css } from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  box-sizing: border-box;
  width: ${(props) => (props.width ? props.width : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: ${(props) => (props.height ? props.height : "")};

  ${(props) => props.pointer && css`
    cursor: pointer; 
  `}

  ${(props) => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${(props) => props.lineHeight && css`
    line-height: ${props.lineHeight};
  `}

  ${(props) => props.border && css`
    border: solid 1px ${props.theme.borderColorV2};
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

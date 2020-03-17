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
    border: solid 1px #EBEBEB;
    margin: 0;
  `}

  ${(props) => props.container && css`
    background-color: white;
    position: absolute;
    top: 170px;
    z-index: 99;
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

  & .ito {
    svg {
      //20x10
      fill: transparent;
      position: absolute;
      top: -10.5px;
      left: 20px;
      path:nth-child(1) {
        stroke: white;
      }

      path:nth-child(2) {
        stroke: #EBEBEB;
      }
    }
  }
`;

export default Box;

import styled, { css } from "styled-components";

const Input = styled.input`
  border-style: none;
  font-size: 17px;
  padding-left: 8px;
  width: ${(props) => (props.width ? props.width : 130)}px;
  border-radius: 3px;
  caret-color: transparent;
  color: ${(props) => props.theme.lightFont};
  height: fit-content;

  &.active {
    background-color:${(props) => props.theme.inputBackground};
  }

  &:focus {
    outline: none;
  }

  ${(props) => props.pointer && css`
    cursor: pointer;
  `}
`;

export default Input;

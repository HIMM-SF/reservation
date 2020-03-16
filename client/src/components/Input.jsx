import styled from "styled-components";

const Input = styled.input`
  border-style: none;
  font-size: 17px;
  padding-left: 8px;
  width: ${(props) => (props.width ? props.width : 130)}px;
  border-radius: 3px;
  caret-color: transparent;
  color: ${(props) => props.theme.lightFont};
  height: fit-content;

  &:focus {
    outline: none;
    border-color: #99ede6;
    background-color: #99ede6;
  }
`;

export default Input;

import styled from "styled-components";

const Button = styled.button`
  height: 46px;
  color: white;
  font-weight: 600;
  margin-top: 24px;
  cursor: pointer;
  background-color: ${(props) => props.theme.btnBackgroundColor2};
  border: 1px solid ${(props) => props.theme.btnBackgroundColor2};
  border-radius: 5px;

  ${(props) => (props.block ? "display: block; width: 100%" : "")}
`;

export default Button;

import styled from "styled-components";

const Paragraph = styled.p`
  margin-top: 8;

  ${(props) => {
    switch (props.variant) {
      case "h5":
        return "font-size: 12px;";
      default:
        return "font-size: 16px;";
    }
  }}

  ${(props) => (props.block ? "display: block; width: 100%;" : "")}
  ${(props) => (props.center ? "text-align: center;" : "")}
`;

export default Paragraph;

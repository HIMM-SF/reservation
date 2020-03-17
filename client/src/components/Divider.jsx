import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: solid 1px ${(props) => props.theme.borderColorV2};
`;

export default Divider;

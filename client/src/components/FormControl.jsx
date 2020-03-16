import React from "react";
import styled from "styled-components";
import olbBox from "./Box";

const Box = styled(olbBox)`
  span {
    font-size: 13px;
  }
`;

const FormControl = ({ children, label }) => (
  <Box column margin="0 0 8px 0">
    <span> { label } </span>
    { children }
  </Box>
);

export default FormControl;

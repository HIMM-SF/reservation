import React from "react";
import Box from "./Box";

const Calender = (props, ref) => (
  <Box className="calendar-box" ref={ref} border>
    <Box>
      <svg role="presentation" focusable="false">
        <path d="M0,10 20,10 10,0z" />
        <path d="M0,10 10,0 20,10" />
      </svg>
    </Box>
  </Box>
);

export default React.forwardRef(Calender);

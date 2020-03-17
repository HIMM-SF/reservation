import React from "react";
import Box from "./Box";

const Calender = (props, ref) => (
  <Box ref={ref} container width="340px" height="330px" border>

    <div className="ito">
      <svg role="presentation" focusable="false">
        <path d="M0,10 20,10 10,0z" />
        <path d="M0,10 10,0 20,10" />
      </svg>
    </div>

  </Box>
);

export default React.forwardRef(Calender);

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import * as theme from "./styled-components/theme";
import App from "./components/App";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("reservation"),
);

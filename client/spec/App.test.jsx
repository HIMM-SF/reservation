/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import App from "../src/components/App";

describe("Unit Tests for App", () => {
  test("should render the app component on the screen", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});

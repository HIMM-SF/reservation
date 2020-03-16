/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import ReservationForm from "../src/components/ReservationForm";

describe("Unit Tests for ReservationForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReservationForm />);
  });

  test("should render the ReservationHeader component on the screen", () => {
    expect(wrapper.find("ReservationHeader").length).toEqual(1);
  });

  test("should render a text 'You won't be charge yet' ", () => {
    expect(wrapper.text().includes("You won't be charged yet")).toBe(true);
  });
});

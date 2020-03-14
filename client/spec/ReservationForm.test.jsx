/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import ReservationForm from "../src/components/ReservationForm";

describe("Unit Tests for ReservationForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReservationForm />);
  });

  test("should render a text 'per night' ", () => {
    expect(wrapper.contains("per night")).toBe(true);
  });

  test("should render a text 'reviews' ", () => {
    expect(wrapper.text().includes("reviews")).toBe(true);
  });

  test("should render a text 'Dates' ", () => {
    expect(wrapper.text().includes("Dates")).toBe(true);
  });

  test("should render a text 'Guests' ", () => {
    expect(wrapper.text().includes("Guests")).toBe(true);
  });
});

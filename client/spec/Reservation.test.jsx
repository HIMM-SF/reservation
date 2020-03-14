/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import Reservation from "../src/components/Reservation";
import ReservationForm from "../src/components/ReservationForm";

describe("Unit Tests for Reservation", () => {
  test("should render the Reservation component on the screen", () => {
    const wrapper = shallow(<Reservation />);
    expect(wrapper.contains(<ReservationForm />)).toBe(true);
  });
});

/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import ReservationHeader from "../src/components/ReservationHeader";

describe("Unit Tests for ReservationHeader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReservationHeader price={350} reviews={1000} />);
  });

  test("should render a text 'per night' ", () => {
    expect(wrapper.contains("per night")).toBe(true);
  });

  test("should render a text 'reviews' ", () => {
    expect(wrapper.text().includes("reviews")).toBe(true);
  });

  test("should render a text '$350 per night'", () => {
    expect(wrapper.find(".price").text().includes("350")).toBe(true);
  });

  test("should render a text '1000'", () => {
    expect(wrapper.find(".stats").text().includes("1000")).toBe(true);
  });
});

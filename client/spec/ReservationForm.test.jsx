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

  test("should render a text 'You won't be charged yet'", () => {
    expect(wrapper.text().includes("You won't be charged yet")).toBe(true);
  });

  test("should render a input field with placeholder 'Check-in'", () => {
    expect(wrapper.find("input").at(0).props().placeholder).toEqual("Check-in");
  });

  test("should render a input field with placeholder 'Checkout'", () => {
    expect(wrapper.find("input").at(1).props().placeholder).toEqual("Checkout");
  });

  test("should render a guest input field with placeholder '1 guest'", () => {
    expect(wrapper.find("input").at(2).props().placeholder).toEqual("1 guest");
  });

  test("should render a submit button", () => {
    expect(wrapper.find("input[type='button']")).toExist();
  });

  test("should render a submit button with the text 'Reserve'", () => {
    expect(wrapper.find("input[type='button']").at(0).props().value).toEqual("Reserve");
  });
});

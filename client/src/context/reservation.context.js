import React, { createContext } from "react";
import useReservationState from "../hooks/useReservationState";
import { getCurrentMonth } from "../util/date-helper";

const initialValue = {
  date: getCurrentMonth(),
  checkIn: "Check-in",
  checkOut: "Checkout",
};

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const reservation = useReservationState(initialValue);

  return (
    <ReservationContext.Provider value={reservation}>
      {children}
    </ReservationContext.Provider>
  );
};

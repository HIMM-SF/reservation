import React, { createContext } from "react";
import useReservationState from "../hooks/useReservationState";
import { getCurrentMonth, getCurrentYear } from "../util/date-helper";

const initialValue = {
  room: undefined,
  month: getCurrentMonth(),
  year: getCurrentYear(),
  checkIn: undefined,
  checkOut: undefined,
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

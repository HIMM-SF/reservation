import React, { createContext } from "react";
import useReservationState from "../hooks/useReservationState";
import { getCurrentMonth } from "../util/date-helper";

const initialValue = {
  room: undefined,
  date: getCurrentMonth(),
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

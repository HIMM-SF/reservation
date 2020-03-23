import React, { createContext, useReducer } from "react";
import { getCurrentMonth, getCurrentYear } from "../util/date-helper";
import reservationReducer from "../reducers/reservation.reducer";

const initialValue = {
  room: undefined,
  month: getCurrentMonth(),
  year: getCurrentYear(),
  checkIn: undefined,
  checkOut: undefined,
  guest: {
    adults: 1,
    children: 0,
    infants: 0,
  },
};

export const ReservationContext = createContext();
export const ReservationActionContext = createContext();

export function ReservationProvider2({ children }) {
  const [reservation, dispatch] = useReducer(reservationReducer, initialValue);
  return (
    <ReservationContext.Provider value={reservation}>
      <ReservationActionContext.Provider value={dispatch}>
        {children}
      </ReservationActionContext.Provider>
    </ReservationContext.Provider>
  );
}

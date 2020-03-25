import React, { createContext, useReducer } from "react";
import { getCurrentYear } from "../util/date-helper";
import reservationReducer from "../reducers/reservation.reducer";

const initialValue = {
  checkIn: undefined,
  checkOut: undefined,
  room: undefined,
  months: getCurrentYear(),
  guest: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  start: {
    type: undefined,
    day: undefined,
    month: undefined,
    year: undefined,
  },
  end: {
    type: undefined,
    day: undefined,
    month: undefined,
    year: undefined,
  },
};

export const ReservationContext = createContext();
export const ReservationActionContext = createContext();

export function ReservationProvider({ children }) {
  const [reservation, dispatch] = useReducer(reservationReducer, initialValue);

  return (
    <ReservationContext.Provider value={reservation}>
      <ReservationActionContext.Provider value={dispatch}>
        {children}
      </ReservationActionContext.Provider>
    </ReservationContext.Provider>
  );
}

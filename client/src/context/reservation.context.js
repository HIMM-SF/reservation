import React, { createContext, useReducer } from "react";
import { getCurrentYear } from "../util/date-helper";
import reservationReducer from "../reducers/reservation.reducer";
import dateReducer from "../reducers/date.reducer";

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
};

const initialDate = {
  checkIn: undefined,
  checkOut: undefined,
};

export const ReservationContext = createContext();
export const DateContext = createContext();
export const ReservationActionContext = createContext();

export function ReservationProvider({ children }) {
  const [reservation, dispatch] = useReducer(reservationReducer, initialValue);
  const date = useReducer(dateReducer, initialDate);

  return (
    <ReservationContext.Provider value={reservation}>
      <DateContext.Provider value={date}>
        <ReservationActionContext.Provider value={dispatch}>
          {children}
        </ReservationActionContext.Provider>
      </DateContext.Provider>
    </ReservationContext.Provider>
  );
}

import { useState } from "react";
import { getNextMonth, getPreviousMonth } from "../util/date-helper";

export default (initialValue) => {
  const [reservation, setReservation] = useState(initialValue);

  return {
    reservation,
    nextMonth: () => {
      const { date: { month: [month,, year] } } = reservation;
      setReservation({ ...reservation, date: getNextMonth(year, month) });
    },

    prevMonth: () => {
      const { date: { month: [month,, year] } } = reservation;
      setReservation({ ...reservation, date: getPreviousMonth(year, month) });
    },

    addCheckIn: (date) => {
      setReservation({
        ...reservation,
        checkIn: date,
      });
    },

    addCheckOut: (date) => {
      setReservation({
        ...reservation,
        checkOut: date,
      });
    },
  };
};

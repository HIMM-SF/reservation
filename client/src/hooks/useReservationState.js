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

    addCheckInDate: (day) => {
      const { date: { month: [month,, year] } } = reservation;
      setReservation({
        ...reservation,
        checkIn: `${month + 1}/${day}/${year}`,
      });
    },

    addCheckOutDate: (day) => {
      setReservation({
        ...reservation,
        checkOut: day,
      });
    },
  };
};

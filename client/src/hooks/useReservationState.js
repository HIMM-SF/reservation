import { useState } from "react";
import { getNextMonth, getPreviousMonth } from "../util/date-helper";

export default (initialValue) => {
  const [reservation, setReservation] = useState(initialValue);

  return {
    reservation,
    nextMonth: () => {
      const { date: { month: [month,, year] } } = reservation;
      setReservation({
        ...reservation,
        action: "next",
        date: getNextMonth(year, month),
      });
    },

    prevMonth: () => {
      const { date: { month: [month,, year] } } = reservation;
      setReservation({
        ...reservation,
        action: "prev",
        date: getPreviousMonth(year, month),

      });
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

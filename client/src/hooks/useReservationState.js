import { useState } from "react";
import { getNextMonth, getPreviousMonth } from "../util/date-helper";

export default (initialValue) => {
  const [reservation, setReservation] = useState(initialValue);

  return {
    reservation,
    setRoom: (room) => {
      setReservation({
        ...reservation,
        room,
      });
    },

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

    addReservation: (type, day) => {
      const { date: { month: [month,, year] } } = reservation;
      setReservation({
        ...reservation,
        [type]: `${month + 1}/${day}/${year}`,
      });
    },

    resetReservation: () => {
      setReservation({
        ...reservation,
        checkIn: undefined,
        checkOut: undefined,
      });
    },
  };
};

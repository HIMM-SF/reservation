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

    addReservation: (e) => {
      const { date: { month: [month,, year] }, checkIn } = reservation;
      const type = checkIn ? "checkOut" : "checkIn";
      const day = e.target.innerHTML;

      setReservation({
        ...reservation,
        [type]: `${month + 1}/${day}/${year}`,
        start: day,
      });
    },

    resetReservation: () => {
      setReservation({
        ...reservation,
        checkIn: undefined,
        checkOut: undefined,
      });
    },

    animateOptionStyle: (e) => {
      setReservation({
        ...reservation,
        end: e.target.innerHTML,
      });
    },
  };
};

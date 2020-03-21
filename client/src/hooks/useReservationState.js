import React, { useState } from "react";
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

    openDaysBuilder: (Component) => {
      const { date, room: { booked_dates: bookedDays } } = reservation;
      const { days, month: [, cMonth] } = date;
      let i = 0; // match index value to the each day and increment when booked day is equal to day

      return days.map((day) => {
        const keyDay = day[1];
        // Marked all day as booked for previous month + years
        if (!bookedDays[cMonth].length || bookedDays[cMonth][i] === keyDay) {
          i += 1;
          return <Component className="booked" key={keyDay} day={keyDay} startCol={day[0]} />;
        }

        return <Component key={keyDay} day={keyDay} startCol={day[0]} />;
      });
    },

    checkOutDaysBuilder: (Component) => {
      const { date, checkIn, room: { booked_dates: bookedDays } } = reservation;
      const checkinDay = Number(checkIn.split("/")[1]);
      const { days, month: [, cMonth] } = date;
      let checkOutDay;

      // Retreive the checkout day
      for (let i = 0; i < bookedDays[cMonth].length; i += 1) {
        if (bookedDays[cMonth][i] > checkinDay) {
          checkOutDay = bookedDays[cMonth][i];
          break;
        }
      }

      return days.map((day) => {
        const keyDay = day[1];

        if (keyDay === checkinDay) {
          return <Component className="check-in" key={keyDay} day={keyDay} startCol={day[0]} />;
        }

        if (checkOutDay >= keyDay && keyDay > checkinDay) {
          return <Component className="options" key={keyDay} day={keyDay} startCol={day[0]} />;
        }

        return <Component className="booked" key={keyDay} day={keyDay} startCol={day[0]} />;
      });
    },
  };
};

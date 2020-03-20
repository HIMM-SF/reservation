import React from "react";

const BookedDay = ({ day }) => React.cloneElement(day, { booked: true });

export default (days, bookedDays, Component) => {
  let i = 0; // match index value to the each day and increment when booked day is equal to day

  return days.map((day) => {
    const keyDay = day[1];

    // Predefined a Day component
    const Day = <Component key={keyDay} day={keyDay} startCol={day[0]} />;

    // Marked all day as booked for previous month + years
    if (!bookedDays.length || bookedDays[i] === keyDay) {
      i += 1;
      return <BookedDay key={keyDay} day={Day} />;
    }

    return Day;
  });
};

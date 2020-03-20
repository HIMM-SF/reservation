import React from "react";

export const checkInDaysBuilder = (days, bookedDays, Component) => {
  let i = 0; // match index value to the each day and increment when booked day is equal to day

  return days.map((day) => {
    const keyDay = day[1];
    // Marked all day as booked for previous month + years
    if (!bookedDays.length || bookedDays[i] === keyDay) {
      i += 1;
      return <Component className="booked" key={keyDay} day={keyDay} startCol={day[0]} />;
    }

    return <Component key={keyDay} day={keyDay} startCol={day[0]} />;
  });
};

export const checkOutDaysBuilder = (days, bookedDays, Component, checkin) => {
  const checkinDay = Number(checkin.split("/")[1]);
  let checkOutDay;

  // Retreive the checkout day
  for (let i = 0; i < bookedDays.length; i += 1) {
    if (bookedDays[i] > checkinDay) {
      checkOutDay = bookedDays[i];
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
};

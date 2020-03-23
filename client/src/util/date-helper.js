import React from "react";

// Refractor getNextMonth and getPreviousMonth
const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const getDaysInAMonth = (month, year) => {
  const days = [];

  // push all days in 31 days
  for (let i = 1; i < 32; i += 1) {
    days.push(new Date(year, month, i));
  }

  const daysInAMonth = days.filter((day) => day.getMonth() === month);

  return daysInAMonth.map((day) => {
    const temp = day.toDateString().split(" ");
    const actualDayNameInInt = day.getDay() + 1;

    return [actualDayNameInInt, Number(temp[2])];
  });
};

export const getNextMonth = (year, month) => {
  const newMonth = new Date(year, month + 1);

  return {
    info: [newMonth.getMonth(), months[newMonth.getMonth()], newMonth.getFullYear()],
    days: getDaysInAMonth(newMonth.getMonth(), newMonth.getFullYear()),
  };
};

export const getPreviousMonth = (year, month) => {
  const newMonth = new Date(year, month - 1);

  return {
    info: [newMonth.getMonth(), months[newMonth.getMonth()], newMonth.getFullYear()],
    days: getDaysInAMonth(newMonth.getMonth(), newMonth.getFullYear()),
  };
};

export const getCurrentYear = () => {
  const currentYear = [];

  for (let i = 0; i < 12; i += 1) {
    const date = new Date(2020, i);

    currentYear.push({
      info: [date.getMonth(), months[date.getMonth()], date.getFullYear()],
      days: getDaysInAMonth(date.getMonth(), date.getFullYear()),
    });
  }

  return currentYear;
};

export const getCurrentMonth = () => {
  const currentDate = new Date();

  return {
    info: [currentDate.getMonth(), months[currentDate.getMonth()], currentDate.getFullYear()],
    days: getDaysInAMonth(currentDate.getMonth(), currentDate.getFullYear()),
  };
};

export const openDaysBuilder = (month, bookedDays, Component) => {
  const { days, info: [, cMonth] } = month;
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
};

export const checkOutDaysBuilder = (checkIn, month, bookedDays, Component) => {
  const checkinDay = Number(checkIn.split("/")[1]);
  const { days, info: [, cMonth] } = month;
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
};

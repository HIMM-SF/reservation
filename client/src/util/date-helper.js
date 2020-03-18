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
  9: "Octorber",
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
    month: [newMonth.getMonth(), months[newMonth.getMonth()], newMonth.getFullYear()],
    days: getDaysInAMonth(newMonth.getMonth(), newMonth.getFullYear()),
  };
};

export const getPreviousMonth = (year, month) => {
  const newMonth = new Date(year, month - 1);

  return {
    month: [newMonth.getMonth(), months[newMonth.getMonth()], newMonth.getFullYear()],
    days: getDaysInAMonth(newMonth.getMonth(), newMonth.getFullYear()),
  };
};

export const getCurrentMonth = () => {
  const currentDate = new Date();
  return {
    month: [currentDate.getMonth(), months[currentDate.getMonth()], currentDate.getFullYear()],
    days: getDaysInAMonth(currentDate.getMonth(), currentDate.getFullYear()),
  };
};

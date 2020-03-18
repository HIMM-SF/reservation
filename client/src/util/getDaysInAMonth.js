const getDaysInMonth = (year, month) => {
  const days = [];

  // push all days in 31 days
  for (let i = 1; i < 32; i += 1) {
    days.push(new Date(year, month, i));
  }

  const daysInAMonth = days.filter((day) => day.getMonth() === month);

  return daysInAMonth.map((day) => {
    const temp = day.toDateString().split(" ");

    return [temp[0].slice(0, 2), Number(temp[2])];
  });
};

export default getDaysInMonth;

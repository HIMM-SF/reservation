import {
  HOVER, SET_ROOM, ADD, ADD_GUEST, RESET,
} from "../actions/types";

const reducer = (state, action) => {
  const { checkIn, months, start } = state;
  const type = checkIn ? "checkOut" : "checkIn";

  switch (action.type) {
    case ADD:
      return {
        ...state,
        [type]: action.date,
        start: action.start,
      };

    case ADD_GUEST:
      return {
        ...state,
        guest: {
          ...state.guest,
          [action.guest.key]: action.guest.operation === "add" ? state.guest[action.guest.key] + 1 : state.guest[action.guest.key] - 1,
        },
      };

    case HOVER:
      if (!checkIn) return state;

      return {
        ...state,
        end: action.end,
        months: months.map((month) => {
          const { days, info: [mInt] } = month;

          if (mInt === action.end.month) {
            days.map((day) => {
              if (start.day < day[1] && action.end.day >= day[1] && !day[2]) {
                day.push(true);
              }

              if (day[2] && day[1] > action.end.day) {
                day.pop();
              }

              return day;
            });
          }

          return month;
        }),
      };

    case SET_ROOM:
      return {
        ...state,
        room: action.room,
      };

    case RESET:
      return {
        ...state,
        checkIn: undefined,
        checkOut: undefined,
      };

    default:
      return state;
  }
};
export default reducer;

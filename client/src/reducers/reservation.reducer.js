import { getNextMonth, getPreviousMonth } from "../util/date-helper";
import {
  ADD, NEXT, PREV, HOVER, RESET, SET_ROOM,
} from "../actions/types";

const reducer = (state, action) => {
  const { month: { info: [month,, year] }, checkIn } = state;
  const type = checkIn ? "checkOut" : "checkIn";

  switch (action.type) {
    case ADD:
      return {
        ...state,
        [type]: `${month + 1}/${action.day}/${year}`,
        start: action.day,
      };

    case SET_ROOM:
      return {
        ...state,
        room: action.room,
      };

    case NEXT:
      return {
        ...state,
        month: getNextMonth(year, month),
      };

    case PREV:
      return {
        ...state,
        month: getPreviousMonth(year, month),
      };

    case HOVER:
      return {
        ...state,
        end: action.day,
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

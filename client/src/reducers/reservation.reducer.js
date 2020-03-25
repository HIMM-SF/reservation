import {
  HOVER, SET_ROOM, ADD, ADD_GUEST, RESET,
} from "../actions/types";

const reducer = (state, action) => {
  const { checkIn } = state;
  const type = checkIn ? "checkOut" : "checkIn";

  switch (action.type) {
    case ADD:
      return {
        ...state,
        [type]: action.date,
        [action.day.type]: action.day,
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
        start: {
          type: undefined,
          day: undefined,
          month: undefined,
          year: undefined,
        },
        end: {
          type: undefined,
          day: undefined,
          month: undefined,
          year: undefined,
        },
      };

    default:
      return state;
  }
};
export default reducer;

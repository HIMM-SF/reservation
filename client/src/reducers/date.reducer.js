import { ADD, RESET, HOVER } from "../actions/types";

const reducer = (state, action) => {
  const { checkIn } = state;
  const type = checkIn ? "checkOut" : "checkIn";

  switch (action.type) {
    case ADD:
      return {
        ...state,
        [type]: action.date,
      };

    case HOVER:
      if (!checkIn) return state;

      return {
        ...state,
        end: action.end,
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

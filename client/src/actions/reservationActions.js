import {
  SET_ROOM, HOVER, ADD, ADD_GUEST, RESET, RESET_CHECKOUT,
} from "./types";

export const onHover = (dispatch) => (e) => {
  const [month, day, year] = e.target.dataset.date.split("/");

  return dispatch({
    type: HOVER,
    end: {
      day: Number(day),
      month: Number(month) - 1,
      year: Number(year),
    },
  });
};

export const setRoom = (dispatch) => (room) => dispatch({
  type: SET_ROOM,
  room,
});

export const addReservation = (dispatch) => (e) => {
  const [month, day, year] = e.target.dataset.date.split("/");
  const { type } = e.target.dataset;

  return dispatch({
    type: ADD,
    date: e.target.dataset.date,
    day: {
      type,
      day: Number(day),
      month: Number(month) - 1,
      year: Number(year),
    },
  });
};

export const addGuest = (dispatch, type) => (e) => dispatch({
  type: ADD_GUEST,
  guest: {
    key: type,
    operation: e.target.dataset.type,
  },
});

export const resetDates = (dispatch) => () => dispatch({
  type: RESET,
});

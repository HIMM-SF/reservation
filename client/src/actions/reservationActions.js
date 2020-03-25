import { SET_ROOM, HOVER, ADD } from "./types";

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

  return dispatch({
    type: ADD,
    date: e.target.dataset.date,
    start: {
      day: Number(day),
      month: Number(month) - 1,
      year: Number(year),
    },
  });
};

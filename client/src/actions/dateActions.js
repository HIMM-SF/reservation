import { ADD } from "./types";

export const addReservation = (dispatch) => (e) => dispatch({
  type: ADD,
  date: e.target.dataset.date,
  start: e.target.innerHTML,
});

export const onHover = (dispatch) => () => dispatch({
});

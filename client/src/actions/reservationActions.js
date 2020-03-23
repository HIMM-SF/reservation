import {
  ADD, HOVER, NEXT, PREV,
} from "./types";

export const addReservation = (dispatch) => (e) => dispatch({
  type: ADD,
  day: e.target.innerHTML,
});

export const nextMonth = (dispatch) => () => dispatch({
  type: NEXT,
});

export const prevMonth = (dispatch) => () => dispatch({
  type: PREV,
});

export const onHover = (dispatch) => (e) => dispatch({
  type: HOVER,
  day: e.target.innerHTML,
});

export const setRoom = (dispatch) => (room) => dispatch({
  type: "SET_ROOM",
  room,
});

import React, { useEffect, useRef, useContext } from "react";
import axios from "axios";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Box from "./Box";
import FormControl from "./FormControl";
import Divider from "./Divider";
import Input from "./Input";
import ReservationHeader from "./ReservationHeader";
import Calendar from "./Calendar";
import { ReservationContext } from "../context/reservation.context";

// hooks helper
import toggleState from "../hooks/useToggle";

const ReservationForm = () => {
  const calendarRef = useRef(null);
  const checkinInputRef = useRef(null);
  const [openCheckIn, setOpenCheckIn] = toggleState(calendarRef, checkinInputRef, false);
  const { reservation: { checkIn, checkOut, room }, setRoom } = useContext(ReservationContext);

  const handleCheckIn = () => {
    if (!openCheckIn) {
      setOpenCheckIn(true);
    }
  };

  const fetchAllRooms = () => {
    axios
      .get("http://localhost:3000/api/rooms")
      .then(({ data: rooms }) => {
        const rand = Math.floor(Math.random() * 100);
        setRoom(rooms[rand]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllRooms();
  }, []);

  return (
    <Box column margin="16px 0 24px 0;">
      <ReservationHeader price={room ? Math.floor(room.per_night) : ""} reviews={room ? room.reviews.length * 25 : ""} />
      <Divider />

      <form>
        <FormControl label="Dates">
          <Box alignItems="center" border>
            <Box alignItems="center" height="40px" width="150px" padding="0 0 0 8px" onClick={handleCheckIn}>
              <Input ref={checkinInputRef} className={`${(openCheckIn && !checkIn) ? "active" : ""}`} type="text" placeholder={checkIn || "Check-in"} />
            </Box>
            <Box svg>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </Box>
            <Box alignItems="center" height="40px" width="150px" padding="0 0 0 8px">
              <Input className={`${(openCheckIn && checkIn) ? "active" : ""}`} type="text" placeholder={checkOut || "Check-out"} />
            </Box>
          </Box>

          { openCheckIn ? <Calendar ref={calendarRef} /> : ""}
        </FormControl>

        <FormControl label="Guests">
          <Box alignItems="center" border pointer>
            <Box alignItems="center" height="40px" padding="0 0 0 8px">
              <Input type="text" placeholder="1 guest" width={80} />
            </Box>

            <Box svg paddingRight={16}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </Box>
          </Box>
        </FormControl>

        <Button block>Reserve</Button>
        <Paragraph block center variant="h5">You won&apos;t be charged yet</Paragraph>
      </form>

    </Box>
  );
};

export default ReservationForm;

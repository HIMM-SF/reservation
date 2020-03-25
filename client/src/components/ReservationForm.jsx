import React, {
  useEffect, useRef, useContext,
} from "react";
import axios from "axios";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Box from "./Box";
import FormControl from "./FormControl";
import Divider from "./Divider";
import Input from "./Input";
import ReservationHeader from "./ReservationHeader";
import Calendar from "./Calendar";
import Summary from "./Summary";
import GuestForm from "./Guest";
import ArrowDown from "../../assets/ArrowDown.svg";
import { setRoom } from "../actions";
import { ReservationActionContext, ReservationContext } from "../context/reservation.context";

// hooks helper
import toggleState from "../hooks/useToggle";

const ReservationForm = () => {
  const calendarRef = useRef(null);
  const checkinInputRef = useRef(null);
  const guestFormRef = useRef(null);
  const guestFormInputRef = useRef(null);
  const [openCheckIn, setOpenCheckIn] = toggleState(calendarRef, checkinInputRef, false);
  const [openGuestForm, setOpenGuestForm] = toggleState(guestFormRef, guestFormInputRef, false);

  const {
    room, months, checkOut, checkIn, guest: { adults, children, infants },
  } = useContext(ReservationContext);
  const dispatch = useContext(ReservationActionContext);

  const handleCheckIn = () => {
    if (!openCheckIn) {
      setOpenCheckIn(true);
    }
  };

  const handleGuestForm = () => {
    if (!openGuestForm) {
      setOpenGuestForm(true);
    }
  };

  const fetchAllRooms = () => {
    axios
      .get("http://localhost:3000/api/rooms")
      .then(({ data: rooms }) => {
        const rand = Math.floor(Math.random() * 100);
        setRoom(dispatch)(rooms[rand]);
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
              <Input className={`${(openCheckIn && checkIn && !checkOut) ? "active" : ""}`} type="text" placeholder={checkOut || "Check-out"} />
            </Box>
          </Box>

          { (openCheckIn && !checkOut) ? <Calendar months={months} bookedDates={room.booked_dates} checkIn={checkIn} ref={calendarRef} /> : ""}
        </FormControl>

        <FormControl label="Guests">
          <Box ref={guestFormInputRef} alignItems="center" border pointer onClick={handleGuestForm}>
            <Box alignItems="center" height="40px" padding="0 0 0 8px">
              <Input
                pointer
                type="text"
                placeholder={`${adults} guests${children ? `,${children} children` : ""}${infants ? `,${infants} infants` : ""}`}
                width={220}
              />
            </Box>

            <Box svg paddingRight={16}>
              <ArrowDown width={16} height={16} style={{ transform: openGuestForm ? "rotate(180deg)" : "" }} />
            </Box>
          </Box>
          { openGuestForm ? <GuestForm ref={guestFormRef} closeForm={setOpenGuestForm} /> : ""}
        </FormControl>

        {(checkIn && checkOut) ? <Summary /> : ""}

        <Button type="button" block>Reserve</Button>
        <Paragraph block center variant="h5">You won&apos;t be charged yet</Paragraph>
      </form>

    </Box>
  );
};

export default React.memo(ReservationForm);

import React from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Box from "./Box";
import {
  Price, Stats, Divider, Input, FormControl,
} from "./Elements";

const ReservationForm = () => (
  <Box column>
    <Price price="37" />
    <Stats />
    <Divider />

    <form>
      <FormControl name="Dates">
        <Box center border>
          <Input type="text" placeholder="Check-in" />
          <Box svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </Box>
          <Input type="text" placeholder="Checkout" />
        </Box>
      </FormControl>

      <FormControl name="Guests">
        <Box center border>
          <Input type="text" placeholder="1 guest" width={80} />

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

export default ReservationForm;

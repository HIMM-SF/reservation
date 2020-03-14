import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin: 16px 0 24px 0;
  display: flex;
  flex-direction: column;
`;

const SubHeadPrice = styled.div`
 span:first-child {
    font-size: 22px;
  }
`;

const SubHeadReviews = styled.div``;

const DivDivider = styled.div`
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: solid 1px #EBEBEB;
`;

const FormInput = styled.div``;
const Form = styled.form`
  ${FormInput}:nth-child(1) {
    color: red;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  ${FormInput}:nth-child(2) {
    color: blue;
    margin-bottom: 16px;
  }
`;

const Input = styled.div`
  border: solid 1px #EBEBEB;

  div:first-child {
    position: relative;
    padding: 8px;
    width: 150px;
    height: 40px;

  }

  input {
    border-style: none;
    font-size: 17px;
    &:focus{
      outline: none;
    }
  }
`;

const ReservationForm = () => (
  <Root>
    <SubHeadPrice>
      <span>$35</span>
      <span>per night</span>
    </SubHeadPrice>
    <SubHeadReviews>
      <span>4.80</span>
      <span>(334 reviews)</span>
    </SubHeadReviews>
    <DivDivider />

    <Form>
      <FormInput>
        <span>Dates</span>
        <Input>
          <div>
            <input type="text" placeholder="Check-in" />
          </div>

          <div>
            <input type="text" placeholder="Checkout" />
          </div>
        </Input>
      </FormInput>

      <FormInput>
        <span>Guests</span>
        <Input>
          <div>
            <input type="text" placeholder="1 guest" />
          </div>
        </Input>
      </FormInput>

      <input type="button" value="Reserve" />
      <span>You won&apos;t be charged yet</span>
    </Form>
  </Root>
);

export default ReservationForm;

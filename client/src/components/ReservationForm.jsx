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
      </FormInput>

      <FormInput>
        <span>Guests</span>
      </FormInput>
    </Form>
  </Root>
);

export default ReservationForm;

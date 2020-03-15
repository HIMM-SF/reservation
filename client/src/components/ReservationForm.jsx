import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin: 16px 0 24px 0;
  display: flex;
  flex-direction: column;
`;

const SubHeadPrice = styled.div`
  span:nth-child(1) {
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.strongFont}
  }

  span:nth-child(2) {
    font-size: 12px;
    margin-left: 4px;
    color: ${(props) => props.theme.strongFont}
  }
`;

const SubHeadReviews = styled.div`
  line-height: 1;
  span:nth-child(1) {
    svg {
      position: relative;
      top: 2px;
      width: 13px;
      fill: #008489;
    }
  }

  span:nth-child(2) {
    font-size: 12px;
    color: ${(props) => props.theme.strongFont}
  }

  span:nth-child(3) {
    font-size: 12px;
    margin-left: 4px;
    color: ${(props) => props.theme.lightFont}
  }
`;

const DivDivider = styled.div`
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: solid 1px #EBEBEB;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #EBEBEB;

  div:nth-child(1), div:nth-child(3) {
    height: 40px;
    box-sizing: border-box;
    width: 150px;
    padding: 8px;
  }

  input {
    border-style: none;
    font-size: 17px;
    padding-left: 8px;
    width: 130px;
    border-radius: 3px;
    color: ${(props) => props.theme.lightFont};
    caret-color: transparent;

    &:focus {
      outline: none;
      border-color: #99ede6;
      background-color: #99ede6;
    }
  }
`;

const FormInput = styled.div``;

const Form = styled.form`
  & span {
    color: ${(props) => props.theme.strongFont};
    font-size: 13px;
  }

  ${FormInput}:nth-child(1) {
    margin-bottom: 8px;

    ${Input} {
      div:nth-child(2) {
        width: 24px;
        padding: 8px 0 8px 0;
    
        svg {
          vertical-align: middle;
          fill: ${(props) => props.theme.strongFont};
        }
      }
    }
  }

  ${FormInput}:nth-child(2) {
    cursor: pointer;
    margin-bottom: 16px;

    ${Input} {
      div:nth-child(1) {
        input {
          width: 80px;
        }
      }

      div:nth-child(2) {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: flex-end;
        padding-right: 16px;
        height: 40px;

        svg {
          width: 18px;
          fill: ${(props) => props.theme.strongFont};
        }
      }
    }
  }

  input[type="button"] {
    display: block;
    width: 100%;
    height: 46px;
    color: white;
    font-weight: 900;
    margin-top: 24px;
    background-color: ${(props) => props.theme.btnBackgroundColor};
    border: 1px solid ${(props) => props.theme.btnBackgroundColor};
    border-radius: 5px;
  }
`;

const ReservationForm = () => (
  <Root>
    <SubHeadPrice>
      <span>$37</span>
      <span>per night</span>
    </SubHeadPrice>
    <SubHeadReviews>
      <span>
        <svg viewBox="0 0 24 24" className="star rating" data-rating="1">
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
      </span>

      <span>4.80</span>
      <span>(334 reviews)</span>
    </SubHeadReviews>
    <DivDivider />

    <Form>
      <FormInput>
        <span>Dates</span>
        <Input>
          <div>
            <input type="text" value="Check-in" />
          </div>

          <div>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>

          <div>
            <input type="text" value="Checkout" />
          </div>
        </Input>
      </FormInput>

      <FormInput>
        <span>Guests</span>
        <Input>
          <div>
            <input type="text" placeholder="1 guest" />
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
        </Input>
      </FormInput>

      <input type="button" value="Reserve" />
      <span>You won&apos;t be charged yet</span>
    </Form>
  </Root>
);

export default ReservationForm;

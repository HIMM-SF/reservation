import React from "react";
import styled from "styled-components";
import Reservation from "./ReservationForm";
import { ReservationProvider } from "../context/reservation.context";
import ReservationController from "./ResponsiveController";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81px;
  color: #484848;
  border-bottom: 1px solid #e4e4e4;
`;

const Main = styled.div`
  height: 5000px;
`;

const ImageBody = styled.div`
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 441px;
  border-bottom: 1px solid #e4e4e4; 
`;

const MainBodyContainer = styled.div`
  display: flex;
  margin: 0px 251px 0px 251px;
  padding: 0px 24px 0px 24px;
  height: 100%;
`;

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainBodyLeft = styled.div`
  width: 594px;
`;

const MainBodyRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media screen and (max-width: 1127px) { 
    width: 100%;
    position: fixed;
    background-color: white;
    bottom: 0;
    right: 0;
    left: 0;
    height: 80px;
    -webkit-box-shadow: 0px -10px 54px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -10px 54px -14px rgba(0,0,0,0.75);
    box-shadow: 0px -10px 54px -20px rgba(0,0,0,0.75);
  }
`;

const App = () => (
  <>
    <Header>
      <header className="header">
        Navigation Bar 2
      </header>
    </Header>

    <Main>
      <ImageBody>
        Images
      </ImageBody>

      <MainBodyContainer>
        <MainBody>
          <MainBodyLeft>
            Left Content
          </MainBodyLeft>

          <MainBodyRight>
            <ReservationProvider>
              <Reservation />
              <ReservationController />
            </ReservationProvider>
          </MainBodyRight>

        </MainBody>
      </MainBodyContainer>
    </Main>
  </>
);

export default App;

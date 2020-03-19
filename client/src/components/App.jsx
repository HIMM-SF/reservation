import React from "react";
import styled from "styled-components";
import Reservation from "./Reservation";
import { ReservationProvider } from "../context/reservation.context";

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
            </ReservationProvider>
          </MainBodyRight>
        </MainBody>
      </MainBodyContainer>
    </Main>
  </>
);

export default App;

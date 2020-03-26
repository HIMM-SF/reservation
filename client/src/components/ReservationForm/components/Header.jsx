import React from "react";
import styled from "styled-components";
import OldBox from "../../theme/Box";

const Box = styled(OldBox)`
  &.price {
    span:nth-child(1) {
      font-size: 22px;
      font-weight: bold;
      color: ${(props) => props.theme.strongFont}
    }
  
    span:nth-child(2) {
      font-size: 12px;
      margin-left: 3px;
    }
  }

  &.stats {
    margin-top: 5px;

    span {
      font-size: 12px;
    }
    
    svg {
      position: relative;
      top: 2px;
      width: 12px;
      fill: #008489;
    }

    span:nth-child(2) {
      font-weight: bold;
      color: ${(props) => props.theme.strongFont}
    }

    span:nth-child(3) {
      margin-left: 2px;
      color: ${(props) => props.theme.lightFont}
    }
  }
`;

const Header = ({ price, reviews, mobile }) => (
  <>
    <Box className="price" height="28px;" alignItems="baseline">
      <span> ${ price } </span>
      <span> {mobile ? "/ night" : "per night"}</span>
    </Box>
    <Box className="stats" lineHeight={1} alignItems="baseline">
      <span>
        <svg viewBox="0 0 24 24" className="star rating" data-rating="1">
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
      </span>
      <span> 4.80 </span>
      <span> ({ reviews }{mobile || "reviews"}) </span>
    </Box>
  </>
);

export default React.memo(Header);

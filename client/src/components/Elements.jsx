import React from "react";
import styled from "styled-components";

const BoxStyled = styled.div`
  margin: 16px 0 24px 0;
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div.attrs((props) => ({
  styles: props.styles ? props.styles.toString() : "",
}))`
  ${(props) => props.styles};
`;

const DivDivider = styled.div`
  height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: solid 1px #EBEBEB;
`;

const SpanStyled = styled.span.attrs((props) => ({
  size: props.fontSize || 12,
  margin: props.marginLeft || 0,
  fontWeight: props.bold ? "bold" : "normal",
  color: props.lightFont ? "lightFont" : "strongFont",
}))`
  font-size: ${(props) => (props.size)}px;
  color: ${(props) => props.theme[props.color]};
  margin-left: ${(props) => props.margin}px;
  font-weight: ${(props) => props.fontWeight};

  svg {
    position: relative;
    top: 2px;
    width: 13px;
    fill: #008489;
  }
`;

const InputStyled = styled.input`
  border-style: none;
  font-size: 17px;
  padding-left: 8px;
  width: ${(props) => (props.width ? props.width : 130)}px;
  border-radius: 3px;
  caret-color: transparent;
  color: ${(props) => props.theme.lightFont};

  &:focus {
    outline: none;
    border-color: #99ede6;
    background-color: #99ede6;
  }
`;

export const Divider = () => <DivDivider />;

export const Box = ({ children }) => (
  <BoxStyled>
    { children }
  </BoxStyled>
);

export const Price = ({ price }) => (
  <div>
    <SpanStyled fontSize={22} bold>
      $
      {price}
    </SpanStyled>
    <SpanStyled marginLeft={4} bold>
      per night
    </SpanStyled>
  </div>
);

export const Stats = () => (
  <Div styles="line-height: 1">
    <SpanStyled>
      <svg viewBox="0 0 24 24" className="star rating" data-rating="1">
        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
      </svg>
    </SpanStyled>
    <SpanStyled>
      4.80
    </SpanStyled>
    <SpanStyled marginLeft={4} lightFont>
      (334 reviews)
    </SpanStyled>
  </Div>
);

export const Input = ({ placeholder, ...props }) => (
  <Div styles="height: 40px; box-sizing: border-box; width: 150px; padding: 8px;">
    <InputStyled placeholder={placeholder} {...props} />
  </Div>
);

export const FormControl = ({ name, children }) => (
  <Div styles="margin-bottom: 8px;">
    <SpanStyled fontSize={13}>{ name }</SpanStyled>
    { children }
  </Div>
);

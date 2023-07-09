import React from "react";
import styled from "styled-components";
export const FooterWrapper = styled.header`
  height: 12vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border-radius: 0 0 0.6em 0.6rem; */
  background-color: #182018;
  -webkit-box-shadow: 0px 3px 3px #a1d1a0);
  -moz-box-shadow: 0px 3px 3px #a1d1a0);
  box-shadow: 0px 3px 3px #a1d1a0;
  border-top: 1px solid #a1d1a0;
  bottom: 0rem;
  z-index: 0;
`;
export const FooterInfo = styled.p`
  color: white;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfo>Realizado por Juan Sebastian Viedma - 2023</FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
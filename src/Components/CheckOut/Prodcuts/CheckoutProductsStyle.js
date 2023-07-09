import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
  width: 40%;

  @media only screen and (max-width: 624px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    scale: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 600;
  font-size: 22px;
  @media only screen and (max-width: 624px) {
    text-align: center;
    margin-top:10px;
  }
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  position: relative;
  top: 1rem;
  width: 80%;
  height: 480px;
  margin: 0 auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: auto;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
  @media only screen and (max-width: 624px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    scale: 80%;
    width: 90%;
    padding: 14px;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    scale: 85%;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: #284129;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;
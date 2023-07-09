import React from "react";
import { DivDer, DivIzq, InfoSubHero, SubHeroWrapper } from "./SubHeroStyle";

const SubHero = () => {
  return (
    <SubHeroWrapper>
      <DivIzq>
        <InfoSubHero>Envios a todo el pais</InfoSubHero>
      </DivIzq>
      <DivDer>
        <InfoSubHero>6 Cuotas sin interes</InfoSubHero>
      </DivDer>
    </SubHeroWrapper>
  );
};

export default SubHero;
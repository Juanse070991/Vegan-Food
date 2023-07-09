import React, { useState } from "react";
import {
  BarraItem,
  BarraList,
  BlogHeroContainer,
  BlogSubTitle,
  BlogTitle,
  BlogWrapper,
  ContainerRecetas,
  ContainerTips,
  TipsInfo,
} from "./BlogStyle";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CardRecetas from "../../Components/CardRecetas/CardRecetas";

const Blog = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const recetas = useSelector((state) => state.recetas.recetas);

  return (
    <BlogWrapper>
      <BlogHeroContainer>
        <BlogTitle>Bienvenido a nuestro Blog</BlogTitle>
        <BlogSubTitle>¡Podes ser un cheff!</BlogSubTitle>
      </BlogHeroContainer>

      <ContainerTips>
        <BlogSubTitle>Los primeros productos</BlogSubTitle>
        <TipsInfo>
          Primero tenes que tener los ingredientes para cocinar lo que a vos te
          gusta. Compra primero los productos de tu receta favorita; despues iras
          sumando productos y recetas a tu repertorio. A continuacion te dejo mis
          recomendados para armar una barra basica.
        </TipsInfo>
        <BlogSubTitle>Platos más pedidos</BlogSubTitle>
        <TipsInfo>
          Podes Armar una cocina basica con tan solo 10 productos de lo que mas te
          gusta comer o beber, mas algunos ingredientes. Elegi tus favoritos de esta lista de
          basicos
        </TipsInfo>
        <TipsInfo>
          <BarraList>
            <BarraItem>Texturizados de soja.Substitutos carne y pollo </BarraItem>
            <BarraItem>Sesamo Tostado</BarraItem>
            <BarraItem>Espirales de lentejas rojas</BarraItem>
            <BarraItem>Hamburguesas Veganas</BarraItem>
            <BarraItem>Guisantes finos</BarraItem>
            <BarraItem>Ñoquis de remolacha</BarraItem>
            <BarraItem>Salchichas de vegetales</BarraItem>
            <BarraItem>Lentejas dupuy </BarraItem>
            <BarraItem>Harina veganas</BarraItem>
            <BarraItem>Aceite de oliva</BarraItem>
          </BarraList>
        </TipsInfo>
      </ContainerTips>
      <ContainerRecetas>
        <Paper square>
          <Tabs
            variant="fullWidth"
            textColor="secundary"
            indicatorColor="primary"
            value={tabIndex}
            onChange={handleTabChange}
          >
            <Tab label="Recetario 1">#1</Tab>
            <Tab label="Recetario 2">#2</Tab>
            <Tab label="Recetario 3">#3</Tab>
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {/* {tabIndex === 1 && <Box></Box>}
            {tabIndex === 2 && <Box></Box>} */}
            {recetas.map(
              (receta) =>
                tabIndex === receta.recetaNumber && (
                  <Box>
                    <CardRecetas key={receta.id} {...receta} />
                  </Box>
                )
            )}
          </Box>
        </Paper>
      </ContainerRecetas>
    </BlogWrapper>
  );
};

export default Blog;
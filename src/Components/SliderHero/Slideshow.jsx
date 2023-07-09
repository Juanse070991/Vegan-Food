import React from "react";
import {
  SlideContainer,
  SlideInfo,
  SlideInfoContainer,
  SliderButton,
  SliderWrapper,
  SlideTitle,
} from "./SlideshowStyle";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

import { Link } from "react-router-dom";

const slideImages = [
  {
    url: "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_auto_color,h_600,w_800/v1688660945/vegetariano_stt9wk.jpg",
    caption: "Slide 1",
    price: "$5000",
    linkpromo: "contacto",
    title: "Las mejores productos veganos",
    info: "",
    buttonInfo: "¡Consultanos!",
  },
  {
    url: "https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_600,w_800/v1688654072/fondochicavegan_gpq2bf.jpg",
    caption: "Slide 2",
    price: "$5000",
    linkpromo: "",
    title: "nutricion",
    info: "Este verano alimentate con nuestros combos",
    buttonInfo: "¡Aprovechalos!",
  },
  {
    url: "https://res.cloudinary.com/ddfzor3mh/image/upload/e_auto_color/v1688660945/fondogooo_px50md.jpg",
    caption: "Slide 3",
    price: "$5000",
    linkpromo: "blog",
    title: "Prepara las comidas mas ricas y sanas",
    info: "Visita nuestro blog y transformate en un experto cocinero vegano",
    buttonInfo: "Ver blog",
  },
];
const Slideshow = () => {
  return (
    <div style={{ width: "100%" }}>
      <Fade>
        {slideImages.map((slideImage, index) => (
          <SliderWrapper key={index}>
            <SlideContainer
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <SlideInfoContainer>
                <SlideTitle> {slideImage.title} </SlideTitle>
                <SlideInfo> {slideImage.info} </SlideInfo>
                <Link to={slideImage.linkpromo}>
                  <SliderButton> {slideImage.buttonInfo} </SliderButton>
                </Link>
              </SlideInfoContainer>
            </SlideContainer>
          </SliderWrapper>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
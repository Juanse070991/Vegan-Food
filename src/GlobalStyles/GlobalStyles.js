import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --blancotransp: rgba(250,250,250,0.2);
    --blancotransp2: rgba(250,250,250,0.6);
    --azultransp: rgba(0,0,110,0.2);
    --fondocarta: rgba(250,250,250,0.9);
    --azul: rgb(0, 48, 73);
    --rojo: rgb(214, 40, 40);
    --verdeOscuro: rgb(15, 127, 0);
    --verdeOscuro1: rgb(99, 997, 0);
    --verde: rgb(5, 191, 73);
    --blanco: rgb(234, 226, 183);
    --naranjatransp:  rgba(247,127,0, 0.4);
    --rojofuerte: #C21010;
    --negroheader: #000000;
    --fondobody: #FDF6EC;
    --naranja2: #F0A500;
    --grisbody: #EDF1D6;

    --fontroboto:  'Roboto', sans-serif;
    --fontlato: 'Lato', sans-serif;
    --fontgrande: 'Permanent Marker', cursive;
    --font4: 'Tilt Neon', cursive;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
    /* background:url(https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,h_600,w_800/v1688654472/vegan_q0d0j5.jpg); */


width:100%;
    color: black;
    font-family: var(--fontroboto);
     /* background-color: var(--fondobody);
   */
     background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  
}
a {
    text-decoration: none;
    color: black;
}
`;